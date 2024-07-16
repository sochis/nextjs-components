"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  NodeResizer,
  Connection,
  Node,
  Edge,
  reconnectEdge,
  useReactFlow,
  ReactFlowProvider,
  EdgeProps,
  OnEdgesChange,
  OnNodesChange,
  DefaultEdgeOptions,
  addEdge,
} from "reactflow";
import { v4 as uuidv4 } from "uuid";
import { I18nParams } from "@/types/language/language";
import FirstNode from "./node-types/first-node";
import MiddleNode from "./node-types/middle-node";
import LastNode from "./node-types/last-node";
import InputEdge from "./edge-types/input-edge";
import "reactflow/dist/style.css";

export function Flow({
  dict,
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
}: Readonly<{
  dict: I18nParams;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setNodes: Dispatch<
    SetStateAction<Node<{ label: string }, string | undefined>[]>
  >;
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
}>) {
  // Node configs
  useEffect(() => {
    nodes
      .filter((node) => node.id == "first-node")
      .forEach((node) => {
        node.data.placeholder = dict.common.flow.input_placeholder;
      });
    // It is necessary to insert a setter when information is retrieved from the DB, such as when updating.
    nodes.forEach((node) => {
      node.data.setNodes = setNodes;
    });
    edges.forEach((edge) => {
      edge.data.setEdges = setEdges;
    });
  }, []);

  const nodeTypes = useMemo(
    () => ({ first: FirstNode, middle: MiddleNode, last: LastNode }),
    [],
  );

  // Edge configs
  const edgeTypes = useMemo(
    () => ({ input: InputEdge as React.FC<EdgeProps> }),
    [],
  );

  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    [],
  );

  const onEdgeUpdateEnd = useCallback(
    (_: MouseEvent | TouchEvent, edge: Edge<any>): void => {
      if (!edgeUpdateSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }

      edgeUpdateSuccessful.current = true;
    },
    [setEdges],
  );

  const onConnect = useCallback(
    (connection: DefaultEdgeOptions & Connection) => {
      connection.data = {
        value: "",
        placeholder: dict.common.flow.input_placeholder,
        setEdges: setEdges,
      };
      connection.type = "input";

      setEdges((eds) => addEdge(connection, eds));
    },
    [],
  );

  // Dnd operation
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      let id, placeholder;
      if (type === "middle") {
        id = `middle_node_${uuidv4()}`;
        placeholder = dict.common.flow.input_placeholder;
      } else if (type === "last") {
        id = `last_node_${uuidv4()}`;
        placeholder = dict.common.flow.input_placeholder;
      } else {
        id = uuidv4();
        placeholder = "placeholder";
      }
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: id,
        type,
        position,
        data: {
          placeholder: placeholder,
          setNodes: setNodes,
        },
      };

      setNodes((nds: any) => nds.concat(newNode));
    },
    [screenToFlowPosition],
  );

  // Minimap config
  const nodeColor = (node: any) => {
    switch (node.type) {
      case "first":
        return "#CCDEFF";
      case "middle":
        return "#E0E0E0";
      case "last":
        return "#C4FFBC";
      default:
        return "#7E7E7E";
    }
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      fitViewOptions={{ minZoom: 0.1, padding: 2 }}
      attributionPosition="top-right"
      onEdgeUpdate={onEdgeUpdate}
      onEdgeUpdateStart={onEdgeUpdateStart}
      onEdgeUpdateEnd={onEdgeUpdateEnd}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <Background />
      <Controls />
      <NodeResizer />
      <MiniMap
        nodeStrokeWidth={3}
        zoomStep={2}
        zoomable
        pannable
        nodeColor={nodeColor}
      />
    </ReactFlow>
  );
}

export default function FlowWithProvider({
  dict,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  setNodes,
  setEdges,
}: Readonly<{
  dict: I18nParams;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setNodes: Dispatch<
    SetStateAction<Node<{ label: string }, string | undefined>[]>
  >;
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
}>) {
  return (
    <ReactFlowProvider>
      <Flow
        dict={dict}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        setNodes={setNodes}
        setEdges={setEdges}
      />
    </ReactFlowProvider>
  );
}
