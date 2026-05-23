import React from "react";
import { 
  FileText, 
  ShieldCheck, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  RotateCcw,
  AlertCircle
} from "lucide-react";
import PolicyLayout, { PolicySection } from "@/components/ui/Common/PolicyLayout";

const TermsAndConditions = () => {
  const sections: PolicySection[] = [
    {
      id: "introduction",
      icon: FileText,
      iconName: "FileText",
      title: "1. Introduction",
      content: (
        <>
          <p>
            Welcome to Pokobai/Shoplixy. These Terms and Conditions govern your use of our website and the purchase of products from our platform. By accessing our site and placing an order, you agree to be bound by these terms.
          </p>
          <p>
            Please read these terms carefully. If you do not agree with any part of these terms, you must not use our website or services. We reserve the right to update or modify these terms at any time without prior notice.
          </p>
        </>
      )
    },
    {
      id: "account",
      icon: ShieldCheck,
      iconName: "ShieldCheck",
      title: "2. User Accounts & Security",
      content: (
        <>
          <p>
            To access certain features of the site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>You must provide accurate and complete information during registration.</li>
            <li>You are responsible for all activities that occur under your account.</li>
            <li>We reserve the right to suspend or terminate accounts that violate our policies or engage in fraudulent activities.</li>
          </ul>
        </>
      )
    },
    {
      id: "products",
      icon: ShoppingCart,
      iconName: "ShoppingCart",
      title: "3. Products & Pricing",
      content: (
        <>
          <p>
            We strive to display product colors, specifications, and pricing as accurately as possible. However, we do not guarantee that your monitor's display of any color will be completely accurate.
          </p>
          <p>
            All prices are listed in Bangladeshi Taka (BDT) unless otherwise noted. We reserve the right to modify prices, discontinue products, or cancel orders where a pricing error has occurred, even after an order confirmation has been sent.
          </p>
        </>
      )
    },
    {
      id: "payments",
      icon: CreditCard,
      iconName: "CreditCard",
      title: "4. Payments & Billing",
      content: (
        <>
          <p>
            We offer multiple payment options, including Cash on Delivery (COD) and secure online payments via SSLCommercz (Credit/Debit Cards, Mobile Banking like bKash, Nagad).
          </p>
          <p>
            By submitting payment information, you represent and warrant that you have the legal right to use the payment method provided. All online transactions are encrypted and processed securely.
          </p>
        </>
      )
    },
    {
      id: "shipping",
      icon: Truck,
      iconName: "Truck",
      title: "5. Shipping & Delivery",
      content: (
        <>
          <p>
            We deliver across all 64 districts in Bangladesh. Estimated delivery times are provided at checkout but are not guaranteed. Delays may occur due to unforeseen logistical issues or extreme weather conditions.
          </p>
          <p>
            Risk of loss and title for items purchased pass to you upon our delivery to the carrier. Please inspect your package upon arrival and report any damage within 24 hours.
          </p>
        </>
      )
    },
    {
      id: "returns",
      icon: RotateCcw,
      iconName: "RotateCcw",
      title: "6. Returns & Refunds",
      content: (
        <>
          <p>
            Our Return & Refund Policy is an integral part of these Terms. Products may be returned within the specified warranty or return window if they are defective or not as described.
          </p>
          <p>
            Returned items must be in their original packaging with all accessories and unbroken seals (where applicable). Refunds will be processed to the original payment method or as store credit.
          </p>
        </>
      )
    },
    {
      id: "liability",
      icon: AlertCircle,
      iconName: "AlertCircle",
      title: "7. Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by law, Pokobai/Shoplixy shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or website.
          </p>
          <p>
            Our total liability for any claim arising out of these terms shall not exceed the amount paid by you for the product in question.
          </p>
        </>
      )
    }
  ];

  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our platform."
      lastUpdated="May 23, 2026"
      sections={sections}
      sidebarTitle="Contents"
      contactTitle="Still have questions?"
      contactDesc="Our support team is here to help you."
      contactAction="Contact Support"
    />
  );
};

export default TermsAndConditions;
