require("dotenv").config("./.env");

// 2. Shared secret all files on the repository
const SECRET = process.env.SECRET;

const http = require("http");
const port = process.env.PORT;
const hostname = SECRET;

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);


// read the env_secret.json file to get the SHARED_SECRET
const sharedSecret = fs.readFileSync('env_secret.json', 'utf8');
const secrets = JSON.parse(sharedSecret);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    //file blank
    f = ""
    filenames.forEach((file) => {
        f = f + file + "\n"
    })
    // append the SHARED_SECRET file at the end
    f = f + "\n" + secrets.SHARED_SECRET
    res.end(f)
});

server.listen(port, hostname, () => { })



