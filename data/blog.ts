export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "working-with-an-estate-agent-in-ghana",
    title: "Working with an Estate Agent in Ghana",
    excerpt:
      "What a broker actually does for buyers, tenants and owners — and how to brief one well.",
    category: "Advice",
    date: "22 September 2026",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    content: [
      "A good estate agent is not a listing board. The work is to understand your brief, shortlist properties that fit, arrange viewings and stay present through the details that follow.",
      "Start with use, budget and timing. Are you buying a family home, renting for a posting, or looking for an office? Local clients and multinational occupiers often need different neighbourhoods, lease structures and occupancy dates.",
      "Visit more than once. Accra streets feel different at 8am and at 6pm. Ask about access, power, water and who actually occupies the neighbouring properties.",
      "Documentation should sit with a qualified lawyer. Your agent can help you gather questions and keep the process moving; they should not replace a proper search of title.",
      "Rayco Property Market Ghana Limited works as a broker and official estate agent for clients in Ghana. Bring a clear brief and we will work from that — not from a generic ranking of ‘best areas’.",
    ],
  },
  {
    slug: "housing-for-multinational-teams-in-accra",
    title: "Housing for Multinational Teams in Accra",
    excerpt:
      "How companies and assignees typically approach neighbourhoods, leases and viewing timelines.",
    category: "Relocation",
    date: "8 September 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-16d5aca96d2c?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Multinational teams arriving in Accra usually need two things at once: a home that works for daily life, and a process that respects a start date.",
      "Cantonments, Labone, Ridge, Airport Hills and Trasacco Valley are common first shortlists because of access, security compounds and proximity to offices, schools and the airport. The right choice still depends on the household, not the brand of the neighbourhood.",
      "Serviced apartments can be a bridge while a longer lease is agreed. Houses with staff quarters and generators are often requested for family postings.",
      "Share the occupancy date, budget band and any non-negotiables (schools, parking, furnished vs unfurnished) before the first viewing. It saves everyone a wasted afternoon.",
      "Rayco represents both local and multinational clients. If you are housing staff in Ghana, we can assemble a viewing day around a written brief and keep availability current as you decide.",
    ],
  },
  {
    slug: "how-property-brokerage-works-in-ghana",
    title: "How Property Brokerage Works in Ghana",
    excerpt:
      "A plain-language look at representation, viewings and what happens after you make an enquiry.",
    category: "Brokerage",
    date: "19 August 2026",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Brokerage is representation. You tell us what you need; we look for a fit among homes, land and commercial space that are actually available.",
      "An enquiry is not a reservation. Availability can change between a first WhatsApp message and a viewing. We confirm what is still on the market before you travel across town.",
      "Owners instruct us to present a property clearly. Occupiers instruct us to compare options without pressure. The same firm can do both, provided the conversation stays honest about condition, price and timing.",
      "After a viewing, the next step is usually a second look, a conversation about terms, and a referral to legal or technical professionals where needed.",
      "If you are weighing rent versus buy, Rayco can show current rentals and homes for sale side by side so the comparison is based on actual options, not theory.",
    ],
  },
  {
    slug: "checking-title-before-you-buy-in-ghana",
    title: "Checking Title Before You Buy in Ghana",
    excerpt:
      "Boundaries, documents and professional support — the essentials before money moves.",
    category: "Buying Guide",
    date: "2 August 2026",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Title is not a formality. Photographs of a house or an empty plot tell you very little about who can legally transfer it.",
      "Confirm the boundaries with a licensed surveyor. Walk the land. Understand how you reach it in the rainy season as well as in the dry season.",
      "Ask about intended planning use and neighbouring activity. A quiet residential plot next to a future commercial strip is a different proposition.",
      "Documentation should be reviewed by a lawyer before money moves. Verbal assurances are not a substitute for a proper search.",
      "Rayco Property Market Ghana Limited helps clients look at properties with a practical eye, then connect with the right next professionals. We do not replace legal advice — we make sure you are not making the decision in the dark.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
