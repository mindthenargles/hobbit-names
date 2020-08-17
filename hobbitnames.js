let firstName = ["Abelia", "Adalrida", "Adamanta", "Altheda", "Amalina", 
	"Amaranth", "Amaryllis", "Amber", "Amethyst", "Angelica", "Asphodel",
	"Belba", "Bell", "Belladonna", "Beryl", "Berylla", "Camellia", "Carla",
	"Celandine", "Chica", "Clematis", "Columbine", "Cora", "Daisy", "Diamond",
	"Donnamira", "Dora", "Eglantine", "Elodie", "Esmeralda", "Estella",
	"Flora", "Forsythia", "Garnet", "Gelvira", "Gilly", "Hanna", "Hazel", 
	"Hilda", "Holly", "Hyacinth", "Iris", "Lavender", "Laura", "Lily", 
	"Linda", "Lobelia", "Malva", "Mara", "Marigold", "May", "Melantha",
	"Melilot", "Menegilda", "Mentha", "Mimosa", "Mirabella", "Myrtle", 
	"Narcissa", "Nerida", "Nina", "Nora", "Pansy", "Pearl", "Peony", 
	"Pervinca", "Petula", "Petunia", "Pimpernel", "Poppy", "Posy", "Primrose",
	"Primula", "Prisca", "Prunella", "Rosamunda", "Rosa", "Rosabel", "Rosalind",
	"Rose", "Rowan", "Ruby", "Salvia", "Tansy", "Tanta", "Verbena", "Violet",
	"Wisteria", "Adalgrim", "Adelard", "Althedas", "Amalin", "Andwise", 
	"Anson", "Balbo", "Bandobras", "Berilac", "Bilbo", "Bingo", "Blanco",
	"Bodo", "Botho", "Bowman", "Bungo", "Carl", "Cotman", "Dinonas", "Doderic",
	"Dodinas", "Drogo", "Dudo", "Emery", "Erling", "Everard", "Falco", 
	"Fastolph", "Fastred", "Ferdibrand", "Ferdinand", "Ferumbras", "Filibert",
	"Flambard", "Folco", "Fortinbras", "Fosco", "Fredegar", "Frodo", "Garsendis",
	"Gorbadoc", "Gorbulas", "Gorhendad", "Gormadoc", "Griffo", "Gundabald",
	"Halberas", "Halfred", "Hamfast", "Hamson", "Harding", "Hending", 
	"Hildibrand", "Hildifons", "Hildigard", "Hildigrim", "Hob", "Hobson", 
	"Holfast", "Holman", "Hugo", "Ilberic", "Isembard", "Isembold", "Isemgrim",
	"Isengar", "Isumbras", "Largo", "Longo", "Lotho", "Madoc", "Marcho",
	"Marmadas", "Marmadoc", "Marroc", "Meriadoc", "Merimac", "Merimas", "Milo",
	"Minto", "Moro", "Mosco", "Mungo", "Nob", "Odagar", "Odo", "Odovacar",
	"Olo", "Orgulas", "Osco", "Otho", "Paladin", "Pancho", "Peregrin", "Pogo",
	"Polo", "Ponto", "Porro", "Porto", "Posco", "Potho", "Reginard", "Robin",
	"Rorimac", "Rosco", "Rudi", "Rudibrand", "Rudigar", "Rufus", "Sadoc",
	"Samwise", "Sancho", "Saradoc", "Seredic", "Sigi", "Sigismond", "Ted",
	"Tobold", "Togo", "Tolman", "Vardaman", "Willie", "Wilbur", "Wilcome",
	"Wilibald", "Wilicar", "Wiseman"];

let family = ["Baggins", "Banks", "Boffin", "Bolger", "Bracegirdle", "Brandybuck",
	"Brockhouse", "Brown", "Brownlock", "Bunce", "Burrows", "Chubb", "Cotton",
	"Fallohide", "Farmer", "Gamgee", "Goldworthy", "Goodbody", "Goodchild",
	"Goodenough", "Goold", "Granger", "Greenhand", "Grubb", "Harfoot", 
	"Hayward", "Headstrong", "Hornblower", "Hogg", "Longhole", "Maggot", 
	"Miller", "Noakes", "Overhill", "Pott", "Proudfoot", "Puddifoot", "Roper",
	"Rumble", "Sackville", "Sandheaver", "Sandyman", "Smallburrow", "Stoor",
	"Took", "Tunnelly", "Twofoot", "Underhill", "Whitfoot", "Wood"];

let loc = ["Bindbale Wood", "Brandy Hall", "Breredon", "Bridgefields",
	"the Brockbores", "Buck Hill", "Buckland", "Bucklebury", "Budgeford",
	"Bywater", "Crickhollow", "Deephallow", "Dwaling", "Eastfarthing", 
	"the Far Downs", "the Fox Downs", "Frogmorton", "Gamwich", "Girdley Island",
	"Great Smials", "the Green Hills", "Greenfields", "Greenholm", "Grindwall",
	"Hardbottle", "Haysend", "Hobbiton", "Little Delving", "Long Cleeve",
	"Longbottom", "the Marish", "Michel Delving", "the Mithe", "Needlehole",
	"Newbury", "Nobottle", "Northfarthing", "Oatbarton", "Old Grange", 
	"Overbourne Marsh", "Overhill", "Pincup", "Rushey", "Rushock Bog", 
	"Sackville", "Sarn Ford", "Scary", "Southfarthing", "Standelf", "Stock",
	"Tighfield", "Tookbank", "Tookland", "Tuckborough", "Waymeet", "Westfarthing",
	"the White Downs", "Whitfurrows", "Whitwell", "Willowbottom", "Windlereach",
	"Woodhall", "Woody End", "Yale", "Archet", "Bree", "Bree-hill", "Chetwood",
	"Combe", "Staddle"];

function chooseRandInt(range) {
	//return random integer in range == number of formats
	let randInt = Math.floor((Math.random() * range));
	return randInt;
};

function givenFamily() {
	let first = firstName[chooseRandInt(firstName.length)];
	let last = family[chooseRandInt(family.length)];
	return first + " " + last;
};

function givenFamLoc() {
	let first = firstName[chooseRandInt(firstName.length)];
	let last = family[chooseRandInt(family.length)];
	let locative = loc[chooseRandInt(loc.length)];
	return first + " " + last + " of " + locative;
};

function display(name) {
	document.getElementById("name").textContent = name;
};

function generate() {
	let format = chooseRandInt(3);
	//integer designates function
	let name = "";
	switch(format) {
		case 0: 
			name = givenFamLoc();
			break;
		case 1: 
		case 2: 
			name = givenFamily();
			break;
	};
	//display string
	display(name);
};

