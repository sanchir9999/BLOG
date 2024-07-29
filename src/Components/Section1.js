import Link from "next/link";
import { TrendCards } from "./TrendCards"; // TrendCards-г зөв замаас импортлох хэрэгтэй

export const Section1 = ({ articles }) => {
    return (
        <div className="m-auto flex flex-col lg:w-[1240px] px-4 gap-[30px]">
            <div className="w-[1231px] m-auto font-bold text-2xl text-black">Trending</div>
            <div className="w-full m-auto overflow-x-scroll ">
                <div className="flex gap-4 w-[1231px]">
                    {articles.slice(0, 4).map((item, index) => (
                        <Link href={`/blogs/${item.id}`} key={index}>
                            <TrendCards cover={item.social_image} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
