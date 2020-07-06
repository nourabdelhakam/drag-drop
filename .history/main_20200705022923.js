const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

// //localStorage
const saveBtn = document.getElementById("saveBtn");
const tempPreview = document.getElementById('tempPreview');
const tempBtn =  document.getElementById('tempBtn');
saveBtn.addEventListener("click", function () {
  var template = localStorage.getItem("template");
  console.log(template);
  
  if (template)
    var c = confirm("There is a saved template, Do you want to overwrite it?");


  if (c == true || !template) {
	  var wrapper = document.getElementById('wrapper').innerHTML;
	let itemsArray = JSON.stringify(wrapper);
	localStorage.setItem("template", itemsArray);
	tempBtn.style.display = "block"

	// tempPreview.innerHTML = wrapper;
  }
});

// const data = JSON.parse(localStorage.getItem('items'))
// //localStorage

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];
  console.log(item.id);
  item.addEventListener("dragstart", function () {
    draggedItem = item;
    console.log(item.id);

    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function () {
    setTimeout(function () {
      draggedItem.style.display = "block";
      draggedItem.style.padding = "0";
      draggedItem.style.margin = "0";
      draggedItem.style.height = "100%";
      draggedItem.style.width = "100%";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.style.backgroundColor = "#FFFFFF";
    });

    list.addEventListener("dragleave", function (e) {
      this.style.backgroundColor = "#F9FDFF";
    });

    list.addEventListener("drop", function (e) {
      console.log("drop");
      console.log(item);

      this.append(draggedItem);
      this.style.backgroundColor = "#FFFFFF";
    });
  }
}
