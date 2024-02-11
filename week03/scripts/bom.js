const input = document.querySelector("#favChap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

const chaptersArray = getChapterList() || [];

function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = item;
  deleteButton.textContent = "❌";

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
    deleteChapter(li.textContent);
    input.focus();
  });

  li.appendChild(deleteButton);

  list.appendChild(li);
}

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function deleteChapter(chapter) {
    // step 1
    chapter = chapter.slice(0, chapter.length - 1);

    // step 2
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // step 3
    setChapterList();
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function setChapterList() {
  localStorage.setItem("myFavBomList", JSON.stringify(chaptersArray));
}

button.addEventListener("click", () => {
  // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block,
  // otherwise provide a message or at least do nothing and return the .focus() to the input field.

  if (input.value) {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();

    // Clear input value
    input.value = "";
  }
});
