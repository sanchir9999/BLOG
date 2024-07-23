"use client"
import { BlogContent } from "@/Components/BlogContent"
import { Navbar } from "@/Components/Navbar"
import { Section3 } from "@/Components/Section3"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"

const SinglePage = () => {
    const { id } = useParams()
    const [page, setPage] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://dev.to/api/articles/${id}`);
                const data = await res.json();
                setPage(data);

            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [id]);
    if (!page) return <div>Loading...</div>
    console.log(page)
    return (
        <div>
            <Navbar />
            <BlogContent
                bigHeader={page.title}
                date={page.published_timestamp}
                editer={page.user?.name}
                photo={page.social_image}
                para={page.body_html}
                title={page.title}
            />
            <Section3 />
        </div>

    )
}
export default SinglePage;
