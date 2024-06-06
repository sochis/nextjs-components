"use client";

import ValidationInput from "@/components/common/input/input";
import { I18nParams } from "@/types/language/language";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LandingForm({
  dict,
}: Readonly<{
  dict: I18nParams;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const language = pathname.split("/")[1];
    const newPath = `/${language}/home`;

    router.push(newPath);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-2">
        <p className="text-xs">{dict.landing.ip_label}</p>
        <div className="flex flex-row gap-x-4 items-start">
          <ValidationInput
            isRequired
            className="w-96"
            type="text"
            variant="faded"
            placeholder={dict.landing.ip_hint}
            regexp={/[^\w]/}
            description={dict.landing.ip_description}
            errorMessage={dict.landing.ip_error_msg}
          />
          <Button size="md" type="submit">
            {dict.landing.ip_submit}
          </Button>
        </div>
      </div>
    </form>
  );
}
