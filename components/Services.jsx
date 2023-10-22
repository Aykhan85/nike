import { services } from "@/constants"
import { ServiceCard } from "."

export default function Services() {
    return (
        <section className="padding-x py-10 max-container flex justify-center flex-wrap gap-9">
            {services.map(service => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    )
}
