import express, { json } from "express";
import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();

const PORT = 2000;
// await connectDB();
app.use(express.json());

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "i phone",
      peice: 233,
    },
    {
      id: 2,
      name: "phone",
      peice: 233,
    },
  ];
  res.status(200).json({ products });
});

app.get('/api/products/:id',(req,res)=>{
  const products = [
    {
      id:1,name:"i phone",peice: 233,
    }
  ]
  const product = products.find(p=>p.id === Number(req.params.id))
  if(!product){
    return res.status(404).json({message:'not product fount'})
  }
  res.status(200).json(product)
})
// app.get("/visit", (req, res) => {
//   if (req.session.page_views) {
//     req.session.page_views++;
//     res.send(`pageview is ${req.session.page_views} ttimes`);
//   } else {
//     req.session.page_views = 1;
//     res.send("welcome for fitstime");
//   }
// });

// app.get("/remove", (req, res) => {
//   req.session.destroy();
//   res.send("session removed");
// });

// app.get("/fetch", (req, res) => {
//   console.log(req.cookies);
//   res.send("api-called");
// });

// app.get('/remove-cookie',(req,res)=>{
//   res.clearCookie('name')
//   res.send('cookie cleared')

// })
// saving data
// app.post("/person", express.json(), async (req, res) => {
//   try {
//     const { email, name, age } = req.body;
//     const newPerson = new Person({
//       name,
//       email,
//       age,
//     });
//     await newPerson.save();
//     res.send("person added");
//   } catch (error) {
//     res.send(error.message);
//   }
// });
// // updating data
// app.put("/person", express.json(), async (req, res) => {
//   const { id } = req.body;
//   const personData = await Person.findByIdAndUpdate(id, { age: "28" });

//   await personData.save();
//   console.log(personData);
//   res.send("pp updated");
// });
// // deleting data from mongo

// app.delete("/person/:id", async (req, res) => {
//   const { id } = req.params;
//   await Person.findByIdAndDelete(id);
//   res.send("user deleted");
// });

app.listen(PORT, () => {
  console.log(`server is runnning on http://localhost:${PORT}`);
});
