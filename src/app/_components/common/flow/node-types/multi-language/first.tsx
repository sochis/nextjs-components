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
import { Handle, Position, Node } from "reactflow";

function FirstNode({
  id,
  data,
}: {
  id: string;
  data: {
    label: string;
    value_en: string;
    value_ja: string;
    placeholder: string;
    setNodes: Dispatch<SetStateAction<Node<any>[]>>;
  };
}) {
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
    <div className="rounded-xl shadow">
      <div className="w-[480px]">
        <Textarea
          fullWidth
          maxRows={16}
          label={data.label ?? "First Question"}
          placeholder={data.placeholder}
          value={inputValue ?? ""}
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
