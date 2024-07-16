import { Textarea } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import {
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
  EdgeProps,
  Edge,
} from "reactflow";

interface CustomEdgeProps extends EdgeProps {
  data: {
    label: string;
    value: string;
    placeholder: string;
    setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
  };
}

const InputEdge: React.FC<CustomEdgeProps> = ({ id, data, ...props }) => {
  const [edgePath, labelX, labelY] = getBezierPath(props);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data.setEdges((eds) =>
      eds.map((edge) =>
        edge.id === id
          ? { ...edge, data: { ...edge.data, value: event.target.value } }
          : edge,
      ),
    );
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className="rounded-xl font-bold min-w-64"
        >
          <Textarea
            fullWidth
            className="rounded-xl shadow"
            color="secondary"
            minRows={1}
            maxRows={3}
            label={data.label ?? "Option"}
            placeholder={data.placeholder}
            value={data.value ?? ""}
            onChange={handleChange}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default InputEdge;
