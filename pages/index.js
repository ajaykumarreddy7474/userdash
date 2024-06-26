import Header from "@/components/Header";
import Table from "@/components/Table";
import TopCard from "@/components/TopCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-100 min-h-screen ">
        <Header />
        <TopCard />
        <Table /> 
  
      </main>
    </>
  );
}
