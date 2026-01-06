
function mensagem() {
    alert("Obrigado por visitar a TechNova 🚀");
}

function revelar() {
    const elementos = document.querySelectorAll(".reveal");
    elementos.forEach(el => {
        const altura = window.innerHeight;
        const topo = el.getBoundingClientRect().top;
        if (topo < altura - 100) el.classList.add("active");
    });
}

window.addEventListener("scroll", revelar);
window.addEventListener("load", revelar);

// Dark / Light toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) toggle.textContent = "☀️ Light Mode";
    else toggle.textContent = "🌙 Dark Mode";
});
