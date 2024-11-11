const messagesData = {

    Kanye: [
        {type:'recieved', text: 'Did you hear about the twix bars?'},
        {type:'recieved', text: 'They made the twix bars two times fatter!'},
        {type:'sent', text: 'Um okay.'} 
    ], 

    Bob: [
        {type:'recieved', text: 'Hi do you wanna rent'},
        {type:'recieved', text: 'Hello would you like to rent with me'},
        {type:'recieved', text: 'Helloooooo'},
        {type:'recieved', text: 'H'},
        {type:'recieved', text: 'E'},
        {type:'recieved', text: 'L'},
        {type:'recieved', text: 'L'},
        {type:'recieved', text: 'O'},
        {type:'recieved', text: 'One question...'},
        {type:'recieved', text: 'Whyy so serious???'},
        {type:'recieved', text: 'Those who know *skull emoji*'},
    ]


};


function openChat(userId) {
    const chatHeader = document.getElementById("chatHeader");
    const messagesContainer = document.getElementById("messages");


    chatHeader.innerText = `Chat with ${userId.charAt(0).toUpperCase() + userId.slice(1)}`;

  
    messagesContainer.innerHTML = '';


    const userMessages = messagesData[userId];

    userMessages.forEach(message => {
        const messageElement = document.createElement("p");
        messageElement.classList.add("message", message.type);
        messageElement.innerText = message.text;
        messagesContainer.appendChild(messageElement);
    });
}