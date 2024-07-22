
import { useEffect, useState } from "react"
import { AllBlogCards } from "./AllBlogCards"
import { BlogCard } from "./BlogCard"
const Categorey = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
]

export const Section2 = ({ articles }) => {
    const [Loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

    const [Category, setCategory] = useState("All")
    const [perPage, setPerpage] = useState(9)

    const handleCategory = (Categorey) => {
        setCategory(Categorey);
        setPerpage(9)

    }
    const handleLoadMore = () => {
        setPerpage(perPage + 3);
    }
    useEffect(() => {
        setLoading(true);
        fetch(`https://dev.to/api/articles?page=1&per_page=${perPage}${Categorey !== "All" ? `&tag=${Categorey}` : ""
            }`
        )
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [perPage, Categorey]);
    return (
        <>
            <div className="flex flex-col gap-8 lg:w-[1100px] m-auto py-8">
                <h1 className="font-bold text-2xl ">All Blog Cards</h1>
                <div>
                    {Categorey.map((item) => (
                        <button
                            key={item}
                            className="bg-slate-800"
                            style={{
                                color: Category === item ? "#4B6BFB" : "",
                            }}
                            onClick={() => handleCategory(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="w-full frid grid-cols-3 gap-[24px]">
                    {blogs.map(() => (
                        <BlogCards
                            key={blog.title}
                            image={blog.cover_image}
                            title={blog.title}
                            date={blog.published_at}
                            tags={blog.tag_list} />
                    ))}
                </div>
                <button className="m-auto w-[200px] pt-2 bg-[#4B6BFB]" text-white rounded-md
                    onclick={handleLoadMore}>
                    {Loading ? <p>Loading...</p> : <p>Load More</p>}
                </button>
            </div>
        </>
    )
}
const BlogCards = ({ image, title, date, tags }) => {
    return (
        <div className="border p-4 flex flex-col gap-4 w-full rounded-md bg-white">
            <img src={image} alt="image" className="aspect-[2/1] w-full rounded-md" />
            <div className="py-2 flex flex-col gap-4">
                <div></div>

            </div>
        </div>
    )
}
