function renderDate() {
  const date = new Date();
  const dateToday =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  document.getElementById("current-date").innerHTML = dateToday.toString();
}

function slider() {
  while (i < 5) {
    setTimeout(() => {}, 3000);
  }
}

function routeTo(page) {
  window.location.href = window.location.href + page;
}

function showNestedNavigator(navName) {
  if (window.innerWidth > 600) {
    document.getElementById("nested-" + navName + "-navigator").style.display =
      "flex";
    document.getElementById(
      "nested-" + navName + "-navigator"
    ).style.flexDirection = "column";
  }
}

function hideNestedNavigator(navName) {
  document.getElementById("nested-" + navName + "-navigator").style.display =
    "none";
}

async function startUpFunctions() {
  renderDate();
}
let i = 1;
window.onload = startUpFunctions;
window.setInterval(function () {
  if (i == 7) i = 1;
  i++;
  let imageSrc = "images/slider" + i.toString() + ".jpeg";
  document.getElementById("slider-img").src = imageSrc;
}, 3000);
