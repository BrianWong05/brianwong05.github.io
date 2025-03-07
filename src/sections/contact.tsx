import { Button } from "@/components/ui/button";
import * as React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ContactSection: React.FunctionComponent = () => {
  return (
    <div className="mx-6 py-16 flex pt-10 lg:pb-20 lg:mx-24">
      <div className="lg:w-full bg-gradient-to-r dark:from-[#5693d9] dark:to-[#692ccd] from-[#5f5cee] to-[#add3e8] rounded-3xl py-8 px-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl">Get In Touch</h2>
            <p className="text-sm mt-2 md:text-base">
              Ready to start your next project? Let’s make it happen! Get in touch to explore how I can assist you.
            </p>
          </div>
          <Button className="cursor-pointer h-12 text-gray-50/90 bg-[#201352] hover:bg-[#341f85] hover:text-white rounded-2xl">
            <div className="inline-flex items-center px-6 h-12 gap-2">
              <span className="font-semibold">Contact Me</span>
              <GoArrowUpRight className="size-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
