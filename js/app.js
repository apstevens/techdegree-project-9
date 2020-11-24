const divConatiner = document.getElementById("loader");

$(window).load(function() {
    $(".loader").fadeIn("slow");
    setTimeout(removeLoader, 2000);

    html = `
        <div>
            <h1>Welcome to Andy's world!</h1>
        </div>
    `
});

divConatiner.innerHTML = html;

function removeLoader() {
    $(".loader").fadeOut("slow");
}

