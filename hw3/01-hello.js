// Add your code here

//Handle the profile picture
let profileImage = document.createElement("img");
profileImage.src = "webdev_face.png";
profileImage.alt =
  "Portrait style picture of Taylor Pettingill, the author of this page";
profileImage.width = "302";
profileImage.height = "442";

document.body.append(profileImage);

//Handle the profile bio
let profileBio = document.createElement("p");
profileBio.className = "bio";
let profileText =
  document.createTextNode(`My name is Taylor Pettingill. I am a Computer Science student and plan
to graduate at the end of this school year. My favorite place to visit
is Sweden, which I have been to multiple times. Some of my family
members live in Stockholm and my mormor (grandmother in Swedish) lives
in a town called Borlänge. I am really excited to learn about web
development and, in particular, HTML and Javascript.`);

profileBio.append(profileText);
document.body.append(profileBio);
