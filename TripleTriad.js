const probabilities = ["Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Fire", "Ice", "Ice", "Ice", "Ice", "Ice", "Ice", "Ice", "Lightning", "Lightning", "Lightning", "Lightning", "Lightning", "Lightning", "Lightning", "Earth", "Earth", "Earth", "Earth", "Earth", "Earth", "Earth", "Poison", "Poison", "Poison", "Poison", "Poison", "Poison", "Poison", "Water", "Water", "Water", "Water", "Water", "Water", "Water", "Holy", "Holy", "Holy", "Holy", "Holy", "Holy", "Holy", "Wind", "Wind", "Wind", "Wind", "Wind", "Wind", "Wind", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"]

const colorMapping = {
	"Fire": "FF5757",
	"Ice": "60E2E2",
	"Lightning": "F4C500",
	"Earth": "B76411",
	"Poison": "B483ED",
	"Water": "4E85DD",
	"Holy": "FFE2A1",
	"Wind":  "51E59A",
	"None": "c4c4c4"
}

const randomize = function() {
	const results = [];
	for (let i = 0 ; i < 9 ; i++) {
		const image = document.getElementById(i);
		const element = probabilities[Math.floor(Math.random() * probabilities.length)];
		image.src = `img/${element}.png`;
		image.style.backgroundColor = "#" + colorMapping[element];
	}
}