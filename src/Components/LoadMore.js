import Link from "next/link"
export const LoadMore = () => {
    return (
        <>
            <Link href={`/blogs`}>
                <div className="m-auto w-[140px] h-[48px] px-5 py-3 text-[#696A75] border-2 rounded-sm flex justify-center mt-24 mb-8">
                    <h4 className="font-normal text-base ">
                        Load More
                    </h4>
                </div>
            </Link>
        </>
    )
} 