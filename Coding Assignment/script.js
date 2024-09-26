// Variables to track the table and form elements
const table = document.querySelector("table");
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

let selectedRow = null;

// Create a new entry when "Create" is clicked
document
	.querySelector('img[alt="Book icon"]')
	.addEventListener("click", createEntry);

function createEntry() {
	// Get values from the form
	const name = nameInput.value;
	const phone = phoneInput.value;
	const email = emailInput.value;

	// Check if fields are filled
	if (!name || !phone || !email) {
		alert("All fields are required!");
		return;
	}

	if (selectedRow === null) {
		// Add a new row if no row is selected for update
		const newRow = table.insertRow();
		newRow.innerHTML = `
        <td>${table.rows.length - 1}</td>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td><button class="edit">Edit</button> <button class="delete">Delete</button></td>
      `;

		// Add event listeners to the edit and delete buttons
		newRow.querySelector(".edit").addEventListener("click", function () {
			editEntry(newRow);
		});
		newRow.querySelector(".delete").addEventListener("click", function () {
			deleteEntry(newRow);
		});

		// Clear the form
		form.reset();
	} else {
		// Update the selected row
		selectedRow.cells[1].innerText = name;
		selectedRow.cells[2].innerText = phone;
		selectedRow.cells[3].innerText = email;

		// Clear the form and reset selection
		form.reset();
		selectedRow = null;
	}
}

// Edit an existing entry
function editEntry(row) {
	selectedRow = row;
	nameInput.value = row.cells[1].innerText;
	phoneInput.value = row.cells[2].innerText;
	emailInput.value = row.cells[3].innerText;
}

// Delete an entry
function deleteEntry(row) {
	row.remove();
}
