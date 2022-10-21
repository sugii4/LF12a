/*const data = require('../models/data.json');

exports.getIndex = (req, res) => {
    res.render('index');
};

exports.getData = (req, res) => {
    res.json(data);
}*/

const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://Cindy:Sugii2001@myproject.m0cubrp.mongodb.net/scorelist";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db("myProject");
        const scorelist = database.collection("scorelist");
        
        const doc = {
            _id: "1",
            title: "blablabla",
            content: "blabliblubb",
        }

        const result = await scorelist.insertOne(doc);

        console.log("lalalalalala" + result.insertedId);
    }
    finally {
        await client.close();
    }
    
}



run().catch(console.dir);