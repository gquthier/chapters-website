import PartnersHero from '../../components/PartnersHero';
import PartnershipDetails from '../../components/PartnershipDetails';
import ContentConcept from '../../components/ContentConcept';
import PartnersCTA from '../../components/PartnersCTA';
import ApplicationForm from '../../components/ApplicationForm';

export const metadata = {
  title: "Chapters Publishers Program - Get paid reliably for content",
  description: "Join our select roster of Publishers for stable income and long-term partnership. No late payments, no ghosting - just reliable payouts for quality content.",
  keywords: ["content creator", "influencer program", "partnership", "reliable income", "publisher program", "content monetization"],
  openGraph: {
    title: "Chapters Publishers Program - Get paid reliably",
    description: "Stable income for creators in self-improvement, mindset, and personal growth",
    url: "https://getchapters.app/partners",
  },
};

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnershipDetails />
      <ContentConcept />
      <PartnersCTA />
      <ApplicationForm />
    </main>
  );
}