import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { images } from "@/data/images";

const values = ["Integrity", "Professionalism", "Transparency", "Client First"];

export function AboutPreview() {
  return (
    <section className="bg-cream py-20">
      <div className="container-rayco grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src={images.about}
                alt="A home presented by Rayco Property Market Ghana Limited"
                width={900}
                height={720}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-2xl bg-rayco-900 p-5 text-white shadow-xl sm:right-6">
              <p className="font-serif text-2xl">Your next move starts here.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow">About Rayco</p>
          <h2 className="mt-3 font-serif text-4xl text-rayco-900 sm:text-5xl">Your Official Estate Agent in Ghana</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Rayco Property Market Ghana Limited serves as a real-estate broker and official estate agent for local
            and multinational clients in Ghana. We present homes, land and commercial space with clear communication
            and support that feels personal rather than transactional.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Whether you are a Ghanaian household searching for a home, a company housing staff, or an owner listing
            a property, we work from your brief and move at a considered pace.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {values.map((value) => (
              <li key={value} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium text-rayco-900">
                {value}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full bg-rayco-900 px-6 py-3 text-sm font-semibold text-white hover:bg-rayco-800"
          >
            Learn About Rayco
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
