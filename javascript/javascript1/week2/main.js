// Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName) {
    switch (gender) {
      case "male":
        return "Lord " + firstname + " " + surname;
        break;
      case "female":
        return "Lady " + firstname + " " + surname;
        break;
      default:
        return firstname + " " + surname;
    }
  }
  return firstname + " " + surname;
}

const fullname1 = getFullname("Benjamin", "Hughes", true, "male");
const fullname2 = getFullname("Line", "Hansen", true, "female");

console.log(fullname1 + "\n" + fullname2);
