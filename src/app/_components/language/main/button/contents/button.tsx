import "server-only";

import { I18nParams } from "@/types/language/language";
import ClickableChip from "@/components/common/chip/chip";
import TextLink from "@/components/common/link/link";
import { Button, Divider } from "@nextui-org/react";
import { AiOutlineGlobal } from "react-icons/ai";

export default async function NextUIButtonContent({
  dict,
}: Readonly<{
  dict: I18nParams;
}>) {
  return (
    <div className="flex flex-col gap-y-6 pt-3">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row gap-x-4 items-center">
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Button color="danger">Button</Button>
          <Button color="primary">Button</Button>
          <Button color="secondary">Button</Button>
          <Button color="success">Button</Button>
          <Button color="warning">Button</Button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Button radius="full">Button</Button>
          <Button radius="lg">Button</Button>
          <Button radius="md">Button</Button>
          <Button radius="sm">Button</Button>
          <Button radius="none">Button</Button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Button variant="bordered">Button</Button>
          <Button variant="faded">Button</Button>
          <Button variant="flat">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="light">Button</Button>
          <Button variant="shadow">Button</Button>
          <Button variant="solid">Button</Button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Button isDisabled>Button</Button>
          <Button disabled>Button</Button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Button isLoading>Button</Button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Button startContent={<AiOutlineGlobal />}>Button</Button>
          <Button startContent={<AiOutlineGlobal />} isIconOnly />
          <Button className="bg-gradient-to-tr from-blue-500 to-green-500 text-white shadow-lg">
            Button
          </Button>
        </div>
      </div>
      <Divider />
      <ClickableChip size="sm">
        <TextLink
          isExternal
          className="text-white text-xs font-semibold"
          href={"https://nextui.org/docs/components/button"}
        >
          Document Link
        </TextLink>
      </ClickableChip>
    </div>
  );
}
