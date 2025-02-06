import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, ArrowRight } from "lucide-react"
import NavMenu from "./header/NavMenu"

const Navbar = () => {
  return (
    <nav className=" bg-black md:bg-blue-700 hover:bg-black duration-500 text-white flex items-center justify-between p-4 w-full">
      <div className="flex items-center gap-14 text-lg ">
        <div className="flex items-center gap-3">
          <AlignJustify size={25} className="md:hidden text-gray-400 " />
          <Link href={"/"} className="font-semibold text-xl md:text-3xl " >Flexiple</Link>
        </div>
        <div className="hidden md:block">
          <NavMenu />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <Button variant="outline" className="bg-transparent text-lg font-medium hidden md:flex items-center ">
          <span>Find Jobs</span>
          <ArrowRight />
        </Button>
        <Button className="text-lg font-medium bg-[#692aad] " >Hire Developers <ArrowRight /> </Button>
        <Link href={"/"} className="text-lg font-medium hidden md:block ">Login</Link>
      </div>
    </nav>
  )
}
export default Navbar