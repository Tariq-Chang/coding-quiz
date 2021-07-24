const cppQuestions = [
  {
    question: "Which of the following is the correct syntax to add the header file in the C++ program?",
    opt1: '#include<userdefined>',
    opt2: '#include "userdefined"',
    opt3: '<include> "userdefined"',
    opt4: "Both A and B",
    ans: "Both A and B",
  },
  {
    question: "Which of the following is the correct syntax to print the message in C++ language?",
    opt1: 'cout << "Hello World!";',
    opt2: 'Cout << Hello World!;',
    opt3: 'Out << "Hello world!;',
    opt4: "none of the above",
    ans: 'cout << "Hello World!";',
  },
  {
    question: "Which of the following is the correct identifier?",
    opt1: "$var_name",
    opt2: "VAR_123",
    opt3: "varname@",
    opt4: "none of the above",
    ans: "VAR_123",
  },
  {
    question: "Which of the following is the address operator?",
    opt1: "@",
    opt2: "#",
    opt3: "&",
    opt4: "%",
    ans: "&",
  },
  {
    question: "Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
    opt1: "Encapsulation",
    opt2: "Inheritance",
    opt3: "Polymorphism",
    opt4: "All of the above",
    ans: "All of the above",
  },
  {
    question: "The programming language that has the ability to create new data types is called___.",
    opt1: "Overloaded",
    opt2: "Encapsulated",
    opt3: "Reprehensible",
    opt4: "Extensible",
    ans: "Extensible",
  },
  {
    question: "Which of the following is the original creator of the C++ language?",
    opt1: "Dennis Ritchie",
    opt2: "Ken Thompson",
    opt3: "Bjarne Stroustrup",
    opt4: "Brian Kernighan",
    ans: "Bjarne Stroustrup",
  },
  {
    question: "Which of the following is the correct syntax to read the single character to console in the C++ language?",
    opt1: "Read ch()",
    opt2: "Getline vh()",
    opt3: "get(ch)",
    opt4: "Scanf(ch)",
    ans: "get(ch)",
  },
  {
    question: "Which of the following statements is correct about the formal parameters in C++?",
    opt1: "Parameters with which functions are called",
    opt2: "Parameters which are used in the definition of the function",
    opt3: "Variables other than passed parameters in a function",
    opt4: "Variables that are never used in the function",
    ans: "Parameters with which functions are called",
  },
  {
    question: " Which of the following refers to characteristics of an array?",
    opt1: "An array is a set of similar data items",
    opt2: "An array is a set of distinct data items",
    opt3: "An array can hold different types of datatypes",
    opt4: "None of the above",
    ans: "An array is a set of similar data items",
    lastQuestion: true,
  },
];

const jsQuestions = [
  {
    question: "which of the following is not valid javascript variable name?",
    opt1: "2names",
    opt2: "_first_and_last_names",
    opt3: "firstAndLast",
    opt4: "None of the above",
    ans: "2names",
  },
  {
    question: " Which of the following is not JavaScript Data Types?",
    opt1: "Undefined",
    opt2: "Number",
    opt3: "Boolean",
    opt4: "Float",
    ans: "Float"
  },
  {
    question: "Which of the following is the correct syntax to display 'Letsfindcourse' in an alert box using JavaScript?",
    opt1: 'alert-box("Letsfindcourse");',
    opt2: 'confirm("Letsfindcourse");',
    opt3: 'msgbox("Letsfindcourse");',
    opt4: 'alert("Letsfindcourse");',
    ans: 'alert("Letsfindcourse");'
  },
  {
    question: " What is the correct syntax for referring to an external script called 'LFC.js'? ",
    opt1: '<script src="LFC.js">',
    opt2: '<script source="LFC.js">',
    opt3: '<script ref="LFC.js">',
    opt4: '<script type="LFC.js">',
    ans: '<script src="LFC.js">'
  },
  {
    question: "Why so JavaScript and Java have similar name?  ",
    opt1: 'JavaScript is a stripped-down version of Java',
    opt2: "JavaScript's syntax is loosely based on Java's",
    opt3: 'They both originated on the island of Java',
    opt4: 'None of the above',
    ans: "JavaScript's syntax is loosely based on Java's"
  },
  {
    question: "Among the following, which one is a ternary operator in JavaScript?",
    opt1: '#',
    opt2: "::",
    opt3: '&',
    opt4: '?:',
    ans: "?:"
  },
  {
    question: "What does javascript use instead of == and !=?",
    opt1: 'It uses bitwise checking',
    opt2: "It uses === and !== instead",
    opt3: 'It uses equals() and notequals() instead',
    opt4: 'It uses equalto()',
    ans: "It uses === and !== instead"
  },
  {
    question: " How do we define the term Thread?",
    opt1: 'Device that controls input',
    opt2: "Variable that controls movement",
    opt3: 'Controlled execution of applications',
    opt4: 'None of the above',
    ans: "Controlled execution of applications"
  },
  {
    question: 'What is divide by 0 in Javascript? var a = 10; var b = 0; document.write(a/b);',
    opt1: "Nothing is printed",
    opt2: "0 is printed",
    opt3: "Infinity is printed",
    opt4: "Some Garbage Value",
    ans: "Infinity is printed"
  },
  {
    question: "Which is the correct way to write a JavaScript array?",
    opt1: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
    opt2: 'var txt = new Array:1=("tim")2=("kim")3=("jim")',
    opt3: 'var txt = new Array("tim","kim","jim")',
    opt4: 'var txt = new Array="tim","kim","jim"',
    ans: 'var txt = new Array("tim","kim","jim")',
    lastQuestion: true,
  }
]

const totCppQuestions = cppQuestions.length;
const totJsQuestions = jsQuestions.length;
export { totCppQuestions, totJsQuestions, jsQuestions };
export default cppQuestions;
