const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "projet_olline"
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
                console.log(err)
            }
        )
    })

})

app.post('/connexion', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        email,
        (err, result) => {
            if(err) {
                res.send({err: err})
            }
            else{
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if(response) {
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

app.listen(4000, () => {
    console.log("Connecté au serveur")
});