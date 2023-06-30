const openWebcamButton = document.getElementById('openWebcamButton');
const closeWebcamButton = document.getElementById('closeWebcamButton');
const webcamVideo = document.getElementById('webcamVideo');
let stream;

openWebcamButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((videoStream) => {
      webcamVideo.srcObject = videoStream;
      stream = videoStream;
      
      closeWebcamButton.disabled = false;
    })
    .catch((error) => {
      console.log('Error accessing webcam:', error);
    });
});

closeWebcamButton.addEventListener('click', () => {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }
  
  webcamVideo.srcObject = null;
  stream = null;
  
  closeWebcamButton.disabled = true;
  
  
  alert('Verified!');
});
