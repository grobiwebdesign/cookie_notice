const cookieContainer = document.querySelector(".cookie_banner");
const cookieAccept = document.querySelector(".accept_btn");

cookieAccept.addEventListener("click", () => {
	cookieContainer.classList.remove("active");
	localStorage.setItem("cookieContainerVisible", "true")
});

setTimeout(() => {
	if(!localStorage.getItem("cookieContainerVisible"))
	cookieContainer.classList.add("active");

}, 1000);


