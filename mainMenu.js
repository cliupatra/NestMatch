function openTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
}

function loadChatContent() {
    window.location.href = 'http://127.0.0.1:5500/chatBox.html';
}

function loadprofileContent() {
    window.location.href = 'http://127.0.0.1:5500/newUser.html';
}

function loadsignoutContent() {
    window.location.href = 'http://127.0.0.1:5500/Login/login.html';
}

function nextSkipUser() {

}

function nextKeepUser() {

}