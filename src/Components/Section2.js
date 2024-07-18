
import { AllBlogCards } from "./AllBlogCards"
const Data = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
]
export const Section2 = ({ articles }) => {
    return (
        <>
            <div className="flex flex-col gap-[32px]">
                <div className="m-auto pr-[16px] pl-[16px] mt-[76px] w-full flex flex-col gap-[32px] lg:w-[1216px] ">
                    <div className="flex flex-col justify-between">
                        <h3 className="font-bold text-2xl ">
                            All Blog Cards
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-[20px] font-bold text-xs ">{Data.map((item, index) => (
                            <div
                                key={index}>{item}
                            </div>))}
                        </div>
                        <div className="invisible lg:visible font-bold text-xs ">View All</div>
                    </div>
                </div>
                <div className="m-auto w-full lg:w-[1231px] flex flex-col gap-x-5 gap-y-5">
                    <div className="flex flex-col gap-[20px] lg:flex-row">
                        {articles.slice(0, 3).map((item, index) => (<AllBlogCards
                            key={index}
                            Photos={item.social_image}
                        />))}
                    </div>
                    <div className="flex flex-col gap-[20px] lg:flex-row">
                        {articles.slice(0, 3).map((item, index) => (<AllBlogCards
                            key={index}
                            Photos={item.social_image}
                        />))}
                    </div>
                    <div className="flex flex-col gap-[20px] lg:flex-row">
                        {articles.slice(0, 3).map((item, index) => (<AllBlogCards
                            key={index}
                            Photos={item.social_image}
                        />))}
                    </div>
                </div>
            </div>
        </>
    )
}
