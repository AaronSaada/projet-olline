import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import productRoutes from "./routes/products.js"

const app = express();

// Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)

    next();
})
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());

app.use("/users", userRoutes)
app.use("/auth", authRoutes)
app.use("/products", productRoutes)


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(
    session({
        key: process.env.KEY,
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 4
        }
    })
);

app.listen(4000, () => {
    console.log("Connecté au serveur")
});