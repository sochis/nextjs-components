import "server-only";

import Image from "next/image";
import { LangParams } from "@/types/language/language";
import ProductImage from "@/assets/images/home/product-image.webp";
import Introduction from "@/components/language/main/home/introduction";

export default async function Home({
  params,
}: Readonly<{
  params: LangParams;
}>) {
  return (
    <main className="flex flex-row p-24">
      <Introduction params={params} />
      <div className="w-1/2 px-24 flex justify-center">
        <Image
          className="rounded-3xl"
          priority
          src={ProductImage}
          alt={"Home Product Image"}
        />
      </div>
    </main>
  );
}
