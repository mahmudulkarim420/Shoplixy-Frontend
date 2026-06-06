import OffersPage from "@/features/offers/components/OffersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers & Deals | Shoplixy",
  description: "Discover the best offers, flash sales, and seasonal campaigns at Shoplixy.",
};

export default function Page() {
  return <OffersPage />;
}
