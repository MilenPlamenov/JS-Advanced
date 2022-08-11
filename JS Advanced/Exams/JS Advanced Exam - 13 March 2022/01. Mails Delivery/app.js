function solve() {
    let addBtn = document.getElementById("add");
    let resetBtn = document.getElementById("reset");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let recipientInput = document.getElementById("recipientName");
        let titleInput = document.getElementById("title");
        let messageInput = document.getElementById("message");

        if (recipientInput.value === "" || titleInput.value === "" || messageInput.value === "") {
            return;
        }

        resetBtn.addEventListener("click", (e) => {
            e.preventDefault();
            recipientInput.value = "";
            titleInput.value = "";
            messageInput.value = "";
        })

        let ulElement = document.getElementById("list");

        let liElement = document.createElement("li");

        let h4Title = document.createElement("h4");
        let h4Recipient = document.createElement("h4");
        let spanMessage = document.createElement("span");
        let divItem = document.createElement("div");
        divItem.setAttribute("id", "list-action");
        let sendBtn = document.createElement("button");
        sendBtn.setAttribute("type", "submit");
        sendBtn.setAttribute("id", "send");
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("type", "submit");
        deleteBtn.setAttribute("id", "delete");

        h4Title.innerHTML = `Title: ${titleInput.value}`;
        h4Recipient.innerHTML = `Recipient Name: ${recipientInput.value}`;
        spanMessage.innerHTML = messageInput.value;
        sendBtn.innerHTML = "Send";
        deleteBtn.innerHTML = "Delete";

        liElement.appendChild(h4Title);
        liElement.appendChild(h4Recipient);
        liElement.appendChild(spanMessage);

        divItem.appendChild(sendBtn);
        divItem.appendChild(deleteBtn);

        liElement.appendChild(divItem);

        ulElement.appendChild(liElement);

        recipientInput.value = "";
        titleInput.value = "";
        messageInput.value = "";

        sendBtn.addEventListener("click", () => {
            let sentUl = document.getElementsByClassName("sent-list")[0];
            let sentLiEl = document.createElement("li");

            let toSpan = document.createElement("span");
            let messSpan = document.createElement("span");

            let sentDiv = document.createElement("div");
            sentDiv.classList.add("btn");

            let sentDeleteBtn = document.createElement("button");
            sentDeleteBtn.classList.add("delete");
            sentDeleteBtn.setAttribute("type", "submit");
            sentDeleteBtn.innerHTML = "Delete";


            sentDiv.appendChild(sentDeleteBtn);


            toSpan.innerHTML = `To: ${h4Recipient.innerHTML.slice(16)}`;
            messSpan.innerHTML = h4Title.innerHTML;

            
            sentDeleteBtn.addEventListener("click", () => {
                let deletedUl = document.getElementsByClassName("delete-list")[0];
                let sentLiEl = document.createElement("li");
                let toSpan = document.createElement("span");
                let messSpan = document.createElement("span");
                toSpan.innerHTML = `To: ${h4Recipient.innerHTML.slice(16)}`;
                messSpan.innerHTML = h4Title.innerHTML;
    
                sentLiEl.appendChild(toSpan);
                sentLiEl.appendChild(messSpan);
                deletedUl.appendChild(sentLiEl);
                sentDeleteBtn.parentElement.parentElement.remove();
            })

            sentLiEl.appendChild(toSpan);
            sentLiEl.appendChild(messSpan);
            sentLiEl.appendChild(sentDiv);

            sentUl.appendChild(sentLiEl);
            sendBtn.parentElement.parentElement.remove();

        })

        deleteBtn.addEventListener("click", () => {
            let deletedUl = document.getElementsByClassName("delete-list")[0];
            let sentLiEl = document.createElement("li");
            let toSpan = document.createElement("span");
            let messSpan = document.createElement("span");
            toSpan.innerHTML = `To: ${h4Recipient.innerHTML.slice(16)}`;
            messSpan.innerHTML = h4Title.innerHTML;

            sentLiEl.appendChild(toSpan);
            sentLiEl.appendChild(messSpan);
            deletedUl.appendChild(sentLiEl);

            deleteBtn.parentElement.parentElement.remove();
        })

    })
}
solve()