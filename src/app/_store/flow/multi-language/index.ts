import { create } from "zustand";
import type { SetStateAction, Dispatch } from "react";
import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { Language } from "@/types/language/language";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  language: Language;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
  setLang: (value: Language) => void;
};

export const initNodes = [
  {
    id: "first",
    type: "first",
    data: { value_en: "", value_ja: "" },
    position: { x: 0, y: 0 },
    draggable: false,
  },
];

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useMLFlowStore = create<RFState>((set, get) => ({
  nodes: initNodes,
  edges: [],
  language: "en",
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  setNodes: (update) => {
    set((state) => ({
      nodes: typeof update === "function" ? update(state.nodes) : update,
    }));
  },
  setEdges: (update) => {
    set((state) => ({
      edges: typeof update === "function" ? update(state.edges) : update,
    }));
  },
  setLang: (value: Language) => {
    set((_) => ({ language: value }));
  },
}));

export default useMLFlowStore;
