const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  test,
  signup,
  find,
  login,
};

async function signup(req, res) {
  console.log(req.body);
  try {
    const new_user = new User({ ...req.body });
    await new_user.save();
    console.log(new_user);
    const token = createJWT(new_user);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
}

async function find(req, res) {
  console.log(req.query.username);
  const finduser = await User.find({ username: req.query.username });
  console.log(finduser);
  res.status(200).json({ test: "sucess" });
}

async function test(req, res) {
  console.log(req.body);

  res.status(200).json({ test: "sucess" });
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials no user" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      console.log(isMatch);
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials bad password" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}
function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}
