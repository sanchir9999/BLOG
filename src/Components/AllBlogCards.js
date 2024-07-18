"use Client"
export const AllBlogCards = ({ Photos }) => {
    return (
        <>
            <div className="flex flex-col gap-[16px] border-2 rounded-xl border-[#E8E8EA] p-[16px]">
                <div>
                    <img className="h-[260px] object-cover rounded-xl" src="https://mrwallpaper.com/images/hd/travel-4k-clouds-mountains-7wmoz9la6tfkmvtr.jpg"></img>
                </div>
                <div className="p-2">
                    <div className="flex flex-col gap-[16px]">
                        <h4 className="text-[#4B6BFB]">Technology</h4>
                        <h3 className="font-semibold text-2xl text-[#181A2A]">The Impact of Technology on the Workplace: How Technology is Changing</h3>
                    </div>
                    <div className="font-normal text-[#97989F] text-base">August 20, 2022</div>
                </div>
            </div >
        </>
    )
} 