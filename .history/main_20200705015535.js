const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

// //localStorage
// let itemsArray = localStorage.getItem('items')
//   ? JSON.parse(localStorage.getItem('items'))
//   : []

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))
// //localStorage

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	// const item = list_items[i];
	console.log(list_items[i].id);
	list_items[i].addEventListener('dragstart', function () {
		draggedItem = list_items[i];
		console.log(list_items[i].id);
		
		setTimeout(function () {
			list_items[i].style.display = 'none';
		}, 0)
	});

	list_items[i].addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem.style.padding = '0';
			draggedItem.style.margin = '0';
			draggedItem.style.height = '100%';
			draggedItem.style.width = '100%';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list_items[i].addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list_items[i].addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = '#FFFFFF';
		});

		list_items[i].addEventListener('dragleave', function (e) {
			this.style.backgroundColor = '#F9FDFF';
		});

		list_items[i].addEventListener('drop', function (e) {
			console.log('drop');
			console.log(item);
			
			this.append(draggedItem);
			this.style.backgroundColor = '#FFFFFF';
		});
	}
}