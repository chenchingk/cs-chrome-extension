let videoPlayer = document.querySelectorAll('#player')[1];
console.log(videoPlayer);
let onButton = document.createElement('div');
onButton.className = 'button';
onButton.style.backgroundColor = 'gray';
onButton.style.width = '100%';
onButton.style.height = '30px';
onButton.innerHTML = `<a href="http://192.168.0.26:8080?vidURL=${document.URL}">Activate Note Mode</a>`;

videoPlayer.after(onButton);
