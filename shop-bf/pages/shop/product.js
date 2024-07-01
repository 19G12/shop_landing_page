import Layout from "@/components/layout";
import Intro from "@/components/intro";
import About from "@/components/about";
import Rating from "@/components/rating";

export default function Product() {
  return (
    <>
      <Layout>
        <Intro />
      </Layout>
      <Layout>
        <About />
      </Layout>
      <Layout>
        <Rating />
      </Layout>
    </>
  );
}
