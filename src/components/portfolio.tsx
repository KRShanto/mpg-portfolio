"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Globe,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  PenTool,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            MPG VA Services
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-950 p-4 border-b border-gray-200 dark:border-gray-800">
          <Link
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#about"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#services"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#testimonials"
            onClick={toggleMobileMenu}
          >
            Testimonials
          </Link>
          <Link
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#contact"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50 dark:bg-blue-900"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-1/2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-gray-100">
                  Master LinkedIn, Grow Online
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-200">
                  I Guide Aspiring Freelancers Master LinkedIn to Grow Online
                  without Spending Money on Ads | Certified Digital Marketer |
                  Social Media Manager | Multilingual Virtual Assistant
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-500"
                    href="#contact"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#services"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/image.png"
                  alt="Virtual Assistant Profile"
                  width={300}
                  height={300}
                  className="rounded-full object-cover border-4 border-blue-200 dark:border-blue-800"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-800 dark:text-gray-100">
              About Me
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  As a Virtual Assistant at MPG VA Services, I provide general
                  admin services, customer service, event planning, and digital
                  marketing support to solopreneurs, business owners, and
                  marketers around the world. With over 20 years of experience
                  in different industries and countries, I developed a diverse
                  set of skills and a passion for helping others grow their
                  business online.
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  I'm self-motivated, independent, and perform extremely well
                  under minimal instruction or management. I am always eager to
                  learn new tools and techniques to enhance my services and
                  deliver value to my clients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  My Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  I'm on a mission to share everything I learned so far about
                  LinkedIn, Digital Marketing, Solopreneurship, and being a
                  virtual assistant. I hope you can find some value in it and
                  some inspiration to change your career and possibly your life.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-800 dark:text-gray-100">
              My Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Digital Marketing
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Comprehensive digital marketing strategies to grow your
                    online presence.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      LinkedIn Mastery
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Lead generation and profile optimization using LinkedIn
                    Sales Navigator.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <PenTool className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Content Creation
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Engaging content creation for social media and websites
                    using tools like Canva.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Multilingual Support
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Services in English, French, Spanish, and Italian for global
                    reach.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Event Planning
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Comprehensive event planning and management services.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      Email Campaigns
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Effective email marketing campaigns using MailChimp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-800 dark:text-gray-100">
              Testimonials
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 dark:text-gray-200">
                    "Working with this virtual assistant transformed my LinkedIn
                    presence. I've seen a significant increase in leads and
                    connections!"
                  </p>
                  <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
                    - Sarah J., Marketing Executive
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 dark:text-gray-200">
                    "The multilingual support and digital marketing expertise
                    have been invaluable for expanding our business globally."
                  </p>
                  <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
                    - Carlos R., International Business Owner
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-100">
                  Get in Touch
                </h2>
                <p className="text-gray-700 dark:text-gray-200">
                  Ready to grow your online presence or need support for your
                  business? Let's connect and bring your vision to life. You can
                  book a call, send me a DM, or schedule a coffee chat - I'm
                  only one click away!
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:contact@mpgvaservices.com"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          © 2023 MPG VA Services. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 dark:text-gray-300 dark:hover:text-gray-100"
            href="#privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
