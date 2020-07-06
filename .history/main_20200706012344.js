const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");
const clearBtn = document.getElementById('clearBtn');
var cantAccess = false;

const wrapper = document.getElementById('wrapper');

const saveBtn = document.getElementById("saveBtn");
const tempPreview = document.getElementById('tempPreview');
const tempBtn =  document.getElementById('tempBtn');
const previewDiv = document.getElementById('preview');
var dragged = null;
var draggedData= null;
var templateList=[];
var movedFrom = "";
(function() {
	var temp = JSON.parse(localStorage.getItem('template'));
	if(temp!= null){
		templateList = temp;
		clearBtn.style.display= 'block';
		
		for( chart in templateList){
			draw(templateList[chart].pos,templateList[chart].data,'chartTemplate-')
		}
		
		
	}
 
 })();
 clearBtn.addEventListener('click',function () {
	 console.log(document.getElementsByClassName('cParent').length);
	 cParent = document.getElementsByClassName('cParent')
	 console.log(cParent[0]);
	 
	 for( i=0; i< cParent.length; i++ )
{
 var childDiv = cParent[i];
 cParent[i].innerHTML=""
 cParent[i].style.backgroundColor = '#FAFBFB'
 console.log(cParent[i]);
 
}
	 clearBtn.style.display = 'none';
	 templateList = []
 })
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
    console.log(cantAccess);
	dragged = item.id;
	draggedData =JSON.parse(item.dataset.chart);
	
    setTimeout(function () {
	  item.style.display = "none";
	}, 0);
	cantAccess = false
  });

  item.addEventListener("dragend", function () {
    setTimeout(function () {
	  draggedItem.style.display = "block";
    //   draggedItem.style.padding = "0";
    //   draggedItem.style.margin = "0";
      draggedItem.style.height = "100%";
      draggedItem.style.width = "100%";
      draggedItem = null;
	}, 0);
	cantAccess = false;
  });
}
  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];
	list.addEventListener("dragstart", function () {
		movedFrom = list.id
	})
    list.addEventListener("dragover", function (e) {
	  e.preventDefault();

	  
	  if(e.target.tagName == 'CANVAS'){
		  cantAccess = true;
	  }
    });

    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.style.backgroundColor = "#FFFFFF";
    });

    list.addEventListener("dragleave", function (e) {
	  this.style.backgroundColor = "#F9FDFF";
	  console.log(e.target.id	);
	  cantAccess = false;
	  
    });

    list.addEventListener("drop", function (e) {
	  console.log("drop");
	  if(cantAccess)
		return false;
	  i = {
		  id:dragged,
		  pos:e.toElement.id,
		  data: draggedData
	  }
	  var result = templateList.filter(obj => {
		return obj.pos === e.toElement.id
	  })
	  console.log(e.toElement.id);
	  clearBtn.style.display= 'block';
	  console.log('templateList:'+result);	
	  setTimeout(function(){
	  if (result.length == 0){
		  console.log('empty');
		  console.log(i);
		  
		  templateList.push(i);
		  console.log('templalist: '+templateList);
		draw(e.toElement.id,draggedData,'chartTemplate-')
		  
		}},100);

		cantAccess = false
		if(movedFrom !=""){
			console.log('movedFrom'+movedFrom);
			
			source = document.getElementById(movedFrom);
			console.log(source);
			
			// source.innerHTML="";
			var sourceObj = templateList.filter(obj => {
				return obj.pos === movedFrom
			  })
			  console.log(sourceObj);
			  
			movedFrom = ""

		}
    //   this.append(draggedItem);
	  this.style.backgroundColor = "#FFFFFF";
    });
  }

