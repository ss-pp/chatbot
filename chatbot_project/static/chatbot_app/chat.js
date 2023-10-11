document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const messageContainer = document.getElementById("conversation-container");

    function sendMessage() {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            displayMessage(userMessage, "user-message", "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp");

            const botMessage = displayMessage("....", "bot-message", "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp");

            setTimeout(() => {
                fetch("/chat/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": getCookie("csrftoken"),
                    },
                    body: JSON.stringify({ message: userMessage }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const botResponse = data.bot_response;

                        if (botMessage) {
                            botMessage.textContent = botResponse;
                        }

                        messageInput.value = "";
                        messageContainer.scrollTop = messageContainer.scrollHeight;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }, 1000);
        }
    }

    sendButton.addEventListener("click", sendMessage);

    messageInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
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

    function displayMessage(message, className, imageUrl) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(className);

        const avatar = document.createElement("img");
        avatar.style.width = "45px";
        avatar.style.height = "100%";
        avatar.alt = "Avatar";
        avatar.src = imageUrl;

        messageElement.appendChild(avatar);

        const messageText = document.createElement("p");
        messageText.textContent = message;

        messageElement.appendChild(messageText);

        messageContainer.appendChild(messageElement);

        const lineBreak = document.createElement("br");
        
        messageContainer.appendChild(lineBreak);

        messageContainer.scrollTop = messageContainer.scrollHeight;

        return messageText;
    }
});
