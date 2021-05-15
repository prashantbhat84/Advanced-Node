const cluster = require('cluster');
//Is the file being executed in master mode
if (cluster.isMaster) {
    // re-execute the file in child mode
    cluster.fork();

} else {
    //I am a child and will act like a server
    const express = require('express');
    const app = express();
    function doWork(duration) {
        const start = Date.now();
        while ((Date.now() - start) < duration) {

        }

    }

    app.get("/", (req, res) => {
        doWork(5000)
        res.send("bye there");
    });

    app.listen(3000, () => {
        console.log('server is on');
    });
}
