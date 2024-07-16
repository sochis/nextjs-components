import { Textarea } from "@nextui-org/react";
import { Dispatch, SetStateAction, memo } from "react";
import { Handle, Position, NodeResizer, Node } from "reactflow";

function MiddleNode({
  id,
  data,
  selected,
}: Readonly<{
  id: string;
  data: {
    label: string;
    value: string;
    placeholder: string;
    setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  };
  selected: boolean;
}>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    data.setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, value: event.target.value } }
          : node,
      ),
    );

  return (
    <div>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        maxWidth={600}
        minWidth={100}
        minHeight={30}
      />
      <Handle type="target" position={Position.Top} />
      <div className="min-w-80 p-2">
        <Textarea
          className="rounded-xl shadow"
          fullWidth
          maxRows={16}
          label={data.label ?? "Question"}
          placeholder={data.placeholder}
          value={data.value ?? ""}
          onChange={handleChange}
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#FF0000" }}
      />
    </div>
  );
}
export default memo(MiddleNode);
