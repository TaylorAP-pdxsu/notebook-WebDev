// Add your code here

const userForm = document.getElementById("SignUpForm");

userForm.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  const currForm = event.currentTarget;

  //get the checked radio button
  let radioPronouns = currForm.querySelector(
    "input[name=pref-pronouns]:checked"
  );

  console.log(currForm);
  //if the form is completely filled out then output to console, else output an error
  if (
    currForm.elements.Name.value &&
    currForm.elements.Username.value &&
    currForm.elements.Email.value &&
    currForm.elements.DOB.value &&
    radioPronouns
  ) {
    console.log("Name: " + currForm.elements.Name.value);
    console.log("Username: " + currForm.elements.Username.value);
    console.log("Email: " + currForm.elements.Email.value);
    let dateOfBirth = new Date(currForm.elements.DOB.value);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    //DOB day not outputting correctly
    console.log(
      "Date of Birth: " +
        months[dateOfBirth.getMonth()] +
        " " +
        dateOfBirth.getDay() +
        ", " +
        dateOfBirth.getFullYear()
    );
  } else {
    console.error("Form must be completely filled out!");
  }

  //determine pronouns output based on radio selected
  //determines based on radio's id
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
