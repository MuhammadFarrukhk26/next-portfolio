"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 337 801 9687",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muhammadfarrukhk26@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Gulshan-e-Iqbal, Karachi",
  },
];

import { motion } from "framer-motion";

const recipientEmail = "muhammadfarrukhk26@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || "Not specified",
          message: formData.message,
          _subject: `Portfolio contact: ${formData.service || "General inquiry"}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please email me directly at muhammadfarrukhk26@gmail.com.",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Share your project details and I will get back to you soon.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Lastname"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>
              {/* Select */}
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, service: value }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="WordPress Development">
                      WordPress Development
                    </SelectItem>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="CMS & Hosting Support">
                      CMS & Hosting Support
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here"
                required
              />
              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-emerald-400"
                      : status.type === "error"
                        ? "text-red-400"
                        : "text-white/70"
                  }`}
                >
                  {status.message}
                </p>
              )}
              {/* Button */}
              <Button type="submit" size="md" className="max-w-40">
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:oreder-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info?.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item?.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item?.title}</p>
                      <h3 className="text-xl">{item?.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
