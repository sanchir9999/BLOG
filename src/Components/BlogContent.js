import { Human } from "@/accets/Human"
import Image from "next/image"
export const BlogContent = ({
    para,
    bigHeader,
    date,
    editer,
    photos,
    title,
}) => {
    return (
        <>
            <div className=" w-full h-fit m-auto lg:w-[800px] border-current border-4 border-red-500">
                <div className="w-full h-fit flex flex-col justify-center items-center gap-y-8">
                    <div className="w-full h-fit flex flex-col items-start gap-y-5">
                        <h3 className="text-4xl text-black font-semibold">
                            {bigHeader}
                        </h3>
                    </div>
                    <div className="w-full h-fit flex flex-row justify-start items-center gap-x-6">
                        <div className="w-fit h-fit flex flex-row justify-start items-center gap-x-5 gap-y-5">
                            <Human className="text-3xl text-black" />
                            <h2 className="text-base font-medium text-[#696A75]"></h2>
                            <div className="flex gap-5">
                                {editer}
                                {date}
                            </div>
                        </div>
                        <h4 className="text-[#696A75] text-base font-normal"></h4>
                    </div>
                    <div className="w-full h-fit">
                        <Image src={photos} className="h-16 w-14" />
                    </div>
                    {para}
                    {title}

                </div>
            </div>

        </>
    )


}