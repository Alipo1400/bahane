"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
function ProductCollection() {
    const AboutPageT = useTranslations("AboutPage");
    return (
        <div className=" flex justify-center items-center flex-wrap my-16 pt-24 md:pt-16 px-12 md:px-3 lg:px-28" >
            <div className="flex justify-center items-center w-full md:w-1/3" >
                <div className="inline-flex  items-center size-80 relative group  rounded-full" >
                    <div className="overflow-hidden size-80 z-10 rounded-full" >
                        <Image width={300} height={300} className="size-80 z-10 transition-all hover:scale-110 rounded-full " src={"/photo/about2.png"} />
                    </div>

                    <Image width={200} height={200} className="size-44 absolute -top-12 -right-16  md:top-26 ltr:md:-left-26 rtl:md:-right-26 rounded-full overflow-hidden" src={"/probybg/1.png"} />
                    <Image width={200} height={200} className="size-40  absolute  -top-20 right-16  md:-top-8 ltr:md:-left-22 rtl:md:-right-22 rounded-full overflow-hidden" src={"/probybg/2.png"} />
                    <Image width={200} height={200} className="size-36 absolute -top-12 -left-7 md:-top-20 ltr:md:-left-4 rtl:md:right-4 rounded-full overflow-hidden" src={"/probybg/3.png"} />


                </div>
            </div>
            <div className="w-full md:w-2/3 flex items-center  mt-16 md:mt-0 text-base sm:text-lg">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {AboutPageT("ProductPart")}
                </motion.span>
            </div>
        </div>
    );
}

export default ProductCollection;