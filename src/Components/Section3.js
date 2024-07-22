import { Facebook } from "@/accets/Facebook"
import { Instagram } from "@/accets/Instagram"
import { Twitter } from "@/accets/Twitter"
import { Inter } from "@/accets/Inter"
import { Metaa } from "@/accets/Metaa"
import Link from "next/link"

export const Section3 = () => {
    return (
        <>
            <div className="p-[16px]">
                <div className="m-auto w-full h-[336px] lg:w-[1231px] lg:flex justify-start ">
                    <div className="w-[289px]  mt-5">
                        <div className="flex flex-col gap-[24px] ">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h2 className="font-bold text-2xl text-black">
                                        About
                                    </h2>
                                </div>
                                <div >
                                    <p className="font-normal text-base text-[#696A75]">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <p className=" text-[#181A2A]">Email : </p>
                                    <p className="text-[#3B3C4A]">info@jstemplate.net</p>
                                </div>
                                <div className="flex">
                                    <p className="text-[#181A2A]">Phone : </p>
                                    <p className="text-[#3B3C4A]">
                                        880 123 456 789
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex lg:flex-col gap-[24px] w-[521px] items-center mt-5">
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                        <Link href={`/blogs`}>
                            <p>Blog</p>
                        </Link>
                        <Link href={`contact`}>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div className="flex gap-[27px] w-[144px] mt-5">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Inter />
                    </div>
                </div>
                <div className="m-auto w-full lg:w-[1216px] mt-6 flex flex-col gap-[64px] lg:flex-row justify-between border-t-4 pt-8 pb-8">
                    <div>
                        <Link href="/">
                            <Metaa />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-[16px] justify-start lg:flex-row">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div >
        </>
    )
}