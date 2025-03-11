// 动态加载底部信息
fetch("footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);

// 雪花特效
document.addEventListener("DOMContentLoaded", function () {
    const snowflakes = 6; // 雪花数量 6月飞雪
    const body = document.body;

    for (let i = 0; i < snowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "❄";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = (Math.random() * 8 + 9) + "s";
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 2.5 + 1.5) + "em";
        body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
            body.appendChild(snowflake);
        }, Math.random() * 5000 + 2000);
    }
});

// 返回顶部功能
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const rocketIcon = document.getElementById('rocketIcon');
    if (rocketIcon) {
        rocketIcon.textContent = "🎇"; // 更换为烟花表情
        setTimeout(() => {
            rocketIcon.textContent = "🚀"; // 恢复火箭表情
        }, 1500);
    }
}