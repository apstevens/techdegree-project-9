function imageSearch() {
    let input = document.querySelector("#search").value; // Gets value of input field
    let data = document.querySelectorAll(" .gallery a"); // Gets images within the gallery div

    for (let i = 0; i < data.length; i++){
        if (data[i].getAttribute("data-caption").toLowerCase().includes(input.toLowerCase())){
            data[i].style.display = "";
        } else {
            data[i].style.display = "none";
        }
    }
}