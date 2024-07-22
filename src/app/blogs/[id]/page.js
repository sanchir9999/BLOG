"use client"
import { useParams } from "next/navigation"
const blog = () => {
    const { id } = useParams()
    const getArticle = async () => {
        const res = await fetch("https://dev.to/api/articles");
        const articles = await res.json()
        return articles
    }
    return <>
        <div>
            <h1>Hello{id}</h1>

        </div>
    </>

}
export default blog;
