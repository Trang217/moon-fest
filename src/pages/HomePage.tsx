import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProductIntro from "../components/ProductIntro";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Hero />
        <ProductIntro />
      </Layout>
    </div>
  );
}
