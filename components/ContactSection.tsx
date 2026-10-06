import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { FadeIn } from "./FadeIn";
import { siteConfig, whatsappLink } from "@/data/site";

export function ContactSection() {
  return (
    <section className="bg-cream py-20">
      <div className="container-rayco grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-serif text-4xl text-rayco-900 sm:text-5xl">Let&apos;s Find Your Next Property</h2>
          <p className="mt-4 max-w-md text-muted">
            Call, message or send an enquiry. A Rayco agent will help you take the next step — whether that is a viewing, a listing or housing for a local or multinational brief.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold-dark" />
              <a href={siteConfig.phoneHref} className="font-medium text-rayco-900">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold-dark" />
              <a href={`mailto:${siteConfig.email}`} className="text-rayco-900">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold-dark" />
              {siteConfig.location}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.phoneHref} className="rounded-full bg-rayco-900 px-5 py-3 text-sm font-semibold text-white">
              Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
            <Link href="/properties" className="rounded-full border border-rayco-900/20 px-5 py-3 text-sm font-semibold text-rayco-900">
              Browse Properties
            </Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white">
            <iframe
              title="Rayco Property Market Ghana Limited at JVJ4+2CM, Accra"
              src="https://maps.google.com/maps?q=JVJ4%2B2CM%20Accra%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-56 w-full border-0"
              loading="lazy"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
