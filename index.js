import express from 'express';
import authroutes from './routes/authroutes.js'
import { MongoClient } from 'mongodb';
var app = express();
var port = 5000;

app.use(express.json());


const uri = "mongodb+srv://ZAINKHAN25:iRNFQAYAZfhMJnaC@second0.koyukqn.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
app.use('/auth', authroutes)

app.listen(port, ()=>{
    console.log(`Port is running on Port Number ${port}`);
})


// ZAIN-KHAN-25
// iRNFQAYAZfhMJnaC