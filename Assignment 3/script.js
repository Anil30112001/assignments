

let selectedArrayElements = [];
let selectedItem = [];

function addOneItem() {
  let item1 = document.body.children[0].children[0].children[0].children[0];
  let item1Content =
    document.body.children[0].children[0].children[0].children[0].innerHTML;
  let addElement = document.createElement("li");
  let text = document.createTextNode(item1Content);
  addElement.append(text);
  let root = document.getElementById("item-3");
  root.append(addElement);
  item1.remove();
}

function addAllItems() {
  let itemCount =
    document.body.children[0].children[0].children[0].childElementCount;
  while (1 <= itemCount) {
    let item = document.body.children[0].children[0].children[0].children[0];
    let itemContent = item.innerHTML;
    let addElement = document.createElement("li");
    let text = document.createTextNode(itemContent);
    addElement.append(text);
    let root = document.getElementById("item-3");
    root.append(addElement);
    item.remove();
    itemCount--;
  }
}

function addMultipleItems() {
  let arrayCount = selectedArrayElements.length;
  console.log(arrayCount);
  if (arrayCount >= 1) {
    for (let i = 0; i <= arrayCount - 1; i++) {
      let addElement = document.createElement("li");
      let text = document.createTextNode(selectedArrayElements[i]);
      addElement.append(text);
      let root = document.getElementById("item-3");
      root.append(addElement);
      let item = document.getElementById(selectedItem[i]);
      item.remove();
    }
    selectedArrayElements = [];
    selectedItem = [];
  }
}

function selectedElements(event) {
  event.target.classList.add("selected-elements");
  let targetElement = event.target;
  console.dir(targetElement.innerHTML);
  let enteredValue = targetElement.textContent;
  selectedItem.push(targetElement.id);
  console.log(selectedItem);
  selectedArrayElements.push(enteredValue);
}

