const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const menu = item.dataset.menu;

        if (menu === "total") {
            window.location.href = "..//total/index.html";
        }

        if (menu === "pomodoro") {
            window.location.href = "..//pomodoro/index.html";
        }

        if (menu === "setting") {
            window.location.href = "..//setting/index.html";
        }
    });
});
