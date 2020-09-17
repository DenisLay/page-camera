window.onload = function() {
    var video = document.getElementById('video');
    var camera = document.getElementById('camera');
    var allow = document.getElementById('allow');
    var photo = document.getElementById('photo');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var image = document.getElementById('img')

    var cameraButton = document.getElementById('camera-button');
    var closeButton = document.getElementById('close-button');
    
    function hide(block) {
        block.style.display = 'none';
    }

    function display(block) {
        block.style.display = 'flex';
        block.style.flexDirection = 'column';
        block.style.alignItems = 'center';
    }

    function captureMe() {
        
        //context.translate(canvas.width, 0);
        //context.scale(-1, 1);

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var base64dataUrl = canvas.toDataURL('image/png');

        //var imageDataURL = canvas.toDataURL('image/png');

        //image.setAttribute('src', imageDataURL);
    }

    cameraButton.onclick = () => {
        captureMe();
        hide(camera);
        display(photo);
    }

    closeButton.onclick = () => {
        hide(photo);
        display(camera);
    }

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;

    navigator.getUserMedia(
        {video: true},
        function(stream) {
            hide(allow);
            display(camera);
            video.srcObject = stream;
        },
        function(){
            allow.innerHTML = 'зря...';
        }
    )
}
