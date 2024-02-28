const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

let count = localStorage.getItem("visitorCount");
if (!count) {
  count = 0;
}
function updateCount() {
    document.getElementById("visitorCount").innerText = `Visitors: ${count}`;
}
window.onload = function () {
    count++;
    localStorage.setItem("visitorCount", count);
    updateCount();
};

const formSubmitMsg = document.getElementById("form-submit-success");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formSubmitMsg.classList.add("show");
    setTimeout(() => {
        formSubmitMsg.classList.remove("show");
    }, 3000);
    form.reset();
})
