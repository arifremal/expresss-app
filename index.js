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
  try {
    const { email, name, age } = req.body;
    const newPerson = new Person({
      name,
      email,
      age,
    });
    await newPerson.save();
    res.send("person added");
  } catch (error) {
    res.send(error.message);
  }
});
// updating data
app.put("/person", express.json(), async (req, res) => {
  const { id } = req.body;
  const personData = await Person.findByIdAndUpdate(id, { age: "28" });

  await personData.save();
  console.log(personData);
  res.send("pp updated");
});
// deleting data from mongo

app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("user deleted");
});

app.listen(PORT, () => {
  console.log(`server is runnning on http://localhost:${PORT}`);
});
