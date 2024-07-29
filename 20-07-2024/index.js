const http = require("http");
const fs = require("fs");
const PORT = 3131;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        try {
            let data = fs.readdirSync("./", "utf-8");
            res.writeHead(200, { "Content-Type": "text/plain" });
            data.forEach((el, i) => {
                res.write(`  ${el}\n`);
            });
            res.end();
        } catch (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading directory");
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
