"use client"
import { MetaBlog } from "@/accets/MetaBlog"
import { Menu } from "@/accets/Menu"
import { Drawer } from "@/Components/Drawer"
import { useState } from "react"
import { SearchIcon } from "@/accets/SearchIcon"
import Link from "next/link"
import { Section2 } from "@/Components/Section2"
import { Section3 } from "@/Components/Section3"
const Page = () => {
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false)
    const handleDrawer = () => {
        SetIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <>
            <div>
                <div className="bg-white w-full py-4 border-b">
                    <div className="flex items-center m-auto w-full lg:w-[1240px] px-4 justify-between">
                        <Link href="/">
                            <MetaBlog />
                        </Link>
                        <div className="hidden lg:flex gap-5 flex-1 justify-center">
                            <div className="flex justify-center gap-10">
                                <Link href="/">
                                    <div>Home</div>
                                </Link>
                                <Link href={`/blogs`}>
                                    <div className="cursor-pointer">Blog</div>
                                </Link>
                                <div>Contact</div>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center gap-4 items-center">
                            <div>Search</div>
                            <div><SearchIcon /></div>
                        </div>

                        <IconButton className="lg:hidden" onClick={handleDrawer}>
                            <Menu className="flex justify-center items-center" />
                        </IconButton>
                    </div>
                </div>
                <Drawer isOpen={isDrawerOpen} closeDrawer={handleDrawer} />

            </div>
            <Section2 />
            <Section3 />
        </>
    )
}
const IconButton = ({ children, onClick, className }) => {
    return (
        <div onClick={onClick}
            className={`cursor-pointer flex justify-center items-center w-[40px] h-[40px] rounded-[50%] hover:bg-slate-200 ${className}`}>
            {children}
        </div>
    );
};
export default Page
