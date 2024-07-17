"Use Client"
import { BlogCard } from "./BlogCard"
import { useState } from "react"
export const Cards = ({ articles }) => {
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false)
    const handleDrawer = () => {
        SetIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <div className="m-auto w-full lg:w-[1216px] px-4 overflow-scroll">
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
