
function playAudio(){
    window.addEventListener('keydown', function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) {
            return;
        } else if (audio.paused) {
            audio.play(); 
        } else {
            audio.currentTime = 0; 
        }
        key.classList.add('playing');   
    });
}

function removeClass(){
    const keys = document.querySelectorAll('.key');
    keys.forEach(function(key){
        this.addEventListener('transitionend', function(){
            key.classList.remove('playing');
        });
    });
}

function callAllFunctions(){
    playAudio();
    removeClass();
}

callAllFunctions();


//create ability to record and playback audio

//add longer sounds that go together to make songs

//add more sounds to create larger variety

//add visual background effects (palatap clone style);