let response;
async function fetchAndDisplaySnippet() {
    response = await fetch('/get_snippet');
    const data = await response.json();

    const snippet = data.snippet;
    console.log(snippet);
    const container = document.getElementById('snippetContainer');
    let idx = 0;

    function appendCharacter() {
        if (idx < snippet.length) {
            container.innerHTML += snippet[idx];
            scrollToBottom();
            idx++;
            setTimeout(appendCharacter, 30); // Call the same function after 30ms
        } else {
            container.innerHTML = ''; // Clear the container
            idx = 0; // Reset idx to 0
            setTimeout(fetchAndDisplaySnippet, 30); // Restart the process
        }
    }

    appendCharacter(); // Start the process
}

function scrollToBottom() {
    var container = document.getElementById('snippetContainer');
    window.scrollTo(0, container.scrollHeight);
}

window.onload = fetchAndDisplaySnippet();
