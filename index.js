let leadArray = [];
const inputField = document.getElementById("inputField");
const saveLead = document.getElementById("saveButton");
const tabSaveLead = document.getElementById("tabSaveButton");
const dltLeads = document.getElementById("dltButton");
let unOrdList = document.getElementById("unOrdListofLeads");

const leadsFromLocal = JSON.parse(localStorage.getItem("leadArray"));

if (leadsFromLocal) {
  leadArray = leadsFromLocal;
  render(leadArray);
}

const tabs = [
  {
    url: "https://www.linkedin.com/in/ajiteshgo",
  },
];

tabSaveLead.addEventListener("click", function () {
  leadArray.push(tabs[0].url);
  localStorage.setItem("leadArray", JSON.stringify(leadArray));
  render(leadArray);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
        Lead ${i + 1}:
        <a target = "_blank" href = "${leads[i]}">
            ${leads[i]}
        </a>
    </li>`;
  }

  unOrdList.innerHTML = listItems;
}

saveLead.addEventListener("click", function () {
  leadArray.push(inputField.value);
  inputField.value = "";

  localStorage.setItem("leadArray", JSON.stringify(leadArray));

  render(leadArray);
});

dltLeads.addEventListener("dblclick", function () {
  localStorage.clear();
  leadArray = [];
  render(leadArray);
});
