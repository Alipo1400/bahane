"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import language from "@/app/language";
import { useTranslations } from "use-intl";


export default function MovieBox({ video, title, caption }) {

    const t = useLocale();
    const class_lang = new language(t);
    const lang_now = class_lang.getInfo();
    const Move = lang_now.dir == "rtl" ? "-100px" : "100px";

    const handlePlay = (e) => {
        const currentVideo = e.currentTarget;
        document.querySelectorAll("video").forEach((video) => {
            if (video !== currentVideo) { video.pause(); }
        });
        currentVideo.play();
    }


    return (
        <motion.div
            initial={{ opacity: 0, x: Move }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <article
                className="
        group  overflow-hidden rounded-4xl

        border border-zinc-200
        bg-white
        dark:shadow-gray-400
        shadow-sm
          p-5
        dark:border-zinc-800
        dark:bg-slate-800
       
          size-96
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
            >
                {/* Video */}
                <div className="relative w-full h-48 rounded-4xl    overflow-hidden bg-zinc-950">
                    <video
                        src={video}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-48 rounded-4xl overflow-hidden object-cover"
                        onPlay={handlePlay}
                    />

                    {/* Play Icon */}
                    <div
                        className="
            pointer-events-none absolute top-4

            rtl:right-4
            ltr:left-4

            flex size-10 items-center justify-center
            rounded-full
            bg-black/50
            text-white
            backdrop-blur-md

            opacity-0
            transition-all duration-300

            group-hover:opacity-100
          "
                    >
                        <Play
                            size={18}
                            fill="currentColor"
                        />
                    </div>
                </div>

                {/* Content */}
                <div
                    className="
          p-5

        w-full
        h-40
        flex 
        flex-col items-start gap-4 rtl:items-end justify-center
        "
                >
                    <h3
                        className="
            text-lg font-bold
            text-zinc-900
            rtl:text-right
            ltr:text-left
            w-full
            dark:text-white
          "
                    >
                        {title}
                    </h3>

                    {caption && (
                        <p
                            className="
             
              text-sm leading-6
              text-zinc-500
              dark:text-zinc-400
            "
                        >
                            {caption}
                        </p>
                    )}
                </div>
            </article>
        </motion.div>
    );
}
