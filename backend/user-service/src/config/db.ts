import mongoose from "mongoose";

const connectDB = async () => {
    const url =process.env.MONGO_URI;

    if (!url) {
        throw new Error("Misiing mongo connection url"
        );
    }

    try {
        await mongoose.connect(url, {
            dbName: "ChatApp"
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to DB");
        process.exit(1);
    }
}

export default connectDB;
