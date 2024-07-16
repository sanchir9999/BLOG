import { LeftButton } from "@/accets/LeftButton"
import { RigthButton } from "@/accets/RigthButton"

export const BlogCard = ({ cover, }) => {
    return (

        <div className="w-full relative flex justify-items-end flex-col content-end">
            <img src={cover} className="w-full" />
            <div className="absolute  left-[50px] bottom-[100px] bg-white rounded-xl p-8 lg:w-[50%] w-[calc(100%-32px)]">
                <div className="text-white bg-sky-500 w-[97px] rounded-md">Technology</div>
                <div className="font-semibold text-4xl text-black">Grid system for better <br></br>
                    Design User Interface</div>
                <div className="font-normal decoration-gray-100">August 20, 2022</div>
            </div>
            <div className=" lg:flex justify-end ">
                <button className="divide-solid rounded-sm "><LeftButton /></button>
                <button ><RigthButton /></button>
            </div>
        </div>

    )
}