import React from "react";
import { 
  ShieldCheck, 
  Wrench, 
  AlertTriangle, 
  Ban, 
  Clock, 
  Award
} from "lucide-react";
import PolicyLayout, { PolicySection } from "@/components/ui/Common/PolicyLayout";

const WarrantyPolicy = () => {
  const sections: PolicySection[] = [
    {
      id: "overview",
      icon: ShieldCheck,
      iconName: "ShieldCheck",
      title: "1. Warranty Overview",
      content: (
        <>
          <p>
            At Pokobai/Shoplixy, we guarantee that all products sold are 100% authentic and brand new. Products that come with a manufacturer's warranty are supported directly by their respective brands or authorized distributors in Bangladesh.
          </p>
          <p>
            The warranty period varies by product and brand. Please refer to the specific product page or your invoice to check the exact warranty duration for your item.
          </p>
        </>
      )
    },
    {
      id: "brand-vs-store",
      icon: Award,
      iconName: "Award",
      title: "2. Brand vs. Store Warranty",
      content: (
        <>
          <p>
            <strong>Brand/Official Warranty:</strong> For items with official warranty (e.g., Samsung, Logitech, Razer), claims must be made at the brand's authorized service centers. We can guide you to the nearest center.
          </p>
          <p>
            <strong>Store/Shop Warranty:</strong> For items imported directly by Pokobai/Shoplixy, the warranty is provided by our own service center. You can bring or ship the product directly to us for servicing.
          </p>
        </>
      )
    },
    {
      id: "claim-process",
      icon: Wrench,
      iconName: "Wrench",
      title: "3. How to Claim Warranty",
      content: (
        <>
          <p>
            To initiate a warranty claim, please follow these steps:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Ensure the product is still within its valid warranty period.</li>
            <li>Keep the original invoice, warranty card (if provided), and original packaging ready.</li>
            <li>Contact our support team or bring the product to our Flagship Center.</li>
            <li>Our technical team will inspect the item. If the defect is covered under warranty, it will be sent for repair or replacement.</li>
          </ul>
        </>
      )
    },
    {
      id: "void-conditions",
      icon: Ban,
      iconName: "Ban",
      title: "4. Warranty Void Conditions",
      content: (
        <>
          <p>
            The warranty will be considered <strong>void</strong> and nullified under the following circumstances:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Physical Damage:</strong> Any dents, cracks, broken parts, or visible physical abuse.</li>
            <li><strong>Liquid Damage:</strong> Spills, moisture, or water damage (even for "water-resistant" devices, as per standard brand policies).</li>
            <li><strong>Burn/Electrical Surge:</strong> Damage caused by short circuits, power surges, or using incorrect power adapters.</li>
            <li><strong>Unauthorized Repair:</strong> If the product has been opened, modified, or repaired by unauthorized third-party technicians.</li>
            <li>Missing or tampered serial numbers and warranty stickers.</li>
          </ul>
        </>
      )
    },
    {
      id: "timelines",
      icon: Clock,
      iconName: "Clock",
      title: "5. Service Timelines",
      content: (
        <>
          <p>
            Warranty service times depend heavily on the severity of the issue and parts availability from the manufacturer.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Standard repair or replacement usually takes <strong>15 to 30 working days</strong>.</li>
            <li>In rare cases where parts need to be imported by the brand, it may take up to 45 days. We request your patience during this process.</li>
            <li>During the service period, we do not provide backup devices.</li>
          </ul>
        </>
      )
    },
    {
      id: "software",
      icon: AlertTriangle,
      iconName: "AlertTriangle",
      title: "6. Software & Data Loss",
      content: (
        <>
          <p>
            Warranty covers <strong>hardware defects only</strong>. Software issues, OS crashes, or malware infections are not covered under warranty.
          </p>
          <p>
            Pokobai/Shoplixy and authorized service centers are not responsible for any data loss during the repair process. We strongly advise you to <strong>back up all your data</strong> before submitting any storage device, phone, or computer for warranty claims.
          </p>
        </>
      )
    }
  ];

  return (
    <PolicyLayout
      title="Warranty Policy"
      subtitle="Understanding your coverage, claim process, and service guidelines."
      lastUpdated="May 23, 2026"
      sections={sections}
      sidebarTitle="Topics"
      contactTitle="Having trouble with your product?"
      contactDesc="Keep your invoice ready and contact our service team."
      contactAction="Claim Warranty"
    />
  );
};

export default WarrantyPolicy;
