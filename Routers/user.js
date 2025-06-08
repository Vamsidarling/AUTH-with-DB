const { Router } = require("express");
const { UserModel, histroymodel, CoursesModel } = require("../db");
const bcrypt = require("bcrypt");
const UserRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const express = require("express");
const { usermiddleware } = require("../middlewares/userAuth");
const { Groq } = require("groq-sdk");
// const usermiddleware = require(__dirname+"S:\WEB\Practice projects\Course sellling app\middlewares\userAuth.js")
UserRouter.use(express.json());

UserRouter.post("/signup", async function (req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const HashPassword = await bcrypt.hash(password, 4);
    const fname = req.body.fname;
    const lname = req.body.lname;

    const Data = await UserModel.create({
      name,
      email,
      password: HashPassword,
      fname,
      lname,
    });
    console.log(req.body);
    console.log(Data);

    res.json({ message: "user signup sucessfully " });
  } catch (err) {
    console.log(err);
    res.json({
      message: "signup error",
    });
  }
});
UserRouter.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email,
  });
  if (!user) {
    res.status(404).json({
      message: "Email doesnt exist ",
    });
    return;
  }
  const hassed = await bcrypt.compare(password, user.password);
  if (hassed) {
    const token = jwt.sign(
      {
        userid: user._id,
      },
      JWT_SECRET
    );
    res.json({
      message: "user sign in success ",
      token,
    });
  } else {
    res.json({
      message: "password is wrong",
    });
  }
});
UserRouter.get("/getDetails", usermiddleware, async function (req, res) {
  const uderId = req.user.userid;
  const data = await UserModel.findById(uderId);
  res.json({
    data,
    message: "User details fetched success",
  });
});
UserRouter.post("/GenerateData", usermiddleware, async function (req, res) {
  const { question } = req.body; // Get question from request body

  if (!question) {
    return res
      .status(400)
      .json({ message: "Question is required in the request body." });
  }

  const groq = new Groq({
    apiKey: "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", // Replace with your actual API key
  });

  async function main() {
    const completion = await groq.chat.completions.create({
      model: "compound-beta",
      // System prompt to guide the model's behavior
      messages: [
        {
          role: "system",
          content:
            "You are a social media assistant. Generate concise, sympathetic tweets about current events using the latest real-time data. If data is unavailable, state so clearly.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      // If the model supports tools, you can specify them here (example placeholder)

      // Optionally, set temperature for more focused output
      temperature: 0.7,
    });
    const ans = completion.choices[0]?.message?.content;
    res.json({
      ans,
    });
  }

  main().catch(console.error);
});
module.exports = {
  UserRouter: UserRouter,
};
