module.exports = [
  {
    code: 
    `// For loop with setTimeout
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
    ],
    explain: 'This behavior is observed because the value of the variable '+
     'i that we are initialing here is maintained inside the closure scope ' +
     'and when the console.log is called after all the timeout, the final value ' +
     'is logged which is 6. For a more detailed explanation, check out the resource below.'
  }
];