import { products } from "@/constants"
import { ProductCard } from "."
export default function PopularProducts() {
    return (
        <section className="padding max-container" id="products">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg font-montserrat mt-2 text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 sm:gap-4">
                {products.map(product => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}
