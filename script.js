//smooth scrolling

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src; 

}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
