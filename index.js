let leadArray = [];
const inputField = document.getElementById("inputField");
const saveLead = document.getElementById("saveButton");
const urlSaveLead = document.getElementById("urlSaveButton");
const dltLeads = document.getElementById("dltButton");
let unOrdList = document.getElementById("unOrdListofLeads");

const leadsFromLocal = JSON.parse(localStorage.getItem("leadArray"));

if (leadsFromLocal) {
  leadArray = leadsFromLocal;
  renderLeads();
}

saveLead.addEventListener("click", function () {
  leadArray.push(inputField.value);
  inputField.value = "";

  localStorage.setItem("leadArray", JSON.stringify(leadArray));

  renderLeads();

  console.log(localStorage.getItem("leadArray"));
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

dltLeads.addEventListener("dblclick", function () {
  localStorage.clear();
  leadArray = [];
  renderLeads();
});
