var monthToLetter = {
	"1": "A", "01": "A", "2": "B", "02": "B", "3": "C", "03": "C", "4": "D",
	"04": "D", "5": "E", "05": "E", "6": "H", "06": "H", "7": "L", "07": "L",
	"8": "M", "08": "M", "9": "P", "09": "P", "10": "R", "11": "S", "12": "T"
}

function findConsonantsAndVowels(name) {
	let consonants = ""
	let vowels = ""
	let vowelsList = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

	for (l of name) {
		if (!vowelsList.includes(l)) {
			consonants += l
		}
		else {
			vowels += l
		}
	}
	return {
		consonants, vowels
	}
}

function getSurname(lname) {
	let surname = ""
	let { consonants, vowels } = findConsonantsAndVowels(lname)
	if (consonants.length >= 3) surname = consonants.slice(0, 3);
	else if (lname.length < 3) {
		surname += consonants
		surname += vowels
		while (surname.length < 3) {
			surname += "X"
		}
	}
	else if (consonants.length < 3) {
		surname = consonants
		let i = 0
		while (surname.length < 3) {
			surname += vowels[i];
			i++;
		}
	}
	return surname.toUpperCase()
}

function getName(fname) {
	const { consonants, vowels } = findConsonantsAndVowels(fname)
	let firstname = ""
	if (consonants.length == 3) firstname = consonants
	else if (fname.length < 3) {
		firstname += consonants
		firstname += vowels
		while (firstname.length < 3) {
			first += "X"
		}
	}
	else if (consonants.length < 3) {
		firstname = consonants
		let i = 0
		while (firstname.length < 3) {
			firstname += vowels[i];
			i++;
		}
	}

	else if (consonants.length > 3) {
		firstname += consonants[0] + consonants[2] + consonants[3]
	}

	return firstname.toUpperCase()
}

function getNumbers(dob, gender) {
	let number = ""
	let [day, month, year] = dob.split("/")
	number += year.slice(-2) + monthToLetter[month]
	day = parseInt(day)
	if (gender == 'male') {
		if (day >= 10) number += day
		else number += "0" + day
	}
	else {
		number += (day + 40)
	}
	return number
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