import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        console.log("📡 Received GET request");

        const faqs = await prisma.faq.findMany();

        console.log("🛠️ faqs fetched from DB:", faqs); // <-- This will help debug

        return NextResponse.json({
            success: true,
            message: "FAQs retrieved successfully",
            totalFAQs: faqs?.length || 0,
            faqs,
        });
    } catch (error) {
        console.error("❌ Error fetching faqs:", error);
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}