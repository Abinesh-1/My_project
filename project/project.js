// const appsIcon = document.getElementById("apps-icon");
// const appDropdown = document.getElementById("app-dropdown");

// appsIcon.addEventListener("click", () => {
//   appDropdown.style.display = appDropdown.style.display === "block" ? "none" : "block";
// });

const accountBtn = document.getElementById("accountBtn");
const accountPanel = document.getElementById("accountPanel");
const select = document.querySelector('.app-launcher');


accountBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  accountPanel.style.display = accountPanel.style.display === "none" ? "block" : "none";
});


document.addEventListener("click", () => {
  accountPanel.style.display = "none";
});

const appIconBtn = document.getElementById('appIconBtn');
const appLauncherPanel = document.getElementById('appLauncherPanel');


appIconBtn.addEventListener('click', function(event) {

    event.preventDefault();

    if (appLauncherPanel.style.display === 'none') {
        appLauncherPanel.style.display = 'block';
    } else {
        appLauncherPanel.style.display = 'none';
    }
});