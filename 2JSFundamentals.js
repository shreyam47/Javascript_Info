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
