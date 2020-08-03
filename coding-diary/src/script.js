const entryForm = document.getElementbyId("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector("entries-nav");



let count = 1;
function addEntryToDom(event) {
    event.preventDefault();

    const entryDiv = document.createElement("div")
    entryDiv.className = "single-entry";
    entryDiv.innerText = entryTextbox[0].value;
    entryDiv.style.display= "none;"
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = "";

    const displayEntryButton= document.createElement("button")
    displayEntryButton.className = "display-entry-button";
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener("click", function () {
        const allEntries = document.querySelectorAll(".single-entry");
        entryDiv.style.display = "block";
        for (let index = 0; index < allEntries.length; index++)
            entryDiv.style.display = "block";
    })
    count++

}

entr1yForm.addEventListener("submit", addEntryToDom)
