"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import language from "@/app/language";

function Mannager() {
  const t = useLocale();
  const class_lang = new language(t);
  const lang_now = class_lang.getInfo();

  const Move = lang_now.dir === "rtl" ? "-100px" : "100px";

  const AboutPageT = useTranslations("AboutPage");

  return (
    <div className="flex justify-center items-center my-16">
      <div className="rtl:md:pl-96 ltr:md:pr-96">

        <div className="flex flex-col md:flex-row relative items-center justify-center">

          {/* IMAGE */}
          <div className="relative shrink-0">

            <div
              className="
                bg-primary
                absolute
                bottom-5
                sm:bottom-6
                sm:scale-100
                scale-95
                ltr:sm:right-6
                ltr:right-5
                rtl:left-5
                rtl:sm:left-6
                rounded-4xl
                size-full
              "
            />

            <Image
              width={400}
              height={400}
              className="
                sm:h-96
                h-88
                w-72
                sm:w-80
                object-cover
                relative
                rounded-4xl
              "
              src="/images/about/jabraeili.jpg"
              alt={AboutPageT("NameManager")}
            />

            {/* NAME + POSITION */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="flex w-full gap-2 md:flex-col justify-between items-baseline">

                <div className="flex md:w-full justify-start">
                  <div className="bg-gray-300/50 text-white p-2 rounded-3xl border border-white backdrop-blur-lg">
                    {AboutPageT("JobPosition")}
                  </div>
                </div>

                <div className="flex md:w-full justify-start">
                  <div className="bg-gray-300/50 text-white p-2 rounded-3xl border border-white backdrop-blur-lg">
                    {AboutPageT("NameManager")}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* TEXT BOXES */}
{/* TEXT BOXES */}
<div
  className="
    flex
    flex-col
    gap-4
    w-full
    px-4
    pt-8
    md:pt-0
    md:w-[420px]
    lg:w-[460px]
    md:absolute
    ltr:md:left-68
    rtl:md:right-68
  "
>

  {/* BOX 1 */}
  <motion.div
    initial={{ opacity: 0, x: Move }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      w-full
      px-4
      py-4
      bg-primary
      rounded-4xl
    "
  >
    <div className="text-sm text-white ltr:text-left rtl:text-right leading-6">

      <p className="mb-2.5">
        {AboutPageT("TextManager1Paragraph1")}
      </p>

      <p>
        {AboutPageT("TextManager1Paragraph2")}
      </p>

    </div>
  </motion.div>


  {/* BOX 2 */}
  <motion.div
    initial={{ opacity: 0, x: Move }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      w-full
      px-4
      py-4
      bg-primary
      rounded-4xl
    "
  >
    <div className="text-sm text-white ltr:text-left rtl:text-right leading-6">

      <h3 className="font-bold text-base mb-2.5">
        {AboutPageT("TextManager2Title")}
      </h3>

      <p className="mb-2.5">
        {AboutPageT("TextManager2Paragraph1")}
      </p>

      <p>
        {AboutPageT("TextManager2Paragraph2")}
      </p>

    </div>
  </motion.div>

</div>

        </div>
      </div>
    </div>
  );
}

export default Mannager;