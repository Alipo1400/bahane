"use client";

import { useTranslations } from "next-intl";
import MovieBox from "./MovieBox";



export default function MovieList() {

    const MoveT = useTranslations("Move");

    const movies = [
        {
            id: 1,
            title: MoveT("Title1"),
            caption: MoveT("Caption1"),
            video: "/videos/1.mp4",
        },
        {
            id: 2,
            title: MoveT("Title2"),
            caption: MoveT("Caption2"),
            video: "/videos/2.mp4",
        },
        {
            id: 3,
            title: MoveT("Title3"),
            caption: MoveT("Caption3"),
            video: "/videos/3.mp4",
        },
    ];

    return (

        <section className="w-full">
            <div
                className="
               flex justify-around gap-8 p-8 flex-wrap
        "
            >
                {movies.map((movie, index) => (
                    <MovieBox
                        title={movie.title}
                        caption={movie.caption}
                        video={movie.video}
                    />
                ))}
            </div>
        </section>
    );
}