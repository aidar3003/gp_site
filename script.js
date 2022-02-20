//Modal window appears when a button "Get a consultation" is clicked
let buttons = document.querySelectorAll("*[data-modal-btn]")

for(let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click',function() {
        let name = buttons[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='"+name+"']");
        modal.style.display = "block";
        let close = modal.querySelector(".close-modal-window");
        close.addEventListener('click', function() {
            modal.style.display = "none";
        })
    })
}

window.onclick = function (e) {
    if (e.target.hasAttribute('data-modal-window')) {
        let modals = document.querySelectorAll("*[data-modal-window]");
        for (let i = 0; i<buttons.length; i++) {
            modals[i].style.display = "none";
        }
    }
}

//Replace an image on about.html page
function onImg() {
    this.setAttribute("src","assets/img/about-2.jpg");
}

function outImg() {
    this.setAttribute("src","assets/img/about.jpg");
}