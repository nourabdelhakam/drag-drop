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
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
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

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = '#F9FDFF';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = '#FFFFFF';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			setTimeout(function () {
				item.style.display = 'block';
				item.style.padding = '0';
				item.style.margin = '0';
				item.style.height = '100%';
				item.style.width = '100%';
				// item = null;
			}, 0);
			this.append(draggedItem);
			this.style.backgroundColor = '#FFFFFF';
		});
	}
}