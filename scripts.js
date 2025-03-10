document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const rocketIcon = document.getElementById('rocketIcon');
    rocketIcon.src = "https://via.placeholder.com/40?text=🎇";
    setTimeout(() => {
        rocketIcon.src = "https://via.placeholder.com/40?text=🚀";
    }, 1500);
}
