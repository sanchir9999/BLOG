import { Human } from "@/accets/Human"

export const BlogContent = ({
    para,
    bigHeader,
    date,
    editer,
    image,
    title,
}) => {
    return (
        <>
            <div className="w-full h-fit m-auto lg:w-[800px] ">
                <div className="w-full h-fit flex flex-col justify-center items-center gap-y-8">
                    <div className="w-full h-fit flex flex-col items-start gap-y-5">
                        <h3 className="text-4xl text-black font-semibold">
                            {bigHeader}
                        </h3>
                    </div>
                    <div className="w-full h-fit flex flex-row justify-start items-center gap-x-6">
                        <div className="w-fit h-fit flex flex-row justify-start items-center gap-x-5 gap-y-5">
                            <Human className="text-3xl text-black" />
                            <div className="flex gap-5">
                                {editer}
                                {date}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        {image && (
                            <div
                                className="w-full h-[462px] rounded-lg"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        )}
                    </div>
                    <div
                        className="w-full h-fit"
                        dangerouslySetInnerHTML={{ __html: para }}
                    />
                    <h4 className="text-[#696A75] text-base font-normal">{title}</h4>
                </div>
            </div>
        </>
    );
};
