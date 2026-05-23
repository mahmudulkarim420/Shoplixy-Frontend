import React from "react";
import { 
  RotateCcw, 
  CheckCircle2, 
  Ban, 
  CreditCard, 
  RefreshCw, 
  ShieldCheck,
  XCircle
} from "lucide-react";
import PolicyLayout, { PolicySection } from "@/components/ui/Common/PolicyLayout";

const ReturnAndRefund = () => {
  const sections: PolicySection[] = [
    {
      id: "overview",
      icon: RotateCcw,
      iconName: "RotateCcw",
      title: "1. Return Policy Overview",
      content: (
        <>
          <p>
            At Pokobai/Shoplixy, we want you to be completely satisfied with your purchase. If you are not entirely happy with your order, we offer a straightforward return process.
          </p>
          <p>
            You have <strong>3 to 7 calendar days</strong> to return an item from the date you received it, depending on the product category. Please check the specific product page for the exact return window applicable to your item.
          </p>
        </>
      )
    },
    {
      id: "conditions",
      icon: CheckCircle2,
      iconName: "CheckCircle2",
      title: "2. Conditions for Return",
      content: (
        <>
          <p>
            To be eligible for a return, your item must meet the following criteria:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>The item must be unused, unwashed, and in the same condition that you received it.</li>
            <li>It must be in the original packaging, including all accessories, manuals, and free gifts.</li>
            <li>Any factory seals, tags, or protective films must remain completely intact.</li>
            <li>You must present a valid receipt or proof of purchase.</li>
          </ul>
        </>
      )
    },
    {
      id: "non-returnable",
      icon: Ban,
      iconName: "Ban",
      title: "3. Non-Returnable Items",
      content: (
        <>
          <p>
            For hygiene, security, and copyright reasons, several types of goods are exempt from being returned:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Downloadable software products, digital game keys, and subscription codes.</li>
            <li>Earphones, headsets, and wearables (if the seal is broken or packaging is opened).</li>
            <li>Gift cards and promotional vouchers.</li>
            <li>Products that have been physically damaged, burned, or altered by the user.</li>
          </ul>
        </>
      )
    },
    {
      id: "refund-process",
      icon: CreditCard,
      iconName: "CreditCard",
      title: "4. Refund Process & Timelines",
      content: (
        <>
          <p>
            Once we receive your item, our quality assurance team will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Mobile Banking (bKash/Nagad):</strong> 3 to 5 business days.</li>
            <li><strong>Credit/Debit Cards:</strong> 7 to 14 business days (depending on your card issuer's policies).</li>
            <li><strong>Store Credit:</strong> Issued within 24 hours of approval.</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
            Note: Original shipping costs are non-refundable. If you receive a refund, the cost of return shipping may be deducted from your refund.
          </p>
        </>
      )
    },
    {
      id: "exchanges",
      icon: RefreshCw,
      iconName: "RefreshCw",
      title: "5. Exchange Policy",
      content: (
        <>
          <p>
            We only replace items if they are defective, damaged out-of-the-box, or if you received the incorrect item. If you need to exchange an item for the exact same product, please contact our support team immediately upon delivery.
          </p>
          <p>
            In cases where the replacement item is out of stock, we will offer you a full refund or an alternative product of similar value.
          </p>
        </>
      )
    },
    {
      id: "warranty",
      icon: ShieldCheck,
      iconName: "ShieldCheck",
      title: "6. Warranty Claims",
      content: (
        <>
          <p>
            Products covered by a manufacturer or brand warranty must be claimed through the respective authorized service centers. Pokobai/Shoplixy acts as a facilitator and will assist you in connecting with the authorized service providers.
          </p>
          <p>
            Warranty voids if the product shows signs of physical damage, liquid spillage, unauthorized repair, or improper usage.
          </p>
        </>
      )
    },
    {
      id: "cancellations",
      icon: XCircle,
      iconName: "XCircle",
      title: "7. Order Cancellations",
      content: (
        <>
          <p>
            You can cancel your order free of charge at any time before it has been dispatched from our warehouse. To cancel, please contact customer support immediately.
          </p>
          <p>
            If the order has already been shipped, you must refuse the delivery at the doorstep. Once the item is returned to us, we will process your refund minus the shipping fee.
          </p>
        </>
      )
    }
  ];

  return (
    <PolicyLayout
      title="Return & Refund Policy"
      subtitle="Everything you need to know about returning items and getting refunds."
      lastUpdated="May 23, 2026"
      sections={sections}
      sidebarTitle="Contents"
      contactTitle="Need to initiate a return?"
      contactDesc="Have your order number ready and reach out to us."
      contactAction="Submit Return Request"
    />
  );
};

export default ReturnAndRefund;
