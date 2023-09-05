let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

//We call the sendMsgToChatbot function by providing onclick attribute
function sendMsgToChatbot() {
    //Declare userMsg as the userInputEl input value
    let userMsg = userInputEl.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // Creating and appending the span element
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsgList;
    msgContainerEl.appendChild(chatbotMsgEl);

    //Empty the userInputEl input value
    userInputEl.value = "";
    //Call the getReplyFromChatbot()
    getReplyFromChatbot(userInputEl.value);
}

//getReplyFromChatbot() function gets called in the sendMsgToChatbot() function
function getReplyFromChatbot() {
    //Decalring the array length as noOfChatbotMsgs
    let noOfChatbotMsgs = chatbotMsgList.length;

    //We get the random array item from here
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    // Creating and appending the container element div
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // Creating and appending the span element
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}