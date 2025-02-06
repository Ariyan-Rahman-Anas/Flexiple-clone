import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
    try {
        console.log("📡 Received GET request");

        const developers = await prisma.developer.findMany();
        
        console.log("🛠️ Developers fetched from DB:", developers); // <-- This will help debug

        return NextResponse.json({
            success: true,
            message: "Developers retrieved successfully",
            totalDevelopers: developers.length,
            developers,
        });
    } catch (error) {
        console.error("❌ Error fetching developers:", error);
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}