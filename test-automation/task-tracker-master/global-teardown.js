import { MongoClient } from "mongodb";
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function globalTeardown() {
    try {
        await client.connect();

        const database = client.db("task-tracker");
        const users = database.collection("users");
        const exercises = database.collection("exercises");

        await users.deleteMany()
        await exercises.deleteMany()
    } catch(err) {
        console.error(err);
    } finally {
        await client.close();
    }
};

module.exports = globalTeardown