import { LeftButton } from "@/app/accets/LeftButton"
import { RigthButton } from "@/app/accets/RigthButton"

export const BlogCard = ({ cover, }) => {
    return (

        <div className="w-full relative flex justify-items-end flex-col content-end">
            <img src={cover} className="w-full" />
            <div className="absolute bottom-4 left-4 bg-white rounded-xl p-8 lg:w-[50%] w-[calc(100%-32px)]">
                <div className="text-white bg-sky-500 w-[97px] rounded-md">Technology</div>
                <div className="font-semibold text-4xl text-black">Grid system for better <br></br>
                    Design User Interface</div>
                <div className="font-normal decoration-gray-100">August 20, 2022</div>
            </div>
            <div>
                <LeftButton />
                <RigthButton />
            </div>
        </div>

    )
}