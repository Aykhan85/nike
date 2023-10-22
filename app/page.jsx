import { CustomerReviews, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>
  );
}
