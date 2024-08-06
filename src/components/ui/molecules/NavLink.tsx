"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";

// Define your features array
const features = [
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

// ListItem component definition
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="flex items-center justify-between">
            <p className="w-full line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
            <div className="flex w-5 h-5">
              <ChevronRight className="w-full h-full text-muted-foreground" />
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavigationMenuDemo({ className }: { className?: string }) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="grid md:flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black data-[active]:bg-transparentbg-accent/50 data-[state=open]:bg-transparent hover:text-primary-main bg-transparent hover:bg-transparent focus:bg-transparent focus:text-primary-main">
            Product
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-3 lg:grid-cols-3 lg:w-[700px]">
              {features.map((feature) => (
                <ListItem key={feature.title} title={feature.title} href="#">
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black data-[active]:bg-transparentbg-accent/50 data-[state=open]:bg-transparent hover:text-primary-main bg-transparent hover:bg-transparent focus:bg-transparent focus:text-primary-main">
            Solution
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:grid-cols-3 lg:w-[700px]">
              {solutions.map((feature) => (
                <ListItem key={feature.title} title={feature.title} href="#">
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black data-[active]:bg-transparentbg-accent/50 data-[state=open]:bg-transparent hover:text-primary-main bg-transparent hover:bg-transparent focus:bg-transparent focus:text-primary-main">
            Case-Studies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[700px]">
              {caseStudies.map((feature) => (
                <ListItem key={feature.title} title={feature.title} href="#">
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black data-[active]:bg-transparentbg-accent/50 data-[state=open]:bg-transparent hover:text-primary-main bg-transparent hover:bg-transparent focus:bg-transparent focus:text-primary-main">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[700px]">
              {resources.map((feature) => (
                <ListItem key={feature.title} title={feature.title} href="#">
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className="text-sm px-4 py-2 font-medium leading-none text-black data-[active]:bg-transparentbg-accent/50 data-[state=open]:bg-transparent hover:text-primary-main bg-transparent hover:bg-transparent focus:bg-transparent focus:text-primary-main">
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
