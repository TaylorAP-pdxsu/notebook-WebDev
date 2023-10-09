window.addEventListener("load", loadPage);
window.addEventListener("load", printBio);

function loadPage(event) {
  console.log("The page has now loaded.");
}

function printBio(event) {
  console.log(
    "My name is Taylor Pettingill. I am a Computer Science student and plan to graduate at the end of this school year."
  );
}
