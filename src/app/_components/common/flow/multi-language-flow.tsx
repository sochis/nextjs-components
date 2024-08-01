"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
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
  DefaultEdgeOptions,
  addEdge,
  Panel,
} from "reactflow";
import { v4 as uuidv4 } from "uuid";
import FirstNode from "./node-types/multi-language/first";
import MiddleNode from "./node-types/multi-language/middle";
import LastNode from "./node-types/multi-language/last";
import { InputEdge } from "./edge-types/multi-language/input";
import "reactflow/dist/style.css";
import { ReactFlowParams } from "@/types/common/flow/flow";

function MultiLanguageFlow({
  dict,
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  panel,
}: Readonly<ReactFlowParams>) {
  // Node configs
  useEffect(() => {
    nodes
      .filter((node: { id: string }) => node.id == "first")
      .forEach((node: { data: { placeholder: any } }) => {
        node.data.placeholder = dict.common.flow.input_placeholder;
      });
    // It is necessary to insert a setter when information is retrieved from the DB, such as when updating.
    nodes.forEach((node: Node) => {
      node.data.setNodes = setNodes;
    });
    edges.forEach((edge: Edge) => {
      edge.data.setEdges = setEdges;
    });
  }, []);

  const nodeTypes = useMemo(
    () => ({ first: FirstNode, question: MiddleNode, answer: LastNode }),
    [],
  );

  // Edge configs
  const edgeTypes = useMemo(
    () => ({ answer: InputEdge as React.FC<EdgeProps> }),
    [],
  );

  const edgeUpdateSuccessful = useRef(true);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((els: Edge[]) => reconnectEdge(oldEdge, newConnection, els));
    },
    [],
  );

  const onEdgeUpdateEnd = useCallback(
    (_: MouseEvent | TouchEvent, edge: Edge<any>): void => {
      if (!edgeUpdateSuccessful.current) {
        setEdges((eds: any[]) =>
          eds.filter((e: { id: string }) => e.id !== edge.id),
        );
      }

      edgeUpdateSuccessful.current = true;
    },
    [setEdges],
  );

  const onConnect = useCallback(
    (connection: DefaultEdgeOptions & Connection) => {
      connection.data = {
        value_en: "",
        value_ja: "",
        placeholder: dict.common.flow.input_placeholder,
        setEdges: setEdges,
      };
      connection.type = "answer";

      setEdges((eds: Edge[]) => addEdge(connection, eds));
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
      if (type === "question") {
        id = `question_node_${uuidv4()}`;
        placeholder = dict.common.flow.input_placeholder;
      } else if (type === "answer") {
        id = `answer_node_${uuidv4()}`;
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
  const nodeColor = (node: Node) => {
    switch (node.type) {
      case "first":
        return "#CCDEFF";
      case "question":
        return "#E0E0E0";
      case "answer":
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
      {panel !== undefined ? (
        <Panel className={panel.className} position={panel.position}>
          {panel.children}
        </Panel>
      ) : null}
    </ReactFlow>
  );
}

export function MLFlowWithProvider({
  dict,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  setNodes,
  setEdges,
  panel,
}: Readonly<ReactFlowParams>) {
  return (
    <ReactFlowProvider>
      <MultiLanguageFlow
        dict={dict}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        setNodes={setNodes}
        setEdges={setEdges}
        panel={panel}
      />
    </ReactFlowProvider>
  );
}
