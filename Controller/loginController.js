import UserModel from "../Model/UserModel.js";

export const login = async (req, res) => {
  //how to login
  // recieve data of user
  const logindata = req.body;
  // check data od user that matching with mongoose or not
  const user = await UserModel.findOne({
    "auth.email": logindata.email,
    "auth.password": logindata.password,
  });
  if (user) {
    //if it's match, user can enter to web app
    return res.status(200).json({ userId: user._id });
  } else {
    //if it's dosen't match, user can't enter to web app
    return res.status(404).json({ message: "user not found" });
  }
};

export const signUp = async (req, res) => {
  // recived new account from client
  const newUser = req.body;
  console.log(newUser);
  // check the exists one
  const existsUser = await UserModel.findOne({
    "auth.email": newUser.auth.email,
  });
  console.log("existsUser", existsUser);
  if (!existsUser) {
    // if not exitst record it
    const newOne = await UserModel.create(newUser);
    console.log(newOne);
    // return success
    return res.status(200).json({ message: "create success." });
  } else {
    // if exists return error
    return res
      .status(401)
      .json({ message: "you already registered. please sign in." });
  }
};
