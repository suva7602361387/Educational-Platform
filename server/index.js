const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profiel");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
//const contactUsRoute = require("./routes/Contact");
//const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const connectwithDB=require("./config/database");

dotenv.config();
const PORT = process.env.PORT || 4000;
connectwithDB();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"https://educational-platform-3fa3.vercel.app",
		methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
//app.use("/api/v1/reach", contactUsRoute);

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
