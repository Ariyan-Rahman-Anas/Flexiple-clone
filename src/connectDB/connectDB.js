import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.mongo_URI)
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("Database is connected!")
        })
        connection.on("error", (err) => {
            console.log("MongoDB connection error, please make sure DB is up and running...", err)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong with connecting mongoDB: ", error)
    }
}