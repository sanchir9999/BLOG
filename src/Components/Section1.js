
import { TrendCards } from "./TrendCards"
export const Section1 = ({ articles }) => {
    return (
        <div className="m-auto w-full lg:w-[1240px] px-4 flex flex-col gap-[30px]">
            <div className="border-4 border-indigo-500/100  w-full font-bold text-2xl decoration-black">Trending</div>
            {articles.map((item, index) => (
                <TrendCards
                    picture={item.social_image} />
            ))}

        </div>
    )
}