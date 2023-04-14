// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { KVNamespace } from "@cloudflare/workers-types";

type Data = {
  name: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const MY_KV = (process.env as { MY_KV: KVNamespace }).MY_KV;
  //
  const data = await MY_KV.get('HELLO');
  res.status(200).json({ name: data })
}



export const config = {
  runtime: 'experimental-edge',
};