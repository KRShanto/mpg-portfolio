import Portfolio from "@/components/portfolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Master LinkedIn & Grow Your Business | MPG VA Services",
  description:
    "Boost your business with expert LinkedIn management, digital marketing, and virtual assistant services from MPG VA Services.",
  keywords: [
    "virtual assistant portfolio",
    "digital marketing services",
    "linkedin mastery",
    "multilingual support",
    "event planning services",
    "content creation",
    "emal marketing campaigns",
    "freelance virtual assistant",
    "online business growth",
    "social media management",
  ],
};

export default function Page() {
  return <Portfolio />;
}
