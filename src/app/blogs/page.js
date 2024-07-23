"use client"
import { MetaBlog } from "@/accets/MetaBlog"
import { Menu } from "@/accets/Menu"
import { Drawer } from "@/Components/Drawer"
import { useState } from "react"
import { SearchIcon } from "@/accets/SearchIcon"
import Link from "next/link"
import { Section2 } from "@/Components/Section2"
import { Section3 } from "@/Components/Section3"
import { Navbar } from "@/Components/Navbar"
const Page = () => {
    const [isDrawerOpen, SetIsDrawerOpen] = useState(false)
    const handleDrawer = () => {
        SetIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <>
            <div>
                <div className="bg-white w-full py-4 border-b">
                    <Navbar />
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
