let userProfile = {
  fullName: prompt("Enter your full name: "),
  age: parseInt(prompt("Enter your age: ")),
  favoriteNumber: parseInt(prompt("Enter your favorite number: ")),
  favoriteColors: []
};

let keepGoing = true;

while (keepGoing) {
  let color = prompt("Enter a favorite color (or type 'done' to finish): ");

  if (color.toLowerCase() === 'done') {
    keepGoing = false;
  } else {
    userProfile.favoriteColors.push(color);
  }
}

console.log(userProfile);
