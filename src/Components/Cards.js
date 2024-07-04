"Use Client"
import { BlogCard } from "./BlogCard"
import { SlideShow } from "./SlideShow"
import { useState } from "react"
export const Cards = ({ articles }) => {
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false)
    const handleDrawer = () => {
        SetIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <div className="m-auto w-full lg:w-[1240px] px-4 overflow-hidden">

            <div className="flex w-[400%]">
                {articles.slice(0, 4).map((item) => {
                    return (
                        <BlogCard
                            cover={item.social_image}
                        />
                    )
                })}
            </div>
        </div>
    )

}
