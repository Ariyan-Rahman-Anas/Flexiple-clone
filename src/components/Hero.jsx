import { ArrowRight, Star } from "lucide-react"
import { Button } from "./ui/button"

const Hero = () => {
  return (
      <div className="px-2 bg-gradient-to-b from-blue-700 to-purple-900 text-white text-center min-h-[65vh] flex flex-col items-center justify-center ">
          <div className="w-full md:w-[55%] space-y-8 pt-28 ">
              <h1 className="text-3xl md:text-4xl font-bold tracking-wider">Hire .NET Developers: Affordable, Dedicated .NET Experts in 72 hours</h1>
              <h2 className="text-xl font-medium tracking-wide">Hire .NET developers to enhance your project's efficiency and productivity. Build dynamic web applications using ASP.NET, C#, Entity Framework, and MVC.</h2>
              <h3 className="text-xl font-medium tracking-wider " >Access 100+ expert NET developers, engineers and architects from Flexiple, handpicked through a 5-hour evaluation process.</h3>

              <Button className="bg-white hover:bg-gray-400 text-black text-lg font-semibold p-6 ">
                  Hire dream developers
                  <ArrowRight strokeWidth={3} color="black" />
              </Button>

              <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                      <Star size={30} fill="white" />
                      <Star size={30} fill="white" />
                      <Star size={30} fill="white" />
                      <Star size={30} fill="white" />
                      <Star size={30} fill="white" />
                  </div>
                  <p className="text-xl font-medium tracking-wide">Clients rate Flexiple .NET developers 4.8 / 5 on average based on 10,482 reviews.</p>
              </div>
          </div>
    </div>
  )
}
export default Hero