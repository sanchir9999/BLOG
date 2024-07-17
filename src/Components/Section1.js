
import { TrendCards } from "./TrendCards"
export const Section1 = ({ articles }) => {
    return (
        <div className="m-auto flex flex-col lg:w-[1240px] px-4 gap-[30px]">
            <div className="w-full flex flex-col gap-[20px]">
                <div className="w-[1231px] m-auto font-bold text-2xl text-black">Trending</div>
                <div className="w-full m-auto overflow-x-scroll ">
                    <div className="flex gap-4 w-[1231px]">
                        {articles.slice(0, 4).map((item, index) => (
                            <TrendCards
                                key={index}
                                picture={item.social_image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}