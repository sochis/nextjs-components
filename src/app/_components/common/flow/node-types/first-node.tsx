import { Textarea } from "@nextui-org/react";
import { Dispatch, SetStateAction, memo } from "react";
import { Handle, Position, Node } from "reactflow";

function FirstNode({
  id,
  data,
}: {
  id: string;
  data: {
    label: string;
    value: string;
    placeholder: string;
    setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  };
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    data.setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, value: event.target.value } }
          : node,
      ),
    );

  return (
    <div className="rounded-xl shadow">
      <div className="w-[480px]">
        <Textarea
          fullWidth
          maxRows={16}
          label={data.label ?? "First Question"}
          placeholder={data.placeholder}
          value={data.value ?? ""}
          onChange={handleChange}
          color="primary"
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
export default memo(FirstNode);
