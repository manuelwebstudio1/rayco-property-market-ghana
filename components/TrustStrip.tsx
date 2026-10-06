import { Handshake, Home, Landmark, ShieldCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: Home,
    title: "Official Estate Agency",
    text: "Representation for buyers, tenants, owners and occupiers in Ghana.",
  },
  {
    icon: ShieldCheck,
    title: "Local & Multinational",
    text: "We work with Ghanaian clients and companies relocating staff here.",
  },
  {
    icon: Landmark,
    title: "Homes, Land & Commercial",
    text: "Brokerage across Accra neighbourhoods and Greater Accra.",
  },
  {
    icon: Handshake,
    title: "Support Every Step",
    text: "From the first brief and viewing through to occupancy.",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-cream py-16">
      <div className="container-rayco grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.06}>
            <article className="h-full rounded-3xl border border-line bg-white p-6">
              <item.icon className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl text-rayco-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
