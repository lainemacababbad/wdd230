const input = document.querySelector('#favchap');
const button = document.querySelector('submit');
const list = document.querySelector('#list');

button.addEventListener("click", () => {
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block,
    // otherwise provide a message or at least do nothing and return the .focus() to the input field.
    if (input.value.trim() !== "") {
        // create a li element
        const listItem = document.createElement("li");

        // create a delete button
        const deleteButton = document.createElement("button");

        // populate the li elements textContent or innerHTML with the input value
        listItem.textContent = input.value;

        // populate the button textContent with a ❌
        deleteButton.textContent = "❌";

        // append the li element with the delete button
        listItem.append(deleteButton);

        // append the li element to the unordered list in your HTML
        list.append(listItem);

        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener("click", function () {
            list.removeChild(listItem);
            input.focus();
        });

        // send the focus to the input element
        input.focus();

        // Clear input value
        input.value = "";
    }
});
