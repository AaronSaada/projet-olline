const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const cookieParser = require("cookie-parser")
const session = require('express-session');
const bodyParser = require("body-parser");
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
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(
    session({
        key: process.env.KEY,
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24
        }
    })
)


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
                            req.session.user = result
                            console.log(req.session.user)
                            res.send(result)
                        }
                        else{
                            res.send({
                                message: "Mauvaise combinaison Email / Mot de passe"
                            })
                        }
                    })
                }
                else{
                    res.send({
                        message: "L'utilisateur indiqué n'existe pas"
                    })
                }
            }
            console.log(err)
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
})

app.listen(4000, () => {
    console.log("Connecté au serveur")
});