const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>My Site</title>
            </head>
            <body>
                <h1>Hello from Node.js on EC2 🚀</h1>
                <p>Your server is working correctly!</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
