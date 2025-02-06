



import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  // Social Icons Data
  const socialIcons = [
    { icon: <Facebook />, label: "Facebook", link: "#" },
    { icon: <Instagram />, label: "Instagram", link: "#" },
    { icon: <Twitter />, label: "Twitter", link: "#" },
    { icon: <Linkedin />, label: "LinkedIn", link: "#" },
  ];

  // Navigation Links Data
  const navLinks = [
    { name: "Media", link: "#" },
    { name: "Full-time", link: "#" },
    { name: "Contractor", link: "#" },
    { name: "Blogs", link: "#" },
    { name: "About", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Careers", link: "#" },
  ];

  return (
    <footer className="relative overflow-hidden h-[70vh] from bg-black text-white pt-10">

      <div className="w-full mdw[94%] mx-auto h-[110vh] rounded-t-full bg-gradient-to-t from-black to-purple-900  ">

      </div>

      <div className="w-full absolute bottom-8">
        {/* Contact Details */}
        <div className="text-lg text-gray-300 px-8 ">
          <h2 className="text-2xl font-bold text-white mb-2">Contact Details</h2>
          <p>2093, Philadelphia Pike, DE 19703, Claymont</p>
          <p>suvansh.bansal@flexiple.com</p>
        </div>


        <div className="my-8 px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0" >
            {socialIcons.map(({ icon, label, link }, index) => (
              <a
                key={index}
                href={link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>



          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-between text-gray-300">
            {navLinks.map(({ name, link }, index) => (
              <a key={index} href={link} className="mx-2 hover:text-white">
                {name}
              </a>
            ))}
          </div>
        </div>

        <hr className="border my-8" />

        {/* Copyright */}
        <div className="px-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <Link href={"/"} className="font-semibold text-xl md:text-3xl " >Flexiple</Link>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mx-2 hover:text-white">
              Terms of use
            </a>
            <a href="#" className="mx-2 hover:text-white">
              Privacy policy
            </a>
            <span>Copyright © 2025 Flexiple Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;