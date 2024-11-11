function openTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
}

function loadChatContent() {
    window.location.href = '/chatBox.html';
}

function loadprofileContent() {
    window.location.href = '/newUser.html';
}

function loadsignoutContent() {
    window.location.href = '/Login/login.html';
}

function nextSkipUser() {

}

function nextKeepUser() {

}