import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>productName@bf</title>
      </Head>
      <div className="w-screen h-screen bg-[#F9FCFB] overflow-hidden">
        {children}
      </div>
    </>
  );
}
