import { PricingPlan } from "@/types/pricePlan";


export const pricingPlanData: PricingPlan[] = [
    {
      name: "Hobby",
      monthlyPrice: "$0 / month",
      yearlyPrice: "$0 / year",
      description: "For individuals trying out the product",
      features: [
        "Access to all tools for 14 days",
        "No credit card required",
        "Community Support",
        "Access to Aceternity UI"
      ],
      buttonLabel: "Get Started",
      buttonClass: "bg-gray-800 text-white"
    },
    {
      name: "Starter",
      monthlyPrice: "$20 / month",
      yearlyPrice: "$200 / year",
      description: "For serious founders",
      features: [
        "Everything in Hobby +",
        "Access to Proactiv AI",
        "Priority tools access",
        "Support for Slack and Twitter",
        "Priority support",
        "99.67% Uptime SLA",
        "Access to Aceternity UI Templates"
      ],
      buttonLabel: "Get Started",
      buttonClass: "bg-gray-800 text-white"
    },
    {
      name: "Pro",
      monthlyPrice: "$30 / month",
      yearlyPrice: "$300 / year",
      description: "For small to large businesses",
      features: [
        "Everything in Starter +",
        "Access to our dev team",
        "Coffee with the CEO",
        "Access to Aceternity UI",
        "Request tools",
        "Advanced analytics",
        "Customizable dashboards",
        "24/7 customer support",
        "Unlimited data storage",
        "Enhanced security features"
      ],
      buttonLabel: "Get Started",
      buttonClass: "bg-blue-500 text-white"
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "For large scale businesses",
      features: [
        "Everything in Pro +",
        "HIPAA and SOC2 compliance",
        "Bulk email support",
        "Customizable dashboards",
        "24/7 customer support"
      ],
      buttonLabel: "Book a demo",
      buttonClass: "bg-gray-800 text-white"
    }
  ];
  