import { LeftButton } from "@/accets/LeftButton"
import { RigthButton } from "@/accets/RigthButton"

export const BlogCard = ({ cover }) => {
    return (
        <>
            <div className="flex flex-col object-cover w-full">
                <div className="relative flex flex-col justify-end w-screen">
                    <div
                        className="w-full h-[462px] rounded-lg"
                        style={{
                            backgroundImage: `url(${cover == null ? "https://dev.to/social_previews/aricle/321665.png" : cover})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="absolute left-[50px] bottom-[100px] bg-white rounded-xl p-8 lg:w-[50%] w-[calc(100%-32px)]">
                        <div className="text-white bg-sky-500 w-[97px] rounded-md">Technology</div>
                        <div className="font-semibold text-4xl text-black">
                            Grid system for better <br />
                            Design User Interface
                        </div>
                        <div className="font-normal text-gray-500">August 20, 2022</div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end space-x-2">
                    <button className="rounded-sm">
                        <LeftButton />
                    </button>
                    <button>
                        <RigthButton />
                    </button>
                </div>
            </div>
        </>
    );
};
