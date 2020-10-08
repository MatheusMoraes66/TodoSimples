const inputElement = document.querySelector("input");
const btnCreateElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

btnCreateElement.onclick = (ev) => {
  ev.preventDefault();

  if (inputElement.value) {
    const textElement = document.createElement("span");
    textElement.style =  'margin-right: 20px'
    textElement.innerHTML = inputElement.value;

    const btnRemoveElement = document.createElement("button");
    btnRemoveElement.innerHTML = "Remover";

    const liElement = document.createElement("li");
    liElement.appendChild(textElement);
    liElement.appendChild(btnRemoveElement);

    btnRemoveElement.onclick = () => {
        ulElement.removeChild(liElement)
    }

    ulElement.appendChild(liElement);
    inputElement.value = "";
  }
};
