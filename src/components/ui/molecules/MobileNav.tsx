import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const MobileNav = ({}) => {
  // Define your features array
  const product = [
    {
      title: "Features Overview",
      description:
        "Explore our comprehensive suite of features designed to simplify financial management and enhance productivity.",
    },
    {
      title: "Payment Processing",
      description:
        "Connect with leading payment gateways and streamline transactions with secure, real-time processing.",
    },
    {
      title: "Payroll Management",
      description:
        "Automate payroll schedules, tax calculations, and compliance to ensure accurate and timely payments.",
    },
    {
      title: "Expense Tracking",
      description:
        "Capture receipts, categorize expenses, and integrate with accounting software for seamless expense management.",
    },
    {
      title: "Subscription Management",
      description:
        "Automate recurring billing, analyze subscription metrics, and manage customer relationships effectively.",
    },
    {
      title: "Invoicing",
      description:
        "Create customizable invoices, set up automated reminders, and track payment statuses to enhance cash flow.",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Access real-time financial data, generate customizable reports, and utilize predictive analytics.",
    },
    {
      title: "Integrations",
      description:
        "Seamlessly connect our platform with your existing tools like QuickBooks, Slack, and more for a unified workflow.",
    },
  ];
  const caseStudies = [
    {
      title: "All Case Studies",
      description:
        "Read about the success stories of our clients and how our solutions helped them achieve their goals.",
    },
    {
      title: "By Industry",
      description:
        "Learn how e-commerce businesses have improved their operations and customer satisfaction with our solutions.",
    },
    {
      title: "By Solution",
      description:
        "Explore case studies of businesses that have optimized their transaction processes.",
    },
    {
      title: "E-commerce",
      description:
        "Learn how e-commerce businesses have improved their operations and customer satisfaction with our solutions.",
    },
    {
      title: "Finance",
      description:
        "Discover how financial firms enhanced their accounting accuracy and compliance with our tools.",
    },
    {
      title: "Healthcare",
      description:
        "See how healthcare providers manage billing, payroll, and expenses more efficiently.",
    },
    {
      title: "Education",
      description:
        "Understand how educational institutions simplify financial management and reporting.",
    },
    {
      title: "Nonprofit",
      description:
        "Find out how nonprofits managed donations and tracked expenses to maximize impact.",
    },
  ];
  const solutions = [
    {
      title: "By Industry",
      description:
        "Discover how our platform enhances online transactions, manages inventory, and optimize financial tracking for online retailers.",
    },
    {
      title: "By Role",
      description:
        "Empower your business with tools that simplify financial management, automate payroll, and track expenses.",
    },
    {
      title: "Use Cases",
      description:
        "Securely process payments with multiple gateways, real-time tracking, and automatic currency conversion.",
    },
    {
      title: "E-commerce",
      description:
        "Discover how our platform enhances online transactions, manages inventory, and optimize financial tracking for online retailers.",
    },
    {
      title: "Finance",
      description:
        "Enhance your financial operations with tools designed for accurate accounting, efficient payroll, and detailed analytics.",
    },
    {
      title: "Healthcare",
      description:
        "Manage billing, payroll, and expenses effortlessly, ensuring compliance and improving operational efficiency in healthcare.",
    },
    {
      title: "Education",
      description:
        "Simplify financial management, payroll, and reporting for educational institutions, from K-12 to higher education.",
    },
    {
      title: "Nonprofit",
      description:
        "Manage donations, track expenses, and streamline financial operations to maximize your nonprofit's impact.",
    },
  ];
  const resources = [
    {
      title: "All Resources",
      description:
        "Access a comprehensive collection of guides, tutorials, and tools to help you make the most of our platform.",
    },
    {
      title: "By Type",
      description:
        "Explore our resources categorized by type, including e-books, webinars, whitepapers, and more.",
    },
    {
      title: "By Topic",
      description:
        "Find resources tailored to specific topics such as payment processing, payroll management, and expense tracking.",
    },
    {
      title: "E-books",
      description:
        "Download in-depth e-books covering best practices and strategies for financial management and SaaS growth.",
    },
    {
      title: "Webinars",
      description:
        "Join our webinars to learn from experts about the latest trends and techniques in SaaS and financial management.",
    },
    {
      title: "Whitepapers",
      description:
        "Read our whitepapers to gain insights into industry research and detailed analysis of financial solutions.",
    },
    {
      title: "Blog",
      description:
        "Stay updated with our blog for the latest news, tips, and success stories in the SaaS and finance sectors.",
    },
    {
      title: "Customer Support",
      description:
        "Get help and find answers to your questions with our comprehensive customer support resources.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-5">
          <p className="text-lg font-medium">Product</p>
        </AccordionTrigger>
        {product.map(({ title, description }, index) => (
          <AccordionContent key={index} className="hover:bg-slate-100 px-5">
            <div className="grid gap-2">
              <p className="text-sm font-medium">{title}</p>
              {/* <p className="font-light">{description}</p> */}
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="px-5">
          <p className="text-lg font-medium">Solution</p>
        </AccordionTrigger>
        {solutions.map(({ title, description }, index) => (
          <AccordionContent key={index} className="hover:bg-slate-100 px-5">
            <div className="grid gap-2">
              <p className=" text-sm font-medium">{title}</p>
              {/* <p className="font-light">{description}</p> */}
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="px-5">
          <p className="text-lg font-medium">Case-Studies</p>
        </AccordionTrigger>
        {caseStudies.map(({ title, description }, index) => (
          <AccordionContent key={index} className="hover:bg-slate-100 px-5">
            <div className="grid gap-2">
              <p className=" text-sm font-medium">{title}</p>
              {/* <p className="font-light">{description}</p> */}
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="px-5">
          <p className="text-lg font-medium">Resources</p>
        </AccordionTrigger>
        {resources.map(({ title, description }, index) => (
          <AccordionContent key={index} className="hover:bg-slate-100 px-5">
            <div className="grid gap-2">
              <p className=" text-sm font-medium">{title}</p>
              {/* <p className="font-light">{description}</p> */}
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem
        value="item-5"
        className="px-5 py-4 text-lg font-medium hover:text-primary-400"
      >
        <Link href="#" legacyBehavior passHref>
          Pricing
        </Link>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileNav;
