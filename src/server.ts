import mongoose from "mongoose";
import app from "./module/app/app";

const port: number = 5000;

//database connection
async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.log(`Failed to connect to the database`, err);
    }
}

bootstrap();


