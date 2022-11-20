function addItem() {
  var inputVl = document.getElementById("input").value;

  var itemWrap = document.getElementById("list");

  var listEl = document.createElement("li");
  var errorEl = document.getElementById("error");

  if (inputVl.length < 4) {
    errorEl.innerText = "3ta harfdan ko'p bo'lishi shart";
    return;
  }

  errorEl.innerText = "";

  listEl.innerText = inputVl;
  listEl.classList.add("item", "item-new");

  itemWrap.appendChild(listEl);
}
