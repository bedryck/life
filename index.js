const express = require('express')
const path = require('path')


const app = express()




// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const PORT = process.env.PORT || 3100

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})