document.getElementsByClassName('detail-form')[0].addEventListener("submit", function (e) {
	e.preventDefault();
	let data = e.target;
	let [fname, lname, dob, gender] = [data[0].value, data[1].value, data[2].value, data[3].checked ? data[3].value : data[4].value];
	let fiscalCode = ""
	fiscalCode += getSurname(lname)
	fiscalCode += getName(fname)
	fiscalCode += getNumbers(dob, gender)

	document.getElementsByClassName('fiscal-code')[0].innerHTML = fiscalCode
})	