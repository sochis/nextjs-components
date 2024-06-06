"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { getUser, postUser } from "@/utils/api/sample/dynamic/[name]";

export default function RequestSample({}) {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  return (
    <>
      <Button
        onClick={async () => {
          const data = await getUser("user1");
          setName(data);
        }}
      ></Button>
      <p>{name}</p>
      <Button
        onClick={async () => {
          const data = await postUser("user1", { age: "20" });
          setUser(JSON.stringify(data));
        }}
      ></Button>
      <p>{user}</p>
    </>
  );
}
