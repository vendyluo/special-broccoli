import { Inter } from 'next/font/google'
import { GetServerSideProps } from "next";
import React from "react";
import type { KVNamespace } from "@cloudflare/workers-types";

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  data: number;
}


const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {


  // @ts-ignore
  const MY_KV = (process.env as { MY_KV: KVNamespace }).MY_KV;
  //
  const data = await MY_KV.get('HELLO');
  // const data = Math.random();

  return {
    props: {
      data: data
    }
  }
};