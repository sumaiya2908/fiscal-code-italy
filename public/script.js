var monthToLetter = {
	"1": "A", "01": "A", "2": "B", "02": "B", "3": "C", "03": "C", "4": "D",
	"04": "D", "5": "E", "05": "E", "6": "H", "06": "H", "7": "L", "07": "L",
	"8": "M", "08": "M", "9": "P", "09": "P", "10": "R", "11": "S", "12": "T"
}
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