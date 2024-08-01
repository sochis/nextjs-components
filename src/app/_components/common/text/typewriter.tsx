import { TypewriterParams } from "@/types/common/text/typewriter";
import Typewriter from "typewriter-effect";

export default function TypewriterText({
  text,
  delay = 10,
  onComplete,
}: TypewriterParams) {
  return (
    <Typewriter
      key={text}
      onInit={(typewriter) => {
        typewriter
          .changeDelay(delay)
          .typeString(text)
          .callFunction(onComplete ?? (() => {}))
          .start();
      }}
      options={{ skipAddStyles: true, cursor: "" }}
    />
  );
}
