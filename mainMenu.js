function openTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
}

function loadChatContent() {
    // Show the chat tab
    openTab('chat');
    
    // Fetch and load content from chatBox.html
    fetch('chatBox.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('chat').innerHTML = html;
        })
        .catch(error => console.error('Error loading chat content:', error));
}

function loadprofileContent() {
    // Show the chat tab
    openTab('myprofile');
    
    // Fetch and load content from chatBox.html
    fetch('newUser.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('myprofile').innerHTML = html;
        })
        .catch(error => console.error('Error loading chat content:', error));
}

function loadsignoutContent() {
    window.location.href = 'http://127.0.0.1:5500/Login/login.html';
}

function nextSkipUser() {
    
}

function nextKeepUser() {

}