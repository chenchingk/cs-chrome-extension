let videoPlayer = document.querySelectorAll('#player')[1];

let onButton = document.createElement('div');
onButton.className = 'button';
onButton.style.backgroundColor = 'gray';
onButton.style.width = '100%';
onButton.style.height = '30px';
onButton.innerHTML = '<a href="./index.html">Activate Note Mode</a>';

videoPlayer.after(onButton);

onButton.addEventListener('click', zenMode);
