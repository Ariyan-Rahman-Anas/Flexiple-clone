import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const getallFAQ = async () => {
    try {
       console.log("Prisma Client Models:", prisma);
     const faqs = await prisma.faq.findMany()
     console.log("from faq.js", {faqs})
    return faqs
   } catch (error) {
    console.error("Error fetching developers:", error.message);
    throw new Error("Failed to fetch developers");
   }finally {
    await prisma.$disconnect(); 
  }
}