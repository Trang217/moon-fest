import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProductIntro from "../components/ProductIntro";
import ProductList from "../components/ProductList";
import { products } from "../data";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Hero />
        <ProductIntro />
        <ProductList products={products} />
      </Layout>
    </div>
  );
}
