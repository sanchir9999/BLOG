import { LeftButton } from "@/accets/LeftButton";
import { RigthButton } from "@/accets/RigthButton";
export const BlogCard = ({ cover }) => {
    return (
        <>
            <div className="flex flex-col object-cover w-full ">
                <div className="w-screen relative flex justify-items-end flex-col content-end ">
                    <img className="w-screen lg:w-[1208px] h-full object-cover" src="https://mrwallpaper.com/images/hd/travel-4k-clouds-mountains-7wmoz9la6tfkmvtr.jpg" />
                    <div className="absolute left-[50px] bottom-[100px]  bg-white rounded-xl p-8 lg:w-[50%] w-[calc(100%-32px)]">
                        <div className="text-white bg-sky-500 w-[97px] rounded-md">Technology</div>
                        <div className="font-semibold text-4xl text-black">Grid system for better <br />
                            Design User Interface
                        </div>
                        <div className="font-normal decoration-gray-100">August 20, 2022</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <button className="divide-solid rounded-sm">
                    <LeftButton />
                </button>
                <button>
                    <RigthButton />
                </button>
            </div>
        </>

    );
};
