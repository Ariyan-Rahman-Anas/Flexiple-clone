import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.developer.createMany({
        data: [
            { name: "Pawan Yadav", experience: 3, noticePeriod: "Immediately Available", currentCTC: "₹4LPA" },
            { name: "Alice Johnson", experience: 5, noticePeriod: "30 Days", currentCTC: "₹10LPA" },
            { name: "Bob Smith", experience: 2, noticePeriod: "15 Days", currentCTC: "₹6LPA" }
        ]
    });

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        console.error("❌ Seeding failed:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
