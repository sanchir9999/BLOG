import Link from "next/link"
export const Drawer = ({ isOpen, closeDrawer }) => {
    return (
        <div className={`fixed top-0 left-[100%] ${isOpen ? "translate-x-[-400px]" : "translate-x-[0px]"} 
        h-screen w-[400px] p-6 shadow-md bg-orange-400 duration-300 z-50`} >
            <button className=" text-black text-2xl font-bold bg-[#fb4b4b] flex justify-center content-center w-[40px] h-[40px] items-center rounded-3xl " onClick={closeDrawer}>X</button>
            <div>
                <div className="flex justify-start pl-2 gap-[10px] w-[521px]  mt-5">
                    <Link href="/">
                        <p className="m-auto w-[80px] pt-2 bg-[#4bfb77] text-black rounded-md flex justify-center content-center h-10">Home</p>
                        <span>Хэрэв Home <br></br>
                            хуудсан дээр <br></br>
                            байгаа бол энэ <br></br>
                            товч ажиллахгүй.</span>
                    </Link>
                    <Link href={`/blogs`}>
                        <p className="m-auto w-[80px] pt-2 bg-[#4bfb77] text-black rounded-md flex justify-center content-center h-10">Blog</p>
                    </Link>
                    <Link href={`contact`}>
                        <p className="m-auto w-[80px] pt-2 bg-[#4bfb77] text-black rounded-md flex justify-center content-center h-10">Contact</p>
                    </Link>
                </div>
            </div>
        </div >
    )
}