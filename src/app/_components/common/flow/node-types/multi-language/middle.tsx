import useMLFlowStore from "@/store/flow/multi-language/index";
import { Textarea } from "@nextui-org/react";
import {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Handle, Position, NodeResizer, Node } from "reactflow";

function MiddleNode({
  id,
  data,
  selected,
}: Readonly<{
  id: string;
  data: {
    label: string;
    value_en: string;
    value_ja: string;
    placeholder: string;
    setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  };
  selected: boolean;
}>) {
  const { language } = useMLFlowStore();

  const [inputValue, setInputValue] = useState(() =>
    language === "en" ? data.value_en : language === "ja" ? data.value_ja : "",
  );

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
      setInputValue(event.target.value);
      data.setNodes((nds) =>
        nds.map((node) =>
          node.id === id
            ? {
                ...node,
                data: {
                  ...node.data,
                  ...(language === "en" && { value_en: event.target.value }),
                  ...(language === "ja" && { value_ja: event.target.value }),
                },
              }
            : node,
        ),
      );
    },
    [data, id, language],
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
          value={inputValue ?? ""}
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
