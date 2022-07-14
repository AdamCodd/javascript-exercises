const a = "bottles of beer";
const c = "Take one down pass it around";
const d = "No more bottles of beer on the wall, no more bottles of beer.\nWe've taken them down and passe them around; now we're drunk and passed out!";

for (i = 99; i >= 0; i--) {
	if (i === 0) {
	 console.log(d);
     break;
    }
	console.log(i + " " + a + " on the walls");
	console.log(i + " " + a);
	console.log(c);
}
