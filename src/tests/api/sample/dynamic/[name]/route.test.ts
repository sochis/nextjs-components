/**
 * @jest-environment node
 */

import { testApiHandler } from "next-test-api-route-handler";

import * as appHandler from "@/api/sample/dynamic/[name]/route";

it("get dynamic value", async () => {
  await testApiHandler({
    appHandler,
    params: { name: "User1" },
    async test({ fetch }) {
      const res = await fetch({ method: "GET" });
      expect(res.status).toBe(200);
    },
  });
});

it("post dynamic value", async () => {
  await testApiHandler({
    appHandler,
    params: { name: "User1" },
    async test({ fetch }) {
      const res = await fetch({
        method: "POST",
        body: JSON.stringify({ age: "20" }),
      });
      expect(res.status).toBe(200);
    },
  });
});
