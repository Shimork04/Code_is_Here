import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth.js"




// middleware configuration //
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // defines directory name where our assets lies
// here 'public/assets' path is for local storage, where assets are being stored but during production we might to store else where, so that time we need to change this path






// file storage //

// multer is used for form data - primarily used for uploading files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
    // here cb is callback function, to signal completion
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// got this above code from git repo of multer

const upload = multer({ storage });


// rotes with files //
app.post("/auth/register", upload.single("picture"), register);





/*  Routes here  */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);



// mongo - setup //

// using mongodb atlas, which is web browser setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`The error is: ${err}`));








//  //
