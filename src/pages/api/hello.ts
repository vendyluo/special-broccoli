import { KVNamespace } from "@cloudflare/workers-types";

import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {

  // @ts-ignore
  const MY_KV = (process.env as { MY_KV: KVNamespace }).MY_KV;

  const data = await MY_KV.get('HELLO');
  return new Response(
    JSON.stringify({
      name: data,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}