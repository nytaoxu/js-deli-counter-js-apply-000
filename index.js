
const takeANumber = (line, person) => {
  line.push(person);
  console.log(`Welcome, ${person}. You are number ${line.length} in line.`);
};

const nowServing = line => {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  const person = line[0];
  line.shift();
  return `Currently serving ${person}.`;
};

const currentLine = line => {
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  let result = "The line is currently:";
  line.forEach((person, index) => {
    if(index !== 0) {
      result += ",";
    }
    result += ` ${index + 1}. ${person}`;
  });
  return result;
};
