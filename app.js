const express = require('express');
const app = express();
const port = 8188;

// Array of code snippets
const codeSnippets = require('./snippets.js');

// Endpoint to get a random snippet
app.get('/get_snippet', (req, res) => {
    const snippet = codeSnippets[0];
    res.json({ snippet });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
});
