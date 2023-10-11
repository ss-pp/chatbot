document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const messageContainer = document.getElementById("conversation-container");

    sendButton.addEventListener("click", () => {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            fetch("/chat/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "X-CSRFToken": getCookie("csrftoken"),
                },
                body: JSON.stringify({ message: userMessage }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    const botResponse = data.bot_response;
                    displayMessage(userMessage, "user-message");
                    displayMessage(botResponse, "bot-message");
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    });

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === name + "=") {
                    cookieValue = decodeURIComponent(
                        cookie.substring(name.length + 1)
                    );
                    break;
                }
            }
        }
        return cookieValue;
    }

    function displayMessage(message, className) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(className);
        messageElement.textContent = message;
    
        
        const messageContainer = document.getElementById("conversation-container");
    
       
        if (messageContainer) {
           
            messageContainer.appendChild(messageElement);
    
            
            messageInput.value = "";
    
            
            messageContainer.scrollTop = messageContainer.scrollHeight;
        } else {
            console.error("Message container not found");
        }
    }
});
