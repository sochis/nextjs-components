import { I18nParams, Language } from "@/types/language/language";
import { Dispatch, SetStateAction } from "react";
import {
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  PanelPosition,
} from "reactflow";

export interface ReactFlowParams {
  dict: I18nParams;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setNodes: Dispatch<
    SetStateAction<Node<{ label: string }, string | undefined>[]>
  >;
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
  panel?: {
    className?: string | undefined;
    position: PanelPosition;
    language: Language;
    children: React.ReactNode;
  };
}
