"use client";
import { BlogCard } from "./BlogCard";
import { useState } from "react";
import { LeftButton } from "@/accets/LeftButton";
import { RigthButton } from "@/accets/RigthButton";
import Link from "next/link";

export const Cards = ({ articles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = articles.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    return (
        <div className="m-auto w-full lg:w-[1208px] px-4 overflow-hidden">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${totalItems * 100}%` }}
            >
                {articles.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Link href={`/blogs/${item.id}`}>
                            <BlogCard cover={item.social_image} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex lg:justify-center">
                <button
                    className="left-0 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={handlePrev}
                >
                    <LeftButton />
                </button>
                <button
                    className="right-0 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={handleNext}
                >
                    <RigthButton />
                </button>
            </div>
        </div>
    );
};
