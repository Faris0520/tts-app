let speecc = new SpeechSynthesisUtterance();

document.querySelector('button').addEventListener('click', () => {
    speecc.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speecc);
    });

let voices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speecc.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener('change', () => {
    speecc.voice = voices[voiceSelect.value];
});