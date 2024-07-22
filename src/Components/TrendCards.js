"use Client"
export const TrendCards = ({ picture }) => {
    return (
        <div className=" h-[320px] bg-red-200 relative ">
            <img className="w-[1000px] h-full object-cover rounded" src="https://mrwallpaper.com/images/hd/travel-4k-clouds-mountains-7wmoz9la6tfkmvtr.jpg"></img>
            <div className="absolute top-[171px] left-[30px] right-[30px] bottom-[28px] flex flex-col text-start">
                <div className="text-white
                     bg-sky-500 w-content  m-auto rounded flex justify-start text-start ">Technology
                </div>
                <div className="text-white">
                    The Impact of Technology on
                    the Workplace: How Technology is Changing
                </div>
            </div>
        </div>
    )
}