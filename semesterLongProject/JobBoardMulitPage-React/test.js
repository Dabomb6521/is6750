// first Task

const Warranty = (name) => {
  console.log(`Hi ${name}. We've been trying to reach you about your cars extended warranty`);
};

Warranty('Brayden');


// Second Task

const highGround = (name) => {
  return `Its over, ${name}, I have the high ground`;
};
const applyArray = (namesArray, func) => {
  return namesArray.map(name => func(name));
};

const names = ['Anakin', 'Obi-Wan', 'Padme', 'Yoda'];
const results = applyArray(names, highGround);
console.log(results);

