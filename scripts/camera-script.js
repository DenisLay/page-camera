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

    function displayPhoto() {
        photo.style.display = 'flex';
        photo.style.flexDirection = 'column';
        photo.style.alignItems = 'center';
        photo.style.justifyContent = 'center';
        console.log(photo.style.width);
        console.log(photo.style.height);
        canvas.style.width = video.videoWidth;
        canvas.style.height = video.videoHeight;
    }

    function captureMe() {

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.translate(canvas.width, 0);
        context.scale(-1, 1);

        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    }

    cameraButton.onclick = () => {
        //photo.style.width = video.videoWidth;
        //photo.style.height = video.videoHeight;
        captureMe();
        hide(camera);
        displayPhoto();
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
