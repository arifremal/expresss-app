import express from "express";
import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";

const app = express();

const PORT = 2000;
await connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello brother ar is here");
});
// saving data
app.post("/person", express.json(), async (req, res) => {
  const { email, name, age } = req.body;
  const newPerson = new Person({
    name,
    email,
    age,
  });
  await newPerson.save();
  res.send("person added");
});
// updating data
app.put("/person", express.json(), async (req, res) => {
  const { email } = req.body;
  const personData = await Person.find({ email });
  console.log(personData);
  res.send("pp updated");
});

app.listen(PORT, () => {
  console.log(`server is runnning on http://localhost:${PORT}`);
});
