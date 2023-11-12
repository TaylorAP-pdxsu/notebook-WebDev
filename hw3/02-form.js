// Add your code here

const url = "02-form.html";

const userForm = document.getElementById("SignUpForm");

userForm.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  const currForm = event.currentTarget;

  console.log(currForm);
  console.log("Name: " + currForm.elements.Name.value);
  console.log("Username: " + currForm.elements.Username.value);
  console.log("Email: " + currForm.elements.Email.value);
  console.log("Date of Birth: " + currForm.elements.DOB.value);

  let radioPronouns = currForm.querySelector(
    "input[name=pref-pronouns]:checked"
  );
  switch (radioPronouns.id) {
    case "She/her":
      console.log("Preferred Pronouns: She/her");
      break;
    case "He/him":
      console.log("Preferred Pronouns: He/him");
      break;
    case "They/them":
      console.log("Preferred Pronouns: They/them");
      break;
    case "not-say":
      console.log("Preferred Pronouns: Prefer not to say");
      break;
    default:
      break;
  }
}
