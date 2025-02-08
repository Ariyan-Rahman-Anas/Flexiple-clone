import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import FAQList from "./FAQList"

const FAQ = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-purple-900 h-36 border-none">
      </div>

      <div className="text-white bg-gradient-to-t from-black to-purple-900 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-16 md:px-16 pt-14 " >
        <div className="space-y-8 w-full md:w-[35%] border2 ">
          <h1 className="text-4xl font-bold ">Frequently Asked Questions</h1>
          <Button className="bg-white hover:bg-gray-300 text-black font-semibold w-full py-6 rounded-lg text-lg ">View All FAQs <ArrowRight strokeWidth={3} /></Button>
        </div>

        <div className="w-full md:w-[65%] border2 ">
          <FAQList />
        </div>
      </div>
    </div>
  )
}
export default FAQ