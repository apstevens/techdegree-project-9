function overlay() {
  const overlay =  document.getElementById('overlay');

  overlay.style.display = 'none';
}

setTimeout(overlay, 6000);

let i = 0;
let text = 'Predict the future by to creating it!';
let speed = 50;


window.onload = function slideShow() {
  if (i < text.length) {
    document.getElementById('quote').innerHTML += text.charAt(i);
    i++;
    setTimeout( slideShow, speed );
  }


}