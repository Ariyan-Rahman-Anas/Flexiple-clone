import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.developer.createMany({
        data: [
            {
                name: "Pawan Yadav",
                experience: 3,
                noticePeriod: "Immediately Available",
                currentCTC: "₹4LPA",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                name: "Alice Johnson",
                experience: 5,
                noticePeriod: "30 Days",
                currentCTC: "₹10LPA",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                name: "Bob Smith",
                experience: 2,
                noticePeriod: "15 Days",
                currentCTC: "₹6LPA",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ]
    });

    // Seed FAQs
    await prisma.faq.createMany({
        data: [
            {
                "question": "What is Flexiple?",
                "answer": "Flexiple is a curated platform that connects companies with top freelance developers and designers."
            },
            {
                "question": "How does Flexiple select freelancers?",
                "answer": "Flexiple has a rigorous vetting process that includes technical assessments, live interviews, and past work evaluations to ensure only top talent is onboarded."
            },
            {
                "question": "What kind of freelancers can I find on Flexiple?",
                "answer": "You can hire frontend & backend developers, full-stack engineers, UI/UX designers, and product designers skilled in technologies like React, Node.js, Vue, Python, and more."
            },
            {
                "question": "How long does it take to hire a freelancer on Flexiple?",
                "answer": "Flexiple aims to connect you with qualified freelancers within **48 hours** after understanding your project needs."
            },
            {
                "question": "What are the benefits of using Flexiple?",
                "answer": "Flexiple offers a **curated talent pool**, quick turnaround for hiring, and freelancers who are **highly skilled and pre-vetted** for your needs."
            },
            {
                "question": "Is Flexiple only for developers?",
                "answer": "No, Flexiple offers talent for both **developers and designers**, catering to a wide range of tech and design needs."
            },
            {
                "question": "Can I hire a freelancer for short-term or long-term projects?",
                "answer": "Yes, you can hire freelancers for **both short-term projects** (like a one-off task) and **long-term projects** (like ongoing work)."
            },
            {
                "question": "How do I get started on Flexiple?",
                "answer": "Simply sign up on the Flexiple platform, describe your project, and you'll be matched with freelancers who fit your requirements."
            },
            {
                "question": "Does Flexiple offer a trial period?",
                "answer": "Yes, Flexiple offers a **trial period** where you can assess the freelancer’s work quality before committing fully."
            },
            {
                "question": "Is there a fee to use Flexiple?",
                "answer": "Flexiple charges a **service fee** that varies based on the freelancer’s rate, but there are no upfront costs to get started."
            }
        ]

    });

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        console.error("❌ Seeding failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
