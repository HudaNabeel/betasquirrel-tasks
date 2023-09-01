const http = require('http');
const http = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
     const path = parsedUrl.path;
     res.end(path);
});

server.listen(port, () => {
    console.log(`your app is running on port ${port}`);
});
