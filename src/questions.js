module.exports = [
  {
    code: 
    `// testing the question
for (var i=1; i<=5; i++) {
  setTimeout( function timer() {
    console.log(i);
  }, i*1000)
}
    `,
    options: [
      {value: `1 1 1 1 1`, correct: false},
      { value: `5 5 5 5 5`, correct: false},
      {value: `6 6 6 6 6`, correct: true},
      {value: `error`, correct: false}
    ]
  }
];