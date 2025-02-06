import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import user from "./../assets/user.webp"


const Testimonial = () => {
  return (
      <div>
          <div className="bg-gradient-to-b from-black to-purple-800 h-36 border-none">
          </div>
          <div className="border-none text-center bg-gradient-to-t from-black to-purple-800 text-white px-2">
              <h1 className=" text-4xl font-bold ">100+ fast-growing companies love Flexiple!</h1>
              <p className="my-6 text-xl ">Team work makes dreamwork. Flexiple helps companies build the best possible team by scouting and identifying the best fit.</p>
              <div className="flex flex-col md:flex-row items-center text-left justifystart gap-8 w-full md:w-[70%] mx-auto">
                  <div className="w-full md:w-[40%]">
                      <Image src={user} alt="user" width={1080} height={520} className="rounded-lg" />
                  </div>
                  <div className="w-full md:w-[60%] space-y-8 ">
                      <p className="text-xl text-gray-300">“I’ve been pleased with Purab’s performance and work ethics. He is proactive in flagging any issues and communicates well. The time zone difference is huge but he provides a sufficient overlap. He and I work together very well and I appreciate his expertise.”</p>
                      <div>
                          <h1 className="text-3xl font-semibold text-white">Paul Cikatricis</h1>
                          <h4 className="text-gray-400">UX and Conversion Optimization Lead</h4>
                      </div>
                  </div>
              </div>
          </div>

          <div className="md:px-16 pt-14 w[80%]  bg-black  ">
          <Carousel
              opts={{
                  align: "start",
              }}
              className="w-[75%] mx-auto md:w-full"
          >
              <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                              <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                      <span className="text-3xl font-semibold">{index + 1}</span>
                                  </CardContent>
                              </Card>
                          </div>
                      </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>
          </div>
    </div>
  )
}
export default Testimonial