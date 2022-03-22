
var divlength = document.querySelectorAll('.song').length;
console.log(divlength);

for(var i=0; i<divlength; i++){

var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);

}

var song1 = new Audio();
song1.src = "mp3/mp26.mp3";

var song2 = new Audio();
song2.src = "mp3/mp27.mp3";

var song3 = new Audio();
song3.src = "mp3/mp28.mp3";

var song4 = new Audio();
song4.src = "mp3/mp29.mp3";

var song5 = new Audio();
song5.src = "mp3/mp30.mp3";

var song6 = new Audio();
song6.src = "mp3/mp31.mp3";

var song7 = new Audio();
song7.src = "mp3/mp32.mp3";

var song8 = new Audio();
song8.src = "mp3/mp8.mp3";

var song9 = new Audio();
song9.src = "mp3/mp9.mp3";

var song10 = new Audio();
song10.src = "mp3/mp10.mp3";

var song11 = new Audio();
song11.src = "mp3/mp11.mp3";

var song12 = new Audio();
song12.src = "mp3/mp12.mp3";

var song13 = new Audio();
song13.src = "mp3/mp13.mp3";

var song14 = new Audio();
song14.src = "mp3/mp14.mp3";

var song15 = new Audio();
song15.src = "mp3/mp25.mp3";

var song16 = new Audio();
song16.src = "mp3/mp16.mp3";

var song17 = new Audio();
song17.src = "mp3/mp24.mp3";

var song18 = new Audio();
song18.src = "mp3/mp21.mp3";

var song19 = new Audio();
song19.src = "mp3/mp22.mp3";

var song20 = new Audio();
song20.src = "mp3/mp23.mp3";

function playsong(){
	var songId = this.innerHTML;
	console.log(songId);
	 switch(songId){
	 	case "a":
	 	song1.play();
	 	break;
	 	case "b":
	 	song2.play();
	 	break;
	 	case "c":
	 	song3.play();
	 	break;
	 	case "d":
	 	song4.play();
	 	break;
	 	case "e":
	 	song5.play();
	 	break;
	 	case "f":
	 	song6.play();
	 	break;
	 	case "g":
	 	song7.play();
	 	break;
	 	case "h":
	 	song8.play();
	 	break;
	 	case "i":
	 	song9.play();
	 	break;
	 	case "j":
	 	song10.play();
	 	break;
	 	case "k":
	 	song11.play();
	 	break;
	 	case "l":
	 	song12.play();
	 	break;
	 	case "m":
	 	song13.play();
	 	break;
	 	case "n":
	 	song14.play();
	 	break;
	 	case "o":
	 	song15.play();
	 	break;
	 	case "p":
	 	song16.play();
	 	break;
	 	case "q":
	 	song17.play();
	 	break;
	 	case "r":
	 	song18.play();
	 	break;
	 	case "s":
	 	song19.play();
	 	break;
	 	case "t":
	 	song20.play();
	 	break;

	 	default:
	 	console.log("invalid input");
	 	break; 
	 }
}
function pausesong(){
	var songId = this.innerHTML;
	console.log(songId);
	switch(songId){
	 	case "a":
	 	song1.pause();
	 	break;
	 	case "b":
	 	song2.pause();
	 	break;
	 	case "c":
	 	song3.pause();
	 	break;
	 	case "d":
	 	song4.pause();
	 	break;
	 	case "e":
	 	song5.pause();
	 	break;
	 	case "f":
	 	song6.pause();
	 	break;
	 	case "g":
	 	song7.pause();
	 	break;
	 	case "h":
	 	song8.pause();
	 	break;
	 	case "i":
	 	song9.pause();
	 	break;
	 	case "j":
	 	song10.pause();
	 	break;
	 	case "k":
	 	song11.pause();
	 	break;
	 	case "l":
	 	song12.pause();
	 	break;
	 	case "m":
	 	song13.pause();
	 	break;
	 	case "n":
	 	song14.pause();
	 	break;
	 	case "o":
	 	song15.pause();
	 	break;
	 	case "p":
	 	song16.pause();
	 	break;
	 	case "q":
	 	song17.pause();
	 	break;
	 	case "r":
	 	song18.pause();
	 	break;
	 	case "s":
	 	song19.pause();
	 	break;
	 	case "t":
	 	song20.pause();
	 	break;

	 	default:
	 	console.log("invalid input");
	 	break; 
	 }
}