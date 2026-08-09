import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductCatalog from "@/components/ProductCatalog";
import WhoWeSupply from "@/components/WhoWeSupply";
import WhyAMS from "@/components/WhyAMS";
import BulkQuoteForm from "@/components/BulkQuoteForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <ProductCatalog />
      <WhoWeSupply />
      <WhyAMS />
      <BulkQuoteForm />
    </div>
  );
}
