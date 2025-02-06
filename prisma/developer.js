import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getAllDevelopers = async () => {
   try {
     const developers = await prisma.developer.findMany()
     console.log({developers})
    return developers
   } catch (error) {
    console.error("Error fetching developers:", error.message);
    throw new Error("Failed to fetch developers");
   }finally {
    await prisma.$disconnect(); 
  }
}