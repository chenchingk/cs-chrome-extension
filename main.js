let videoPlayer = document.querySelectorAll('#player')[1];
console.log(videoPlayer);
let onButton = document.createElement('div');
onButton.className = 'button';
onButton.style.backgroundColor = 'gray';
onButton.style.width = '100%';
onButton.style.height = '100%';

onButton.innerHTML = `<img src="https://cdn2.iconfinder.com/data/icons/office-and-business-round-set-1/64/27-512.png" width="30" height="30"><a href="http://192.168.1.22:8084?vidURL=${document.URL}">Activate Note Mode</a>`;
// let iconImage = document.querySelector('img
onButton.style.display ="flex";
onButton.style.alignItems ="center";
onButton.style.justifyContent ="center";


onButton.style.fontSize = "20px";
onButton.style.backgroundColor = "#ffece6";
onButton.style.textAlign = "center";

onButton.style.border = "thick inset #ff7f50";
onButton.style.boxSizing = "border-box";
onButton.style.padding = "13px";


videoPlayer.after(onButton);
