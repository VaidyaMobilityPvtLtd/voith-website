import type { Metadata } from "next";
import ContactPageView from "@/components/pages/ContactPageView";
import { pageMeta } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — VOITH",
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  return <ContactPageView />;
}
