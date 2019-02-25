(() => {
	//create a variable stack and grab all of the DOM elements from the page => SET UP
	let aud = 		document.querySelector('audio'),
		play = 		document.querySelector('#playButton'),
		pause = 	document.querySelector('#pauseButton'),
		rewind = 	document.querySelector('#rewindButton');

	//create functions
	function playAudio() {
		aud.play();
	}

	function pauseAudio() {
		aud.pause(true);
	}

	function rewindAudio() {
		aud.currentTime = 0; //go back to o
	}

	//add event handling
	play.addEventListener("click", playAudio);
	pause.addEventListener("click", pauseAudio);
	rewind.addEventListener("click", rewindAudio);
})();