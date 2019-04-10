const input = document.getElementById("toDoInput");
		const list = document.getElementById("toDoListOl")

		//F-ja: Kada kliknemo na dugme da uzme input od korisnika
		function toDoList() {
			//pravi textNode od unesenih podataka
			const text = document.createTextNode(input.value);

			// pravi novi zapis u listi <li> (list item)
			const newItem = document.createElement("li");

			// dodaje podatke korisnika na <li>
			newItem.appendChild(text);
			// Resetuje vrednost inputa
			input.value = '';
			// Fokusira input
			input.focus();

			// pridodaje <li> na <ol> koji je smesten u varijabli list
			list.appendChild(newItem);
		}

		input.addEventListener('keydown', function(event) {
			if (event.key === 'Enter') {
				event.preventDefault();
				toDoList();
			}
		})