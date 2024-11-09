// const express = require("express");
// const cors  = require("cors");
// const mysql = require("mysql");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db  = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password:'',
//     database: 'signup'
// });
// app.post('/signup', (req, res)=>{
//     const sql = " INSERT INTO login (`username`, `email`, `password`) VALUES(?)";
//     const values = [
//         req.body.username,
//         req.body.email,
//         req.body.password
//     ]
//     db.query (sql, [values],(err,data)=>{
//         if(err){
//             return res.json("Error");
//         }
//     })
// })

// app.post('/login', (req, res)=>{
//     const sql = " SELECT * FROM login WHERE `username` = ? , `password` = ?";
//     db.query (sql, [req.body.username,req.body.password],(err,data)=>{
//         if(err){
//             return res.json("Error");
//         }
//         if(data.length>0){
//             return res.json("Success");
//         }else {
//             return res.json("Failed");
//         }
//     })
// })
                
// app.listen(8081,()=>{
//     console.log("listening");
// })

const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const PORT = 8080;

const songs = [
    "My Way",
    "Fly Me to the Moon",
    "New York, New York",
    "Strangers in the Night",
    "I've Got You Under My Skin",
    "The Way You Look Tonight",
    "Come Fly with Me",
    "The Lady is a Tramp",
    "Summer Wind",
    "That's Life",
    "Luck Be a Lady",
    "You Make Me Feel So Young",
    "It Was a Very Good Year",
    "Witchcraft",
    "I Get a Kick Out of You",
    "Moon River",
    "Night and Day",
    "Something Stupid",
    "All the Way",
    "Love and Marriage"
];

app.get('/', (request, response) => { 
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    response.send(randomSong); // Send plain text
});

app.get('/birth_date', (request, response) => { 
    response.send("December 12, 1915"); // Send plain text
});

app.get('/birth_city', (request, response) => { 
    response.send("Hoboken, New Jersey"); // Send plain text
});

app.get('/wives', (request, response) => { 
    response.send("wife1, wife2, wife3, wife4"); // Send plain text
});

app.get('/picture', (request, response) => { 
    response.send("https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg"); // Send plain text
});




app.get('/public', (request, response) => { 
    response.send("Everybody can see this page"); // Send plain text
});

// Middleware for HTTP Basic Authentication using express-basic-auth
app.use('/protected', basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    realm: 'Protected Area',
    unauthorizedResponse: 'Not authorized'
}));

app.get('/protected', (request, response) => {
    response.send("Welcome, authenticated client");
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
 
