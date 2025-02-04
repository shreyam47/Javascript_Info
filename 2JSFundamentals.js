//====VARIABLES====
    let name = "John";
    let admin = name;
    const planet = "Earth"; //const variable is unchanging

//====STRINGS====
    //can use ${...} for putting variables in strings
    //  * NOTE: Can only use ``, "" won't work
    alert(`Hello, ${admin}!`);
    alert("the result is ${1 + 2}"); //fails

//====OPERATORS====
    typeof name; //returns type of var

//====INTERACTION: alert, prompt, and cofirm=====
    //prompt: prompt(title, [default]), default is optional
    let age = prompt('How old are you?', 100);
    alert(`You are ${age} years old!`);

    //confirm: has two options, ok and cancel
    let isBoss = confirm("Are you the boss?");
    alert( isBoss );

//====TYPE CONVERSION====
    let typeString = "123";
    alert (typeof(typeString)); //string
    let num = Number(typeString); //converts x to an integer

    /* Boolean Conversion, values that are "empty" are false, everything else is true */
    alert(Boolean(1));
    allert(Boolean(0));

//====MATH====
    // JS uses precendence
    let x = 1;
    alert( +x ); // 1
    alert( +true ); // 1 // Converts non-numbers

    //++ and -- can be before and after a variable. The difference is that prefix returns new value and postfix returns old value
    //HOWEVER, both post and prefix increments a value, its just the return value that's different
    let counter = 1;
    let a = ++counter;
    alert(a); // 2

    let b = counter++;
    alert(b); //1

//====COMPARISONS====
    //When comparing values of different types, JavaScript converts the values to number
    alert( '2' > 1 ); // true, string '2' becomes a number 2

    //For a strict equality check ===
    alert( null === undefined ); //false because null and undefined are technically different
    alert( null === undefined ); //true

//====CONDITIONAL OPERATOR====
    //? method is a shorter version of if/else method --> let result = condition ? value1 : value2;
    age = prompt('age?', 18);
    let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';
    alert( message );

//====LOGICAL OPERATORS====
    //OR operator finds first truthy value
    alert( null || 2 || undefined ); //2
    alert( alert(1) || 2 || alert(3) ); //1 and 2. alert(3) is never reached.

    //AND operator looks for first falsey value
    //NOT operator
    result = !value;

//====NULLISH COALESCING OPERATORS====
    //Nullish Coalescing operator treats null and undefined similarily. It returns the first argument if it's not null/undefined. Otherwise it's the second one
    //Nullish is a recent addition
    //?? returns first defined value
    let user;
    alert(user ?? "Anonymous"); // Anonymous (user is undefined)
    //OR Operator can be used in the same way as ??

//====LOOPS====
    //do while loop
    do {
        alert("hello world KABOOM");
    } while (x = 1);

    //We can force exit loops by using "break" keyword
    //"Continue" stops the current iter of loop and start new one
    for (let i = 0; i < 10; i++) {
        // if true, skip the remaining part of the body
        if (i % 2 == 0) {
            continue;
        }
        alert(i); // 1, then 3, 5, 7, 9
      }

//====SWITCH STATEMENT====
    //Switch can replace multiple if checks
    a = 2 + 2;
    switch (a) {
        case 3:
            alert( 'Too small' );
            break;
        case 4:
            alert( 'Exactly!' );
            break;
        case 5:
            alert( 'Too big' );
            break;
        default:
            alert( "I don't know such values" );
    }

    //if two cases are same, you can put them next to each other
    /*case 2:
      case 3:
        alert("2 and 3 work!")
    */

//====FUNCTIONS====
    function showMessage() {
        alert( 'Hello everyone!' );
    }
    showMessage();
    
    //We can put a default value is a parameter isn't passed
    function showMessage(from, text = "no text given") {
        alert( from + ": " + text );
      }
      
    showMessage("Ann"); // Ann: no text given

//====FUNCTION EXPRESSIONS====
    //JS has a Function Expression as well
    let sayHi = function() {
        alert( "Hello" );
      };
    
      let func = sayHi;    //copy
      func(); // Hello     //run the copy (it works)!
      sayHi(); // Hello    //this still works too (why wouldn't it)

//====ARROW FUNCTIONS====
    //Arrows are another syntax of creating functions
    //
    //let func = function(arg1, arg2, ..., argN) {
    //     return expression;
    //   };
    //
    //-TURNS INTO-
    //
    //let func = (arg1, arg2,..., argN) => expression
    //*arg can be empty

    let sum = (a, b) => a + b;
    /* This arrow function is a shorter form of:

    let sum = function(a, b) {
    return a + b;
    };
    */
    alert(sum(1, 2)); // 3

    //Multiline arrow function
    sum = (a, b) => { 
        let result = a + b;
        return result; // if we use curly braces, then we need an explicit "return"
      };
      
      alert(sum(1, 2)); // 3

//====JAVASCRIPT OVERVIEW====
    /*
    variables
        - let
        - const
        - var
    data types
      - number
      - bigint
      - string
      - boolean
      - null
      - undefined
      - object & symbol
    
    interaction
      - prompt(question, [default])
      - confirm(question)
      - alert(message)
    */