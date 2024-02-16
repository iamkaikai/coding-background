const express = require('express');
const app = express();
const port = 8188;
const fs = require('fs');

const codeSnippets = require('./snippets.js');

app.get('/get_snippet', (req, res) => {
    const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    res.json({ snippet });
});

app.get('/slideshow', (req, res) => {
    const resourceDir = './public/src';
    fs.readdir(resourceDir, (err, files) => {
        if (err) {
            console.error("Failed to read files: ", err);
            res.status(500).send('Error reading files');
        } 
        const images = files.filter(file => /\.(jpg|jpeg|png|gif|mp4|mov|m4v|mpg|m4v|wmv|webm|ogg)$/i.test(file));
        res.json({ images });
    });
    
    
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
});
