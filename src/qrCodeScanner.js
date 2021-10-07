qrcode = window.qrcode;

const video = document.createElement("video");
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

const qrResult = document.getElementById("qr-result");
const outputData = document.getElementById("outputData");
const btnScanQR = document.getElementById("btn-scan-qr");
img = btnScanQR.firstElementChild;

let scanning = false;

let scrollToBottom = true;

let reload = false;

output = [];

function downloadCsv(){
  var hiddenElement = document.createElement('a');  
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(output);  
  hiddenElement.target = '_blank';  
    
  var today = new Date();
  var date = ('0' + today.getDate()).slice(-2)+"-"+('0' + (today.getMonth()+1)).slice(-2)+"-"+today.getFullYear();
  var time = ('0' + today.getHours()).slice(-2) + "-" + ('0' + today.getMinutes()).slice(-2) + "-" + ('0' + today.getSeconds()).slice(-2);
  var dateTime = date+' '+time;
  hiddenElement.download = "Attendance " + dateTime + '.csv';  
  hiddenElement.click();
}

qrcode.callback = res => {
  if (res) {
    if (!output.includes(res) && res.length == 10){
      output.push(res);
      outputData.innerText += res;
      outputData.appendChild(document.createElement("br"));
    }
    
    window.scrollTo(0, document.body.scrollHeight);

    /*scanning = false;

    video.srcObject.getTracks().forEach(track => {
      track.stop();
    });

    qrResult.hidden = false;
    canvasElement.hidden = true;
    btnScanQR.hidden = false;*/

    video.play();
    tick();
    scan();
  }
};

btnScanQR.onclick = () => {
  if (scanning) {
    scanning = false;

    video.srcObject.getTracks().forEach(track => {
      track.stop();
    });

    //qrResult.hidden = false;
    canvasElement.hidden = true;

    img.src = "./images/reload_icon.svg";
    reload = true;

    downloadCsv();

    return;
  }

  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      img.src = "./images/circle_stop_icon.svg";
      scanning = true;
      //qrResult.hidden = true;
      //btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      
      if (reload){
        reload = false;
        output = [];
        outputData.innerText = "";
        scrollToBottom = true;
      }

      scan();
    });
};

function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  scanning && requestAnimationFrame(tick);
}

function scrollToBottomF(){
  window.scrollTo(0, document.body.scrollHeight);
  scrollToBottom = false;
}

function scan() {
  try {
    if (scrollToBottom){
      setTimeout(scrollToBottomF, 1000);
    }
    
    qrcode.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
}
