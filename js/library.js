class Book {
	constructor(name, author, pages) {
		(this.name = name), (this.author = author), (this.pages = pages);
	}
}

function createCard(title, pages, author) {
	let book = new Book(title, author, pages);

	let card = document.createElement('div');
	card.setAttribute('id', 'book-card');

	let newCard = document.createElement('div');

	if (document.getElementById('book-title').value === '' || document.getElementById('book-author').value === '') {
		alert('Please enter required book information!');
	} else {
		newCard.innerHTML = `<p>Title: ${book.name}</p>
                       <p>Author: ${book.author}</p>
                       <p>Pages: ${book.pages}</p>`;
		card.appendChild(newCard);

		let button = document.createElement('button');
		button.textContent = 'Remove';
		button.className = 'delete-btn';
		card.appendChild(button);

		button.addEventListener('click', (event) => {
			event.target.parentNode.remove();
		});

		let cardGrid = document.querySelector('.cards');
		cardGrid.appendChild(card);
	}
}

function runProgram() {
	let submit = document.querySelector('.input-submit');
	submit.addEventListener('click', () => {
		let titleValue = document.getElementById('book-title').value;
		let authorValue = document.getElementById('book-author').value;
		let pageValue = document.getElementById('book-pages').value;
		createCard(titleValue, pageValue, authorValue);
		clearField();
	});
}

function clearField() {
	document.getElementById('book-title').value = '';
	document.getElementById('book-author').value = '';
	document.getElementById('book-pages').value = '';
}

// function createDeleteBtn() {
// 	let button = document.createElement('button');
// 	button.textContent = 'Remove';
// 	button.className = 'delete-btn';
// }

runProgram();
