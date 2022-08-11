window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish-btn");
  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let titleInput = document.getElementById("post-title");
    let categoryInput = document.getElementById("post-category");
    let contentInput = document.getElementById("post-content");

    if (titleInput.value === "" || categoryInput.value === "" || contentInput.value === "") {
      return;
    }

    let ulElement = document.getElementById("review-list");
    let liElement = document.createElement("li");
    liElement.classList.add("rpost");

    let articleEl = document.createElement("article");
    let h4El = document.createElement("h4");
    h4El.innerHTML = titleInput.value;

    let pCategory = document.createElement("p");
    pCategory.innerHTML = `Category: ${categoryInput.value}`;

    let pContent = document.createElement("p");
    pContent.innerHTML = `Content: ${contentInput.value}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(pCategory);
    articleEl.appendChild(pContent);

    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.innerHTML = "Edit";

    let approveBtn = document.createElement("button");
    approveBtn.classList.add("action-btn");
    approveBtn.classList.add("approve");
    approveBtn.innerHTML = "Approve";

    editBtn.addEventListener("click", () => {
      titleInput.value = h4El.innerHTML;
      categoryInput.value = pCategory.innerHTML.slice(10);
      contentInput.value = pContent.innerHTML.slice(9);
      editBtn.parentElement.remove();
    })

    approveBtn.addEventListener("click", () => {
      let publishedUlEl = document.getElementById("published-list");
      let publishLi = document.createElement("li");
      publishLi.classList.add("rpost");
      publishLi.appendChild(articleEl);
      publishedUlEl.appendChild(publishLi);
      approveBtn.parentElement.remove();
    })

    liElement.appendChild(articleEl);
    liElement.appendChild(approveBtn);
    liElement.appendChild(editBtn);
    
    ulElement.appendChild(liElement);

    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";

    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", () => {
      let publishedUlEl = document.getElementById("published-list");
      let child = publishedUlEl.lastElementChild;
      while (child) {
        publishedUlEl.removeChild(child);
        child = publishedUlEl.lastElementChild;
      }
    })
  })
}
