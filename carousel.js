const videoBox1 = document.querySelector('.video1')
const videoBox2 = document.querySelector('.video2')
const videoBox3 = document.querySelector('.video3')

videoBox1.querySelector('video').onended = () => {
    videoBox1.style.display = "none"
    videoBox2.style.display = "block";
    videoBox2.querySelector('video').play();
}
videoBox2.querySelector('video').onended = () => {
    videoBox2.style.display = "none"
    videoBox3.style.display = "block";
    videoBox3.querySelector('video').play();
}
videoBox3.querySelector('video').onended = () => {
    videoBox3.style.display = "none"
    videoBox1.style.display = "block";
    videoBox1.querySelector('video').play();
}