"use client"
import { useParams } from "next/navigation"
const blog = () => {
    const { id } = useParams()
    return <>
        <div>
            <h1>Hello{id}</h1>
        </div>
    </>

}
export default blog;
