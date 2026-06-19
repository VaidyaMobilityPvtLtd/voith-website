// Legal / privacy page content
// Part of the VOITH site content. Edit freely — re-exported via data/content.ts.

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const legalUpdated = "Last updated: 1 January 2026";

export const legalSections: LegalSection[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    paragraphs: [
      'This Privacy Policy explains how Vaidya\'s Organization of Industries & Trading Houses ("VOITH", "we", "us") collects, uses, and protects information you share with us through this website.',
      "We collect only the information you choose to provide — such as your name, email address, phone number, and message when you use our contact or inquiry forms. We use this information solely to respond to your request, provide the services you ask for, and improve our communication with you.",
      "We do not sell or rent your personal information. We may share it with the relevant VOITH business unit or an authorised brand partner strictly to fulfil your request, and only to the extent required to do so.",
      "You may ask us to access, correct, or delete the personal information we hold about you at any time by writing to info@voith.com.np.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    paragraphs: [
      "By accessing this website you agree to use it for lawful purposes only and in a way that does not infringe the rights of, or restrict the use of this site by, any third party.",
      "The content on this website — including text, images, logos, and brand names — is provided for general information about VOITH and its businesses. Product details, figures, and availability may change without notice and do not constitute a binding offer.",
      "Trademarks and brand names referenced on this site (including those of our partners) remain the property of their respective owners and are used here for identification purposes only.",
      "VOITH reserves the right to modify or withdraw any part of this website at any time without liability.",
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    paragraphs: [
      "This website may use cookies and similar technologies to keep the site functioning, remember your preferences, and understand how visitors use our pages so we can improve them.",
      "Essential cookies are required for the site to work and cannot be switched off. Any analytics or preference cookies are used only in aggregate and never to identify you personally.",
      "You can control or delete cookies through your browser settings at any time. Disabling certain cookies may affect how parts of the site behave.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    paragraphs: [
      "The information on this website is provided in good faith and for general guidance only. While we make every effort to keep it accurate and current, we make no warranty as to its completeness or fitness for any particular purpose.",
      "Figures such as revenues, capacities, dates, and rankings are indicative and may be rounded or subject to revision. For confirmed, up-to-date details about any product, service, or business, please contact the relevant VOITH team directly.",
      "VOITH is not responsible for the content of any external website linked from this site.",
    ],
  },
];
