const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://chminhaz:uDKz6QbC3BvauDhZ@cluster0.cksixld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const run = async () => {
    try {
        await client.connect();

        const collection = client.db("usersDB").collection("users");
        app.get('/users', async (req, res) => {
            const result = await collection.find().toArray();
            res.send(result);
        });
        app.post('/users', async (req, res) => {
            const email = req.body.email;
            console.log(email)
            const name = req.body.name;
            const newUser = { email, name };
            const isExistEmail = await collection.findOne({ email });
            const isExistName = await collection.findOne({ name });
            if (!isExistEmail || !isExistName) {
                const result = await collection.insertOne(newUser);
                res.send(result);

            }
            res.send({ success: false, message: 'User already exists' });
            return;
        });
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await collection.deleteOne(query);
            res.send(result);
        });
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.error(error);
    }
}

run().catch(console.dir);
// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});






app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

