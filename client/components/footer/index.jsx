"use client";

import React from "react";
import EffectFotter from "./effect";
import { motion } from "motion/react";

import { IoLocationSharp, IoLogoLinkedin } from "react-icons/io5";

import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

import { TbBodyScan, TbBuildingFactory } from "react-icons/tb";

import { RiInformationFill, RiTelegram2Fill } from "react-icons/ri";

import { useLocale } from "next-intl";
import language from "@/app/language";
import { useTranslations } from "use-intl";
import { Link } from "@/i18n/navigation";

import { BiSolidUserVoice } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";

import Image from "next/image";

const Footer = () => {
  const t = useLocale();

  const class_lang = new language(t);
  const lang_now = class_lang.getInfo();

  const isRTL = lang_now.dir === "rtl";

  const navbarT = useTranslations("Navbar");
  const footerT = useTranslations("Footer");

  const quickLinks = [
    {
      href: "/about-us",
      icon: RiInformationFill,
      label: navbarT("AboutUs"),
    },
    {
      href: "/products",
      icon: BsHandbagFill,
      label: navbarT("Products"),
    },
    {
      href: "/voice-clients",
      icon: BiSolidUserVoice,
      label: navbarT("VoiceClients"),
    },
    {
      href: "/recruitment",
      icon: TbBodyScan,
      label: navbarT("Recruitment"),
    },
  ];

  return (
    <>
      <EffectFotter />

      <footer
        className="  
          relative  
          z-30  
          overflow-hidden  
          bg-[#4290ff]  
          text-slate-900  
          transition-colors  
          duration-300  
          dark:bg-[#071426]  
          dark:text-white  
        "
      >
        {/* ================================================= */}
        {/* TOP GRADIENT LINE */}
        {/* ================================================= */}

        <div
          className="  
            absolute  
            left-0  
            right-0  
            top-0  
            h-[2px]  
            bg-gradient-to-r  
            from-transparent  
            via-red-500  
            to-transparent  
          "
        />

        {/* ================================================= */}
        {/* BACKGROUND DECORATION */}
        {/* ================================================= */}

        <div
          className="  
            pointer-events-none  
            absolute  
            -right-32  
            -top-32  
            h-72  
            w-72  
            rounded-full  
            bg-blue-500/10  
            blur-3xl  
            dark:bg-blue-600/10  
          "
        />

        <div
          className="  
            pointer-events-none  
            absolute  
            -bottom-40  
            -left-40  
            h-80  
            w-80  
            rounded-full  
            bg-red-500/5  
            blur-3xl  
            dark:bg-red-500/10  
          "
        />

        {/* ================================================= */}
        {/* BRAND HEADER */}
        {/* ================================================= */}

        <div
          className="  
            relative  
            border-b  
            border-blue-100  
            dark:border-white/[0.07]  
          "
        >
          <div
            className="  
              mx-auto  
              max-w-7xl  
              px-5  
              py-6  
              sm:px-8  
              lg:px-10  
            "
          >
            <div
              className="  
                flex  
                flex-col  
                gap-5  
                lg:flex-row  
                lg:items-center  
                lg:justify-between  
              "
            >
              {/* ================================================= */}
              {/* LOGO */}
              {/* ================================================= */}

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
    relative
    flex
    h-16
    w-16
    shrink-0
    items-center
    justify-center
    rounded-2xl

    dark:border
    dark:border-white/10
    dark:bg-white/[0.05]
    dark:backdrop-blur-md
    dark:shadow-lg
  "
                >
                  <div
                    className="
      absolute
      inset-2
      rounded-xl
      bg-gradient-to-br
      from-blue-500/10
      to-red-500/10
      blur-md
    "
                  />

                  <Image
                    src="/images/logo2.png"
                    alt={footerT("GroupName")}
                    width={58}
                    height={58}
                    className="
      relative
      z-10
      h-14
      w-14
      object-contain
    "
                  />
                </motion.div>

                <div>
                  <h2
                    className="  
                      text-lg  
                      font-bold  
                      tracking-tight  
                      text-slate-900  
                      dark:text-white  
                    "
                  >
                    {footerT("GroupName")}
                  </h2>

                  <p
                    className="  
                      mt-1  
                      max-w-xl  
                      text-xs  
                      leading-6  
                      text-slate-800  
                      dark:text-white/50  
                    "
                  >
                    {footerT("Description")}
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* SOCIAL */}
              {/* ================================================= */}

              <div
                className="  
                  flex  
                  flex-row  
                  items-center  
                  gap-3  
                  lg:flex-col  
                  lg:items-end  
                "
              >
                <span
                  className="  
                    text-[11px]  
                    font-medium  
                    tracking-wide  
                    text-slate-800  
                    dark:text-white/40  
                  "
                >
                  {footerT("FollowUsInMedia")}
                </span>

                <div className="flex gap-2">
                  <SocialButton
                    href="/"
                    icon={<FaInstagram />}
                    className="hover:bg-[#E4405F]"
                  />

                  <SocialButton
                    href="/"
                    icon={<FaWhatsapp />}
                    className="hover:bg-[#25D366]"
                  />

                  <SocialButton
                    href="/"
                    icon={<RiTelegram2Fill />}
                    className="hover:bg-[#229ED9]"
                  />

                  <SocialButton
                    href="/"
                    icon={<IoLogoLinkedin />}
                    className="hover:bg-[#0A66C2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div
          className="  
            relative  
            mx-auto  
            max-w-7xl  
            px-5  
            py-7  
            sm:px-8  
            lg:px-10  
          "
        >
          <div
            className="  
              grid  
              grid-cols-1  
              gap-7  
              sm:grid-cols-2  
              lg:grid-cols-4  
            "
          >
            {/* ================================================= */}
            {/* QUICK LINKS */}
            {/* ================================================= */}

            <FooterSection title={footerT("QuickLinks")}>
              {" "}
              <div className="space-y-1">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.href}
                      whileHover={{
                        x: isRTL ? -4 : 4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="
  group
  flex
  items-center
  gap-2.5
  rounded-xl
  p-2.5
  transition
  hover:bg-red-50/40
  dark:border
  dark:border-white/[0.06]
  dark:bg-white/[0.025]
  dark:hover:border-red-500/20
  dark:hover:bg-white/[0.04]
"
                      >
                        <span
                          className="
  flex
  h-7
  w-7
  items-center
  justify-center
  rounded-lg
  text-sm
  text-slate-700
  transition
  group-hover:bg-red-50
  group-hover:text-red-500
  dark:bg-white/[0.05]
  dark:text-white/60
  dark:group-hover:bg-red-500/10
  dark:group-hover:text-red-400
"
                        >
                          <Icon />
                        </span>

                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </FooterSection>

            {/* ================================================= */}
            {/* CONTACT */}
            {/* ================================================= */}

            <FooterSection title={footerT("ContactUs")}>
              {" "}
              <div className="space-y-2">
                <ContactCard
                  icon={<TbBuildingFactory />}
                  title={footerT("CallFactory")}
                  number="02152888853"
                  href="tel:+982152888853"
                />

                <ContactCard
                  icon={<FaPhone />}
                  title={footerT("BusinessManager")}
                  number="09128989020"
                  href="tel:+989128989020"
                />

                <ContactCard
                  icon={<FaPhone />}
                  title={footerT("SalesManager")}
                  number="09127751643"
                  href="tel:+989127751643"
                />
              </div>
            </FooterSection>

            {/* ================================================= */}
            {/* ADDRESS */}
            {/* ================================================= */}

            <FooterSection title={footerT("OfficeAddress")}>
              <div
                className="
  rounded-xl
  p-3.5
  dark:border
  dark:border-white/[0.07]
  dark:bg-white/[0.025]
  dark:backdrop-blur-md
  dark:shadow-none
"
              >
                <div
                  className="  
                    mb-2.5  
                    flex  
                    items-center  
                    gap-2.5  
                  "
                >
                  <span
                    className="
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-lg
    text-base
    text-blue-600
    dark:bg-blue-500/10
    dark:text-blue-400
  "
                  >
                    <IoLocationSharp />
                  </span>

                  <span
                    className="  
                      text-xs  
                      text-slate-800  
                      dark:text-white/40  
                    "
                  >
                    {footerT("OfficeAddress")}
                  </span>
                </div>

                <p
                  className="  
                    text-sm  
                    leading-6  
                    text-slate-900  
                    dark:text-white/60  
                  "
                >
                  {footerT("AddressText")}
                </p>
              </div>

              <div
                className="  
                  mt-3  
                  flex  
                  items-center  
                  gap-2  
                  text-xs  
                  text-slate-800  
                  dark:text-white/30  
                "
              >
                <span
                  className="  
                    h-1.5  
                    w-1.5  
                    rounded-full  
                    bg-green-800  
                  "
                />

                {footerT("HereToHelp")}
              </div>
            </FooterSection>

            {/* ================================================= */}
            {/* TRUST */}
            {/* ================================================= */}

            <FooterSection title={footerT("TrustCertification")}>
              <div className="flex gap-2.5">
                <TrustCard src="/images/enamad.png" />

                <TrustCard src="/images/rezi.webp" />
              </div>

              <p
                className="  
                  mt-3  
                  text-xs  
                  leading-5  
                  text-slate-800  
                  dark:text-white/30  
                "
              >
                {footerT("TrustText")}
              </p>
            </FooterSection>
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div
          className="  
            relative  
            border-t  
            border-blue-100  
            dark:border-white/[0.07]  
          "
        >
          <div
            className="  
              mx-auto  
              flex  
              max-w-7xl  
              flex-col  
              items-center  
              justify-between  
              gap-2  
              px-5  
              py-3  
              text-center  
              sm:px-8  
              md:flex-row  
              lg:px-10  
            "
          >
            <p
              className="  
                text-[11px]  
                text-slate-800  
                dark:text-white/30  
              "
            >
              © {new Date().getFullYear()} {footerT("AllRightsReserved")}
            </p>

            <div
              className="  
                flex  
                items-center  
                gap-2  
                text-[11px]  
                text-slate-800  
                dark:text-white/30  
              "
            >
              <span>{footerT("QualitySlogan")}</span>

              <span
                className="  
                  h-1  
                  w-1  
                  rounded-full  
                  bg-red-500  
                "
              />

              <span
                className="  
                  text-slate-500  
                  dark:text-white/50  
                "
              >
                Bahaneh
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

/* ========================================================= */
/* FOOTER SECTION */
/* ========================================================= */

const FooterSection = ({ title, children }) => {
  return (
    <div>
      <div
        className="  
          mb-4  
          flex  
          items-center  
          gap-2.5  
        "
      >
        <span
          className="  
            h-4  
            w-1  
            rounded-full  
            bg-gradient-to-b  
            from-blue-400  
            to-red-500  
          "
        />

        <h3
          className="  
            text-sm  
            font-bold  
            text-slate-800  
            dark:text-white  
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </div>
  );
};

/* ========================================================= */
/* CONTACT CARD */
/* ========================================================= */

const ContactCard = ({ icon, title, number, href }) => {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -1,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
  group
  flex
  items-center
  gap-2.5
  rounded-xl
  p-2.5
  transition
  hover:bg-red-50/40
  dark:border
  dark:border-white/[0.06]
  dark:bg-white/[0.025]
  dark:hover:border-red-500/20
  dark:hover:bg-white/[0.04]
"
    >
      <span
        className="
    flex
    h-9
    w-9
    shrink-0
    items-center
    justify-center
    rounded-lg
    text-base
    text-slate-700
    transition
    group-hover:bg-red-50
    group-hover:text-red-500
    dark:bg-red-500/10
    dark:text-red-400
    dark:group-hover:bg-red-500/15
  "
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p
          className="  
            text-[10px]  
            text-slate-700  
            dark:text-white/35  
          "
        >
          {title}
        </p>

        <p
          className="
  mt-0.5
  text-xs
  font-medium
  tracking-wide
  text-slate-900
  transition
  group-hover:text-black
  dark:text-white/75
  dark:group-hover:text-white
"
        >
          {number}
        </p>
      </div>
    </motion.a>
  );
};

/* ========================================================= */
/* SOCIAL BUTTON */
/* ========================================================= */

const SocialButton = ({ href, icon, className = "" }) => {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
  flex
  h-9
  w-9
  items-center
  justify-center
  rounded-full
  text-sm
  text-slate-700
  transition-all
  duration-300
  hover:bg-white/10
  hover:text-white
  dark:border
  dark:border-white/[0.08]
  dark:bg-white/[0.04]
  dark:text-white/60
  ${className}
`}
    >
      {icon}
    </motion.a>
  );
};

/* ========================================================= */
/* TRUST CARD */
/* ========================================================= */

const TrustCard = ({ src }) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className="  
        flex  
        h-20  
        w-20  
        items-center  
        justify-center  
        rounded-xl  
        bg-white  
        p-2.5  
        shadow-sm  
        dark:bg-white  
        dark:shadow-lg  
        dark:shadow-black/10  
      "
    >
      <Image
        src={src}
        alt="Trust certification"
        width={70}
        height={70}
        className="  
          h-full  
          w-full  
          object-contain  
        "
      />
    </motion.div>
  );
};

export default Footer;
