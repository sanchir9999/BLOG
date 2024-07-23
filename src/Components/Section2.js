import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

const categories = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
];
export const Section2 = ({ articles }) => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState("All");
    const [perPage, setPerPage] = useState(9);

    const handleCategory = (category) => {
        setCategory(category);
        setPerPage(9);
    };

    const handleLoadMore = () => {
        setPerPage(perPage + 3);
    };

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://dev.to/api/articles?page=1&per_page=${perPage}${category !== "All" ? `&tag=${category}` : ""
            }`
        )
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [perPage, category]);

    return (
        <div className="flex flex-col gap-8 lg:w-[1100px] m-auto py-8">
            <h1 className="font-bold text-2xl">All Blog Cards</h1>
            <div className="flex justify-between items-center">
                <div className="flex gap-5  lg:justify-start">
                    {categories.map((item) => (
                        <button
                            key={item}
                            className="bg-gray-700 w-24 h-10 rounded text-white "
                            style={{
                                color: category === item ? "#4B6BFB" : "",
                            }}
                            onClick={() => handleCategory(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <Link href={`/blogs`}>
                    <button className="hidden lg:flex">View All</button>
                </Link>
            </div>

            <div className="w-full grid grid-cols-3 gap-[24px]">
                {blogs.map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`}>
                        <BlogCards
                            key={blog.id}
                            image={blog.cover_image}
                            title={blog.title}
                            date={blog.published_at}
                            tags={blog.tag_list}
                        />
                    </Link>
                ))}
            </div>
            <button
                className="m-auto w-[200px] pt-2 bg-[#4B6BFB] text-white rounded-md flex justify-center content-center h-10"
                onClick={handleLoadMore}
            >
                {loading ? <p>Loading...</p> : <p>Load More</p>}
            </button>
        </div>
    );
};

const BlogCards = ({ image, title, date, tags }) => {
    return (
        <div className="border p-4 flex flex-col gap-4 w-full rounded-md bg-white">
            <img src="https://mrwallpaper.com/images/hd/travel-4k-clouds-mountains-7wmoz9la6tfkmvtr.jpg" alt="image" className="aspect-[2/1] w-full rounded-md" />
            <div className="py-2 flex flex-col gap-4">
                <div className="font-semibold text-lg">{title}</div>
                <div className="text-gray-500">{new Date(date).toLocaleDateString()}</div>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-blue-500">#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};
