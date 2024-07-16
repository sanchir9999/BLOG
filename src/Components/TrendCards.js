"use Client"
export const TrendCards = ({ picture }) => {
    return (
        <div className="w-[289px] h-[320px] relative">
            <img className="w-[1000px]" src={picture}></img>
            <div className="absolute top-10 left-10">
                <div className="text-white
                     bg-sky-500 w-[97px] rounded-md border-4 border-indigo-500/100 ">Technology
                </div>
                <div>
                    The Impact of Technology on
                    the Workplace: How Technology is Changing
                </div>
            </div>
        </div>
    )
}