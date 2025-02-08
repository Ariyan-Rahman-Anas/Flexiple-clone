import { ArrowRight, ChevronRight, House } from "lucide-react"
import DevelopersList from "./DevelopersList"
import Link from "next/link"
import { Button } from "../ui/button"

const Developers = () => {

  return (
    <div className="px-2 md:px-4 bg-black text-white  py-10 bg-gradient-to-b from-purple-900 to-black ">
      <div className="flex items-center gap-4 my-4">
        <House />
        <ChevronRight />
        <p className="text-gray-400 text-lg " >Hire .NET Developers</p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-6 relative ">
        <div className="w-full md:w-[65%]  ">
          <DevelopersList />
        </div>

        <div className="border w-full md:w-[35%] p-8 rounded-lg border-gray-400 space-y-8 sticky top-3 ">
          <h1 className="text-4xl font-semibold" >99% of Flexiple's clients hire talent after a risk-free trial.</h1>
          <p className="text-xl tracking-wide pb-4 ">Flexiple's meticulous screening and matching process connects you with exceptional developers perfectly aligned to your specific needs.</p>
          <Link href={"/"}>
            <Button className="bg-white text-black font-semibold text-lg hover:bg-gray-300 h-10 w-full " >Book a consultation call <ArrowRight seed={25} strokeWidth={3} /> </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Developers