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
    ], 

    Levi: [
        {type:'recieved', text: 'Hi Im a very neat person, would you like to rent with me?'},
        {type:'sent', text: 'Sorry I already have a roommate now!'}
    ], 

    Jane: [
        {type:'recieved', text: 'Hi do you wanna rent, we matched very well!'},
        {type:'sent', text: 'Yeah sure, what year are you?'},
        {type:'recieved', text: 'Im second year in cs!'},
        {type:'sent', text: 'Oh wow me too!'},
        {type:'sent', text: 'Do you wanna meet in the nest tomrrow at 6?'},
        {type:'recieved', text: 'yeah sure!'},

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

function sendMessage() {
    const messageText = document.getElementById("messageText").value.trim();
    if (messageText === "") return; 

    const chatHeader = document.getElementById("chatHeader").innerText;
    const userId = chatHeader.replace('Chat with ', '').toLowerCase(); 


    if (messagesData[userId]) {
        messagesData[userId].push({ type: 'sent', text: messageText });
    } else {
        messagesData[userId] = [{ type: 'sent', text: messageText }];
    }


    const messagesContainer = document.getElementById("messages");
    const newMessageElement = document.createElement("p");
    newMessageElement.classList.add("message", "sent");
    newMessageElement.innerText = messageText;
    messagesContainer.appendChild(newMessageElement);


    document.getElementById("messageText").value = '';

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


