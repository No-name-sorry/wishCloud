import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


/*REGISTER*/
export const register = async (req, res) => {
     try{
        const {
         firstName,
         lastName,
         nickname,
         email,
         password,
         picturePath,
         friends,
         createdAt
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
         firstName,
         lastName,
         nickname,
         email,
         password: passwordHash,
         picturePath,
         friends,
         createdAt
       });

       const savedUser = await newUser.save();
       res.status(201).json(savedUser);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
};

/* LOGIN */
export const login = async (req, res) =>{
   try{
      const { email, password } = req.body;
      const user = await User.findOne({ email: email});
      if (!user) {
         return res.status(400).json({ message: "User does not exist." });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(400).json({ message: "Invalid credentials" });
      } 

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "1h",
      });
      delete user.password;
      res.status(200).json({ token, user });   
      
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
};