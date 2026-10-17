let leadArray = [];
const inputField = document.getElementById("inputField");
const saveLead = document.getElementById("saveButton");
let unOrdList = document.getElementById("unOrdListofLeads");

saveLead.addEventListener("click", function () {
  leadArray.push(inputField.value);
  console.log(leadArray);

  renderLeads();

  inputField.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < leadArray.length; i++) {
    listItems += `
    <li>
        Lead ${i + 1}:
        <a target = "_blank" href = "${leadArray[i]}">
            ${leadArray[i]}
        </a>
    </li>`;
  }

  unOrdList.innerHTML = listItems;
}
