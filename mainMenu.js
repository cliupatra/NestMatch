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
    // Show the chat tab
    openTab('signout');
    
    // Fetch and load content from chatBox.html
    fetch('Login/login.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('signout').innerHTML = html;
        })
        .catch(error => console.error('Error loading chat content:', error));
}

function nextSkipUser() {

}

function nextKeepUser() {

}