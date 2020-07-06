const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

// //localStorage
var wrapper = document.getElementById('wrapper');
const saveBtn = document.getElementById("saveBtn");
const tempPreview = document.getElementById('tempPreview');
const tempBtn =  document.getElementById('tempBtn');
const previewDiv = document.getElementById('preview');
var dragged = null;
var draggedData= null;
var templateList=[];
(function() {
	var temp = JSON.parse(localStorage.getItem('template'));
	if(temp!= null){
		templateList = temp;
		for( chart in templateList){
			draw(templateList[chart].pos,templateList[chart].pos,'chartTemplate-')
		}
		
		
	}
 
 })();
saveBtn.addEventListener("click", function () {
  var template = localStorage.getItem("template");
  console.log(template);
	
  if (template)
    var c = confirm("There is a saved template, Do you want to overwrite it?");


  if (c == true || !template) {
	  
	let itemsArray = JSON.stringify(templateList);
	localStorage.setItem("template", itemsArray);
	tempBtn.style.display = "block"

	// tempPreview.innerHTML = wrapper;
  }
});



 tempBtn.addEventListener('click',function(){
	itemsArray = JSON.parse(localStorage.getItem('template'));
	previewDiv.innerHTML = itemsArray;
})

// tempPreview.addEventListener('click',function(){
// 	itemsArray = JSON.parse(localStorage.getItem('template'));
// 	 wrapper.innerHTML = itemsArray ;
// })

// const data = JSON.parse(localStorage.getItem('items'))
// //localStorage

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];
  console.log(item.id);
  item.addEventListener("dragstart", function () {
    draggedItem = item;
    console.log(item);
	dragged = item.id;
	draggedData =JSON.parse(item.dataset.chart);
	
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
}
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
	  console.log(e.target.id	);
	  
    });

    list.addEventListener("drop", function (e) {
      console.log("drop");
	  i = {
		  id:dragged,
		  pos:e.toElement.id,
		  data: draggedData
	  }
	  var result = templateList.filter(obj => {
		return obj.pos === e.toElement.id
	  })
	  console.log(e.toElement.id);
	  
	  console.log('templateList:'+result);	
	  setTimeout(function(){
	  if (result.length == 0){
		  console.log('empty');
		  console.log(i);
		  
		  templateList.push(i);
		  console.log('templalist: '+templateList);
		draw(e.toElement.id,draggedData,'chartTemplate-')
		  
		}},100);

		
    //   this.append(draggedItem);
	  this.style.backgroundColor = "#FFFFFF";
    });
  }

