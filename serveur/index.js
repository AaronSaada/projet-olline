const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const cookieParser = require("cookie-parser")
const session = require('express-session');
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");

dotenv.config({
    path: '../.env'
})

const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());

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

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if(!token) {
        res.send("Aucun token détecté")
    } else{
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.json({
                    auth: false,
                    message: "Problème lors de l'authentification"
                })
            } else{
                req.idusers = decoded.id
                console.log(req.idusers)
                next();
            }
        })
    }
}

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.post('/inscription', (req, res) => {

    const lastname = req.body.lastname
    const firstname = req.body.firstname
    const email = req.body.email
    const password = req.body.password
    const dateOfBirth = req.body.dateOfBirth
    const address = req.body.address

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO users (lastname, firstname, email, password, dateOfBirth, address) VALUES (?, ?, ?, ?, ?, ?)",
            [lastname, firstname, email, hash, dateOfBirth, address],
            (err, result) => {
                console.log(result)
            }
        )
    })

})

app.post('/connexion', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (err, result) => {
            if(err) {
                res.send({err: err})
            }
            else{
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if(response) {
                            const id = result[0].idusers
                            const token = jwt.sign({id}, process.env.JWT_SECRET, {
                                expiresIn: 600,
                            })
                            req.session.user = result

                            res.json({
                                auth: true,
                                token: token,
                                result: result
                            })
                        }
                        else{
                            res.json({
                                auth: false,
                                message: "Mauvaise combinaison Email / Mot de passe"
                            })
                        }
                    })
                }
                else{
                    res.json({
                        auth: false,
                        message: "Cet utilisateur n'existe pas"
                    })
                }
            }{err &&(
                console.log(err)
            )}
           
        }
    )
})

app.get("/connexion", (req, res) => {
    if(req.session.user) {
        res.send({
            loggedIn: true, 
            user: req.session.user
        })
    }else{
        res.send({
            loggedIn: false
        })
    }
});

app.post("/deconnexion",(req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("L'utilisateur a bien été déconnecté.")
});

app.listen(4000, () => {
    console.log("Connecté au serveur")
});