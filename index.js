function scuberGreetingForFeet(addSomeValue) {
  // Write your code here!
  if (addSomeValue <= 400) {
    return "This one is on me!";
  } else if (addSomeValue > 400 && addSomeValue <= 2000) {
    return "That will be twenty bucks.";
  } else if (addSomeValue > 2000 && addSomeValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
function ternaryCheckCity(string) {
  // Write your code here!
  if (string === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
