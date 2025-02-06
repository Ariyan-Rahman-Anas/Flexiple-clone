import { ChevronRight, House } from "lucide-react"
import DevelopersList from "./DevelopersList"

const Developers = () => {

  return (
      <div className="bg-black text-white px-4 py-10 bg-gradient-to-b from-purple-900 to-black ">
          <div className="flex items-center gap-4 ">
              <House />
              <ChevronRight />
              <p className="text-gray-400 text-lg " >Hire .NET Developers</p>
          </div>
          <div>
              <h3>Filter by</h3>
          </div>
      <p>5,318 .NET engineers to hire...</p>

      
      <div className="flex items-start gap-6">
        <div className="w-full md:w-[65%]  ">
          <DevelopersList />
        </div>
      </div>

    </div>
  )
}
export default Developers