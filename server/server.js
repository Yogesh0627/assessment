import express from "express";
import cors from "cors";
import Client from "./models/Client.js";



const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/addClient", async (req, res) => {
  const userDetails = req.body;
  console.log(`userDetails are`, userDetails);
  try {
    const newUser = await Client.create(userDetails);
    console.log("ifAdded", newUser);
    if (ifAdded) {
      return res.json({ status: true, newUser });
    } else {
      return res.json({ status: false, msg: "notAdded" });
    }
  } catch (error) {
    return res.json({ error });
  }
});

app.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const mobileNumber = req.body.mobileNumber;
  const project = req.body.project;
  const email = req.body.email;
  const userToUpdate = {
    firstName,
    lastName,
    mobileNumber,
    project,
    email,
  };
  console.log("from here", userToUpdate);

  try {
    const updatedUser = await Client.findByIdAndUpdate(id, userToUpdate, {
      new: true,
    });
    if (updatedUser) {
      res.json({ status: true, updatedUser });
    } else {
      res.json({ status: false, msg: "NotUpdated" });
    }
  } catch (error) {
    console.log("error", error);
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const isDeleted = await Client.deleteOne({ _id:id });
    if (isDeleted) {
      res.json({ status: true, isDeleted });
    }
  } catch (error) {
    console.log(`error while dleting`);
  }
});

app.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await Client.find({});
    if (allUsers) {
      return res.json({ status: true, allUsers });
    } else {
      return res.json({ status: false, allUsers });
    }
  } catch (error) {
    return console.log("error from all Users");
  }
});



app.listen(3000, () => {
  console.log("App Running Sucessfully");
});
