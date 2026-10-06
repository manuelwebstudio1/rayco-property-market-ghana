export const siteConfig = {
  name: "Rayco Property Market Ghana Limited",
  shortName: "Rayco",
  tagline: "Official estate agent for Ghana.",
  description:
    "Rayco Property Market Ghana Limited is a real-estate broker and official estate agent for local and multinational clients in Ghana — homes, land and commercial space.",
  url: "https://raycopropertygh.com",
  phone: "0545007867",
  phoneHref: "tel:0545007867",
  whatsapp: "233545007867",
  email: "info@raycopropertygh.com",
  location: "JVJ4+2CM, Accra, Ghana",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const whatsappDefaultMessage =
  "Hello Rayco Property Market Ghana Limited, I am interested in one of your properties and would like to get more information.";

export function whatsappLink(message = whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function propertyWhatsappMessage(title: string, location: string) {
  return `Hello Rayco Property Market Ghana Limited, I am interested in the ${title} in ${location}. Is it still available?`;
}

export function formatPrice(price: number, period?: "month" | null) {
  const formatted = new Intl.NumberFormat("en-GH").format(price);
  return period === "month" ? `GH₵ ${formatted} / month` : `GH₵ ${formatted}`;
}
