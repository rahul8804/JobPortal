import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//user registation
export const registation = async (req, res) => {
  try {
    // check all Input is required
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    // check user already exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email",
        success: false,
      })
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName, email, phoneNumber, password: hashedPassword, role
    })
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    })
  } catch (error) {
    console.log(error);

  }
};

//user login
export const login = async (req, res) => {
  try {
    // check all Input is required
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    // check user exist
    let user = await User.findOne({ email });
    //console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "incorrect email or password",
        success: false,
      })
    }
    // check password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    // console.log(isPasswordMatch);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "incorrect email or password",
        success: false,
      })
    }
    // check user role
    if (role !== user.role) {
      return res.staus(400).json({
        message: "Account don't exist with this roll",
        success: false,
      })
    }
    // create token
    const tokenData = { userId: user._id };
    // sign token
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
    //console.log(token);
    // send response of user data form db
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
    }
    // set cookie to client
    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
      message: `Welcome back ${user.fullName}`,
      user,
      success: true
    })
  } catch (error) {
    console.log(error)
  }
}

// logout user
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}

// get user profile
export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, skills, bio, profile } = req.body;
    const file = req.file;
    // if (!fullName || !email || !phoneNumber || !skilles || !bio || !profile) {
    //   return res.status(400).json({
    //     message: "Something is missing",
    //     success: false,
    //   });
    // }
    //get file url from cloudinary


    // convert string to array
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    // get userId from middleware authenticate
    const userId = req.id;

    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    // updating data
    if (fullName) user.fullName = fullName
    if (email) user.email = email
    if (phoneNumber) user.phoneNumber = phoneNumber
    if (bio) user.profile.bio = bio
    if (skills) user.profile.skills = skillsArray


    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      skilles: user.skilles,
      bio: user.bio,
      profile: user.profile,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }

    return res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: user,
    })

  } catch (error) {
    console.log(error);
  }

}
