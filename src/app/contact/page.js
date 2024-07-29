import { Section3 } from "@/Components/Section3"
import { Navbar } from "@/Components/Navbar"
const Page = () => {
    return (
        <>
            <Navbar />
            <div className="w-full m-auto lg:w-[895px] px-4">
                <div className=" pb-10 flex flex-col gap-5">
                    <div className=" m-auto w-full flex flex-col justify-start p-4 lg:w-[624px] ">
                        <h1 className="font-semibold text-4xl">Contact Us</h1>
                        <p className="font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="lg:flex lg:items-between lg:m-auto lg:w-[638px] ">
                        <div className="p-4 border-[1px] rounded-xl border-[#E5E7EB] flex flex-col gap-1">
                            <h1 className="font-semibold text-2xl">Address</h1>
                            <p className="font-normal text-base">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                        <div className="p-4 border-[1px] rounded-xl border-[#E5E7EB] flex flex-col gap-1">
                            <h1 className="font-semibold text-2xl">Contact</h1>
                            <p className="font-normal text-base">313-332-8662
                                info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[643px] m-auto w-full p-4 flex flex-col gap-6 px-4">
                    <h1 className="font-semibold text-lg">Leave a Message</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="lg:flex lg:justify-between lg:gap-7 gap-x-3">
                            <input className="border-[1px] rounded-xl border-[#E5E7EB] " type="Subject" placeholder="Subject"></input>
                            <input className="border-[1px] rounded-xl border-[#E5E7EB]  lg:w-full" type="Subject" placeholder="YourName"></input>
                        </div>
                        <input className="border-[1px] rounded-xl border-[#E5E7EB] " type="Subject" placeholder="YourName"></input>
                        <input className="border-[1px] rounded-xl border-[#E5E7EB] " type="Subject" placeholder="Write a message"></input>
                    </div>
                    <button className="m-auto w-[200px] pt-2 bg-[#4B6BFB] text-white rounded-md flex justify-center content-center h-10">
                        Send Message
                    </button>
                </div>
            </div >
            <Section3 />
        </>
    )
}
export default Page