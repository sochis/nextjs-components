import useMLFlowStore from "@/store/flow/multi-language/index";
import { Textarea } from "@nextui-org/react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
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
    value_en: string;
    value_ja: string;
    placeholder: string;
    setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
  };
}

export const InputEdge: React.FC<CustomEdgeProps> = ({
  id,
  data,
  ...props
}) => {
  const { language } = useMLFlowStore();
  const [edgePath, labelX, labelY] = getBezierPath(props);

  // Initialize inputValue based on current language
  const [inputValue, setInputValue] = useState(() => {
    return language === "en"
      ? data.value_en
      : language === "ja"
        ? data.value_ja
        : "";
  });

  // Update inputValue when language or data changes
  useEffect(() => {
    const newValue =
      language === "en"
        ? data.value_en
        : language === "ja"
          ? data.value_ja
          : "";
    setInputValue(newValue);
  }, [language]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      data.setEdges((eds) =>
        eds.map((edge) =>
          edge.id === id
            ? {
                ...edge,
                data: {
                  ...edge.data,
                  ...(language === "en" && { value_en: newValue }),
                  ...(language === "ja" && { value_ja: newValue }),
                },
              }
            : edge,
        ),
      );
    },
    [data, id, language],
  );

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
            value={inputValue ?? ""}
            onChange={handleChange}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
