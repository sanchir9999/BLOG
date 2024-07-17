// import { AllBlogCards } from "./AllBlogCards"
const Data = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
]
export const Section2 = () => {
    return (
        <>
            <div className="h-[1000px]">
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
                {/* <div>
                    {article.map((item, index) => (<AllBlogCards
                        key={index}
                        picture={item.social_image} />))}
                </div> */}
            </div>
        </>
    )
}
