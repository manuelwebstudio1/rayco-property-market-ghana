import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { images } from "@/data/images";

export const metadata = {
  title: "Contact Rayco Property Market Ghana Limited",
  description: "Call, WhatsApp or send an enquiry to Rayco Property Market Ghana Limited at JVJ4+2CM, Accra, Ghana.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Find Your Perfect Property"
        text="Whether you want to view a home, list a property or house staff in Accra, start here. A Rayco agent will take it from the first message."
        image={images.contact}
      />
      <ContactSection />
    </>
  );
}
