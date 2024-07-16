import { Textarea } from "@nextui-org/react";
import { Dispatch, SetStateAction, memo } from "react";
import { Handle, Position, NodeResizer, Node } from "reactflow";

function LastNode({
  id,
  data,
  selected,
}: {
  id: string;
  data: {
    label: string;
    value: string;
    placeholder: string;
    setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  };
  selected: boolean;
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
    <div>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        maxWidth={600}
        minWidth={480}
        minHeight={30}
      />
      <Handle type="target" position={Position.Top} />
      <div className="min-w-[480px] p-2">
        <Textarea
          className="rounded-xl shadow"
          fullWidth
          maxRows={25}
          label={data.label ?? "Answer"}
          placeholder={data.placeholder}
          value={data.value ?? ""}
          onChange={handleChange}
          color="success"
        />
      </div>
    </div>
  );
}
export default memo(LastNode);
