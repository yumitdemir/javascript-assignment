const questions = {
    "categories": [
        {
            "name": "HTML",
            "questions": [
                {
                    "questionText": "What does HTML stand for?",
                    "options": [
                        "Hyper Text Markup Language",
                        "Highly Typed Modeling Language",
                        "Hyperlink and Text Markup Language",
                        "Hyper Transfer Markup Language"
                    ],
                    "answer": "Hyper Text Markup Language"
                },
                {
                    "questionText": "Which HTML tag is used to define the structure of an HTML document?",
                    "options": [
                        "head",
                        "body",
                        "html",
                        "title"
                    ],
                    "answer": "html"
                },
                {
                    "questionText": "What is the purpose of the 'alt' attribute in the 'img' tag?",
                    "options": [
                        "Align the image",
                        "Alternative text for the image",
                        "Apply styles to the image",
                        "Animate the image"
                    ],
                    "answer": "Alternative text for the image"
                },
                {
                    "questionText": "Which HTML tag is used for creating an unordered list?",
                    "options": [
                        "ol",
                        "li",
                        "ul",
                        "dl"
                    ],
                    "answer": "<ul>"
                },
                {
                    "questionText": "What is the correct way to comment out multiple lines in HTML?",
                    "options": [
                        "<! -- This is a comment -->",
                        "// This is a comment",
                        "/* This is a comment */",
                        "# This is a comment"
                    ],
                    "answer": "/* This is a comment */"
                },
                {
                    "questionText": "Which HTML tag is used to link an external stylesheet?",
                    "options": [
                        "style",
                        "link",
                        "head",
                        "meta"
                    ],
                    "answer": "link"
                },
                {
                    "questionText": "In HTML, which attribute is used to specify the URL of the page the link goes to?",
                    "options": [
                        "href",
                        "src",
                        "link",
                        "url"
                    ],
                    "answer": "href"
                },
                {
                    "questionText": "What is the purpose of the 'span' tag?",
                    "options": [
                        "Create a hyperlink",
                        "Define a section in a document",
                        "Apply styles to inline elements",
                        "Insert an image"
                    ],
                    "answer": "Apply styles to inline elements"
                },
                {
                    "questionText": "Which HTML tag is used to create a hyperlink?",
                    "options": [
                        "a",
                        "link",
                        "href",
                        "p"
                    ],
                    "answer": "a"
                },
                {
                    "questionText": "What does CSS stand for?",
                    "options": [
                        "Counter Style Sheet",
                        "Colorful Style Sheet",
                        "Cascading Style Sheet",
                        "Computer Style Sheet"
                    ],
                    "answer": "Cascading Style Sheet"
                },
                {
                    "questionText": "Which CSS property is used to control the text size?",
                    "options": [
                        "font-size",
                        "text-size",
                        "font-style",
                        "text-style"
                    ],
                    "answer": "font-size"
                },
                {
                    "questionText": "What is the purpose of the 'display' property in CSS?",
                    "options": [
                        "Control the visibility of an element",
                        "Control the positioning of an element",
                        "Control the display mode of an element",
                        "Control the background color of an element"
                    ],
                    "answer": "Control the display mode of an element"
                },
                {
                    "questionText": "In CSS, what does the 'margin' property control?",
                    "options": [
                        "Element's border",
                        "Element's content",
                        "Space outside the element",
                        "Space inside the element"
                    ],
                    "answer": "Space outside the element"
                },
                {
                    "questionText": "Which CSS selector is used to select all elements with a specific class?",
                    "options": [
                        ".class",
                        "#class",
                        ":class",
                        "/class/"
                    ],
                    "answer": ".class"
                },
                {
                    "questionText": "What is the purpose of the 'position' property in CSS?",
                    "options": [
                        "Control the size of an element",
                        "Control the position of an element",
                        "Control the color of an element",
                        "Control the font of an element"
                    ],
                    "answer": "Control the position of an element"
                },
                {
                    "questionText": "Which CSS property is used for adding shadows to text?",
                    "options": [
                        "text-shadow",
                        "box-shadow",
                        "shadow-text",
                        "font-shadow"
                    ],
                    "answer": "text-shadow"
                },
                {
                    "questionText": "What is the purpose of the 'border-radius' property in CSS?",
                    "options": [
                        "Control the border width of an element",
                        "Control the border color of an element",
                        "Create rounded corners for an element",
                        "Control the border style of an element"
                    ],
                    "answer": "Create rounded corners for an element"
                },
                {
                    "questionText": "In CSS, what does the 'float' property do?",
                    "options": [
                        "Move an element to the left or right",
                        "Make an element invisible",
                        "Change the font of an element",
                        "Apply a shadow to an element"
                    ],
                    "answer": "Move an element to the left or right"
                },
                {
                    "questionText": "Which HTML tag is used to embed a video?",
                    "options": [
                        "video",
                        "media",
                        "embed",
                        "play"
                    ],
                    "answer": "video"
                },
                {
                    "questionText": "What is the purpose of the 'src' attribute in the 'script' tag?",
                    "options": [
                        "Specify the source of an image",
                        "Specify the source of a stylesheet",
                        "Specify the source of a script file",
                        "Specify the source of a video"
                    ],
                    "answer": "Specify the source of a script file"
                },
                {
                    "questionText": "Which HTML tag is used to create a form?",
                    "options": [
                        "input",
                        "form",
                        "button",
                        "fieldset"
                    ],
                    "answer": "<form>"
                },
                {
                    "questionText": "What is the purpose of the 'action' attribute in the 'form' tag?",
                    "options": [
                        "Specify the method of the form",
                        "Specify the layout of the form",
                        "Specify the destination for form data",
                        "Specify the style of the form"
                    ],
                    "answer": "Specify the destination for form data"
                },
                {
                    "questionText": "Which HTML input type is used for a single-line text input?",
                    "options": [
                        "text",
                        "line",
                        "input type='text'",
                        "single-line"
                    ],
                    "answer": "input type='text'"
                }
            ]
        },
        {
            "name": "CSS",
            "questions": [
                {
                    "questionText": "What does CSS stand for?",
                    "options": [
                        "Counter Style Sheet",
                        "Colorful Style Sheet",
                        "Cascading Style Sheet",
                        "Computer Style Sheet"
                    ],
                    "answer": "Cascading Style Sheet"
                },
                {
                    "questionText": "Which CSS property is used to change the text color of an element?",
                    "options": [
                        "color",
                        "text-color",
                        "font-color",
                        "foreground-color"
                    ],
                    "answer": "color"
                },
                {
                    "questionText": "What is the purpose of the 'margin' property in CSS?",
                    "options": [
                        "Control the size of an element",
                        "Control the space outside an element",
                        "Control the space inside an element",
                        "Control the border of an element"
                    ],
                    "answer": "Control the space outside an element"
                },
                {
                    "questionText": "In CSS, what does the 'padding' property control?",
                    "options": [
                        "Space outside the element",
                        "Space inside the element",
                        "Border width of the element",
                        "Border color of the element"
                    ],
                    "answer": "Space inside the element"
                },
                {
                    "questionText": "Which CSS property is used for controlling the font family of an element?",
                    "options": [
                        "font-family",
                        "text-family",
                        "font-type",
                        "text-type"
                    ],
                    "answer": "font-family"
                },
                {
                    "questionText": "What is the purpose of the 'display' property in CSS?",
                    "options": [
                        "Control the visibility of an element",
                        "Control the positioning of an element",
                        "Control the display mode of an element",
                        "Control the background color of an element"
                    ],
                    "answer": "Control the display mode of an element"
                },
                {
                    "questionText": "In CSS, what does the 'position' property do?",
                    "options": [
                        "Control the size of an element",
                        "Control the position of an element",
                        "Control the color of an element",
                        "Control the font of an element"
                    ],
                    "answer": "Control the position of an element"
                },
                {
                    "questionText": "Which CSS property is used for adding shadows to text?",
                    "options": [
                        "text-shadow",
                        "box-shadow",
                        "shadow-text",
                        "font-shadow"
                    ],
                    "answer": "text-shadow"
                },
                {
                    "questionText": "What is the purpose of the 'border-radius' property in CSS?",
                    "options": [
                        "Control the border width of an element",
                        "Control the border color of an element",
                        "Create rounded corners for an element",
                        "Control the border style of an element"
                    ],
                    "answer": "Create rounded corners for an element"
                },
                {
                    "questionText": "In CSS, what does the 'float' property do?",
                    "options": [
                        "Move an element to the left or right",
                        "Make an element invisible",
                        "Change the font of an element",
                        "Apply a shadow to an element"
                    ],
                    "answer": "Move an element to the left or right"
                },
                {
                    "questionText": "Which CSS selector is used to select all elements with a specific class?",
                    "options": [
                        ".class",
                        "#class",
                        ":class",
                        "/class/"
                    ],
                    "answer": ".class"
                },
                {
                    "questionText": "What is the purpose of the 'flexbox' layout in CSS?",
                    "options": [
                        "Create flexible box models",
                        "Control the color of elements",
                        "Apply shadows to elements",
                        "Control the positioning of elements"
                    ],
                    "answer": "Create flexible box models"
                },
                {
                    "questionText": "Which CSS property is used for changing the background color of an element?",
                    "options": [
                        "background-color",
                        "color",
                        "bgcolor",
                        "background"
                    ],
                    "answer": "background-color"
                },
                {
                    "questionText": "What does the 'z-index' property in CSS control?",
                    "options": [
                        "Text alignment",
                        "Element visibility",
                        "Element stacking order",
                        "Element rotation"
                    ],
                    "answer": "Element stacking order"
                },
                {
                    "questionText": "In CSS, what does the 'media query' do?",
                    "options": [
                        "Change the media type of a document",
                        "Specify the media content of an element",
                        "Apply styles based on the device characteristics",
                        "Create media files for a webpage"
                    ],
                    "answer": "Apply styles based on the device characteristics"
                },
                {
                    "questionText": "What is the purpose of the 'animation' property in CSS?",
                    "options": [
                        "Apply styles to elements",
                        "Control the duration of an animation",
                        "Specify keyframes for an animation",
                        "Control the visibility of an element"
                    ],
                    "answer": "Control the duration of an animation"
                },
                {
                    "questionText": "Which CSS property is used for changing the font size of an element?",
                    "options": [
                        "font-size",
                        "text-size",
                        "font-style",
                        "text-style"
                    ],
                    "answer": "font-size"
                },
                {
                    "questionText": "In CSS, what does the 'box-sizing' property control?",
                    "options": [
                        "Control the box model of an element",
                        "Control the border of an element",
                        "Control the shadow of an element",
                        "Control the background of an element"
                    ],
                    "answer": "Control the box model of an element"
                },
                {
                    "questionText": "Which CSS unit is relative to the font-size of the element?",
                    "options": [
                        "px",
                        "em",
                        "rem",
                        "vw"
                    ],
                    "answer": "em"
                },
                {
                    "questionText": "What is the purpose of the 'transition' property in CSS?",
                    "options": [
                        "Apply transitions between different styles",
                        "Change the text color of an element",
                        "Control the layout of an element",
                        "Apply a gradient to an element"
                    ],
                    "answer": "Apply transitions between different styles"
                },
                {
                    "questionText": "Which CSS property is used for controlling the opacity of an element?",
                    "options": [
                        "transparency",
                        "opacity",
                        "alpha",
                        "visibility"
                    ],
                    "answer": "opacity"
                },
                {
                    "questionText": "What does the 'nth-child' selector do in CSS?",
                    "options": [
                        "Selects elements based on their position",
                        "Selects elements based on their class",
                        "Selects elements based on their ID",
                        "Selects elements based on their type"
                    ],
                    "answer": "Selects elements based on their position"
                },
                {
                    "questionText": "In CSS, what does the 'overflow' property control?",
                    "options": [
                        "Control the visibility of an element",
                        "Control the positioning of an element",
                        "Control the overflow content of an element",
                        "Control the display mode of an element"
                    ],
                    "answer": "Control the overflow content of an element"
                },
                {
                    "questionText": "What is the purpose of the 'rem' unit in CSS?",
                    "options": [
                        "Relative to the root element's font-size",
                        "Relative to the viewport width",
                        "Relative to the parent element's font-size",
                        "Relative to the element's height"
                    ],
                    "answer": "Relative to the root element's font-size"
                },
                {
                    "questionText": "Which CSS property is used for controlling the alignment of text within an element?",
                    "options": [
                        "text-align",
                        "alignment",
                        "text-position",
                        "text-style"
                    ],
                    "answer": "text-align"
                },
                {
                    "questionText": "What does the 'max-width' property do in CSS?",
                    "options": [
                        "Set the maximum width of an element",
                        "Set the minimum width of an element",
                        "Control the background color of an element",
                        "Control the font size of an element"
                    ],
                    "answer": "Set the maximum width of an element"
                },
                {
                    "questionText": "In CSS, what is the purpose of the 'pseudo-class' selector?",
                    "options": [
                        "Selects elements based on their position",
                        "Selects elements based on their class",
                        "Selects elements based on their ID",
                        "Selects elements based on their state"
                    ],
                    "answer": "Selects elements based on their state"
                },
                {
                    "questionText": "Which CSS property is used for creating rounded corners for an element?",
                    "options": [
                        "border-radius",
                        "corner-radius",
                        "rounding",
                        "border-style"
                    ],
                    "answer": "border-radius"
                },
                {
                    "questionText": "What is the purpose of the 'cursor' property in CSS?",
                    "options": [
                        "Change the mouse pointer style",
                        "Control the visibility of an element",
                        "Change the color of an element",
                        "Control the shadow of an element"
                    ],
                    "answer": "Change the mouse pointer style"
                },
                {
                    "questionText": "Which CSS property is used for changing the font weight of an element?",
                    "options": [
                        "font-weight",
                        "text-weight",
                        "font-style",
                        "text-style"
                    ],
                    "answer": "font-weight"
                },
                {
                    "questionText": "In CSS, what does the 'line-height' property control?",
                    "options": [
                        "Control the width of an element",
                        "Control the height of an element",
                        "Control the line spacing within an element",
                        "Control the text color of an element"
                    ],
                    "answer": "Control the line spacing within an element"
                },
                {
                    "questionText": "What does the 'box-shadow' property do in CSS?",
                    "options": [
                        "Control the box model of an element",
                        "Apply a shadow to an element",
                        "Change the background color of an element",
                        "Control the border of an element"
                    ],
                    "answer": "Apply a shadow to an element"
                },
                {
                    "questionText": "In CSS, what is the purpose of the 'transformation' property?",
                    "options": [
                        "Control the position of an element",
                        "Apply transformations to an element",
                        "Control the visibility of an element",
                        "Change the color of an element"
                    ],
                    "answer": "Apply transformations to an element"
                },
                {
                    "questionText": "Which CSS property is used for changing the background image of an element?",
                    "options": [
                        "background-image",
                        "image-background",
                        "bg-image",
                        "background-url"
                    ],
                    "answer": "background-image"
                }
            ]
        },
        {
            "name": "JavaScript",
            "questions": [
                {
                    "questionText": "What does JavaScript stand for?",
                    "options": [
                        "Java Source Code",
                        "Java Syntax Code",
                        "Just Style Code",
                        "JavaScript"
                    ],
                    "answer": "JavaScript"
                },
                {
                    "questionText": "What type of language is JavaScript?",
                    "options": [
                        "Markup language",
                        "Programming language",
                        "Scripting language",
                        "Styling language"
                    ],
                    "answer": "Scripting language"
                },
                {
                    "questionText": "How do you declare a variable in JavaScript?",
                    "options": [
                        "var myVar;",
                        "let myVar;",
                        "const myVar;",
                        "both let and const"
                    ],
                    "answer": "both let and const"
                },
                {
                    "questionText": "What is the purpose of the 'typeof' operator in JavaScript?",
                    "options": [
                        "Check the type of a variable",
                        "Define a variable",
                        "Assign a value to a variable",
                        "Concatenate strings"
                    ],
                    "answer": "Check the type of a variable"
                },
                {
                    "questionText": "How do you write a comment in JavaScript?",
                    "options": [
                        "// This is a comment",
                        "/* This is a comment */",
                        "# This is a comment",
                        "' This is a comment"
                    ],
                    "answer": "// This is a comment"
                },
                {
                    "questionText": "What is the purpose of the 'if' statement in JavaScript?",
                    "options": [
                        "Define a function",
                        "Declare a variable",
                        "Create a loop",
                        "Make a decision in the code"
                    ],
                    "answer": "Make a decision in the code"
                },
                {
                    "questionText": "How do you define a function in JavaScript?",
                    "options": [
                        "function myFunction() {}",
                        "def myFunction() {}",
                        "void myFunction() {}",
                        "fn myFunction() {}"
                    ],
                    "answer": "function myFunction() {}"
                },
                {
                    "questionText": "What is the purpose of the 'return' statement in a function?",
                    "options": [
                        "End the function execution",
                        "Return a value from the function",
                        "Define a function",
                        "Print a message to the console"
                    ],
                    "answer": "Return a value from the function"
                },
                {
                    "questionText": "How do you write a 'for' loop in JavaScript?",
                    "options": [
                        "for (i = 0; i < 5; i++)",
                        "for i = 0; i < 5; i++",
                        "loop (i = 0; i < 5; i++)",
                        "for (i < 5)"
                    ],
                    "answer": "for (i = 0; i < 5; i++)"
                },
                {
                    "questionText": "What is the purpose of the 'array' data type in JavaScript?",
                    "options": [
                        "Store a single value",
                        "Store multiple values",
                        "Define a function",
                        "Create a loop"
                    ],
                    "answer": "Store multiple values"
                },
                {
                    "questionText": "How do you access the first element of an array in JavaScript?",
                    "options": [
                        "array[0]",
                        "array.first",
                        "array.firstElement",
                        "first(array)"
                    ],
                    "answer": "array[0]"
                },
                {
                    "questionText": "What is the purpose of the 'addEventListener' method in JavaScript?",
                    "options": [
                        "Add a new element to the page",
                        "Add a style to an element",
                        "Add an event handler to an element",
                        "Add a comment to the code"
                    ],
                    "answer": "Add an event handler to an element"
                },
                {
                    "questionText": "How do you check if a variable is undefined in JavaScript?",
                    "options": [
                        "if (myVar == null)",
                        "if (myVar === undefined)",
                        "if (myVar == undefined)",
                        "if (myVar === null)"
                    ],
                    "answer": "if (myVar === undefined)"
                },
                {
                    "questionText": "What is the purpose of the 'this' keyword in JavaScript?",
                    "options": [
                        "Refer to the current object",
                        "Create a new object",
                        "Define a function",
                        "Access the global scope"
                    ],
                    "answer": "Refer to the current object"
                },
                {
                    "questionText": "How do you create an object in JavaScript?",
                    "options": [
                        "var obj = {};",
                        "object = [];",
                        "create object obj;",
                        "new Object();"
                    ],
                    "answer": "var obj = {};"
                },
                {
                    "questionText": "What is the purpose of the 'JSON.parse()' method in JavaScript?",
                    "options": [
                        "Parse a string as JSON",
                        "Parse a string as HTML",
                        "Parse a string as XML",
                        "Parse a string as a number"
                    ],
                    "answer": "Parse a string as JSON"
                },
                {
                    "questionText": "How do you change the content of an HTML element using JavaScript?",
                    "options": [
                        "element.innerHTML",
                        "element.textContent",
                        "element.innerText",
                        "both innerHTML and textContent"
                    ],
                    "answer": "both innerHTML and textContent"
                },
                {
                    "questionText": "What is the purpose of the 'setTimeout' function in JavaScript?",
                    "options": [
                        "Set a timer for a function to execute",
                        "Set the interval for a function to execute",
                        "Define a function",
                        "Pause the execution of a function"
                    ],
                    "answer": "Set a timer for a function to execute"
                },
                {
                    "questionText": "How do you check if an element has a particular class in JavaScript?",
                    "options": [
                        "element.hasClass('className')",
                        "element.classList.contains('className')",
                        "element.has('className')",
                        "element.className('className')"
                    ],
                    "answer": "element.classList.contains('className')"
                },
                {
                    "questionText": "What is the purpose of the 'localStorage' object in JavaScript?",
                    "options": [
                        "Store data for the current session",
                        "Store data permanently",
                        "Store only numbers",
                        "Store only strings"
                    ],
                    "answer": "Store data permanently"
                },
                {
                    "questionText": "How do you declare a constant variable in JavaScript?",
                    "options": [
                        "var myVar = 5;",
                        "const myVar = 5;",
                        "let myVar = 5;",
                        "const myVar;"
                    ],
                    "answer": "const myVar = 5;"
                },
                {
                    "questionText": "What does the 'forEach' method do on an array in JavaScript?",
                    "options": [
                        "Iterate over array elements",
                        "Sort the array",
                        "Filter the array",
                        "Map array elements"
                    ],
                    "answer": "Iterate over array elements"
                },
                {
                    "questionText": "What is the purpose of the 'try...catch' statement in JavaScript?",
                    "options": [
                        "Define a function",
                        "Handle errors in the code",
                        "Create a loop",
                        "Declare a variable"
                    ],
                    "answer": "Handle errors in the code"
                },
                {
                    "questionText": "How do you round a number to the nearest integer in JavaScript?",
                    "options": [
                        "Math.round()",
                        "Math.floor()",
                        "Math.ceil()",
                        "round()"
                    ],
                    "answer": "Math.round()"
                },
                {
                    "questionText": "What does the 'bind' method do in JavaScript?",
                    "options": [
                        "Bind a function to an object",
                        "Bind an event to an element",
                        "Bind a variable to a function",
                        "Bind a style to an element"
                    ],
                    "answer": "Bind a function to an object"
                },
                {
                    "questionText": "How do you check if a number is an integer in JavaScript?",
                    "options": [
                        "Number.isInteger()",
                        "isInteger()",
                        "Number.integer()",
                        "integer()"
                    ],
                    "answer": "Number.isInteger()"
                },
                {
                    "questionText": "What is the purpose of the 'fetch' API in JavaScript?",
                    "options": [
                        "Fetch HTML content",
                        "Fetch data from a server",
                        "Fetch images",
                        "Fetch CSS styles"
                    ],
                    "answer": "Fetch data from a server"
                },
                {
                    "questionText": "How do you convert a string to a number in JavaScript?",
                    "options": [
                        "Number(string)",
                        "string.toNumber()",
                        "parseNumber(string)",
                        "convertToNumber(string)"
                    ],
                    "answer": "Number(string)"
                },
                {
                    "questionText": "What is the purpose of the 'async' keyword in JavaScript?",
                    "options": [
                        "Define a function",
                        "Make a function asynchronous",
                        "Synchronize function execution",
                        "Create a loop"
                    ],
                    "answer": "Make a function asynchronous"
                },
                {
                    "questionText": "How do you create a promise in JavaScript?",
                    "options": [
                        "new Promise()",
                        "createPromise()",
                        "Promise.new()",
                        "startPromise()"
                    ],
                    "answer": "new Promise()"
                },
                {
                    "questionText": "What is the purpose of the 'map' method on an array in JavaScript?",
                    "options": [
                        "Sort the array",
                        "Filter the array",
                        "Transform array elements",
                        "Combine array elements"
                    ],
                    "answer": "Transform array elements"
                },
                {
                    "questionText": "How do you remove an element from an array in JavaScript?",
                    "options": [
                        "array.remove(index)",
                        "array.splice(index, 1)",
                        "array.pop()",
                        "removeElement(array, index)"
                    ],
                    "answer": "array.splice(index, 1)"
                },
                {
                    "questionText": "What is the purpose of the 'Object.keys()' method in JavaScript?",
                    "options": [
                        "Retrieve all values from an object",
                        "Retrieve all keys from an object",
                        "Retrieve the length of an object",
                        "Retrieve the type of an object"
                    ],
                    "answer": "Retrieve all keys from an object"
                },
                {
                    "questionText": "How do you convert a number to a string in JavaScript?",
                    "options": [
                        "number.toString()",
                        "String(number)",
                        "convertToString(number)",
                        "stringify(number)"
                    ],
                    "answer": "String(number)"
                }
            ]
        }
    ]
}

const container = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
let playersContainer = document.querySelector(".players-container");
let timer;

let players = []
let selectedTopic = null;
let topics = ["HTML", "CSS", "Javascript"]
let usedQuestions = []
let answeredQuestions = []
const timeLimit = 10;
let currentQuestion = 0;
let maxQuestions = 10;
let answerHistory = []
let playersOrder = []

startBtn.addEventListener("click", startBtnClickHandler)

function startBtnClickHandler() {
    renderSelectPlayerSection()
}

function renderSelectPlayerSection() {
    container.innerHTML = `
        <h1>Select Players</h1>
        <div>
            <label for="add-player-input">Add Player:</label>
            <input id="add-player-input" type="text">
            <button id="add-player-button">Add</button>
            <button id="continue-button">Continue</button>
        </div>
        <div id="playersDiv"></div>
    `;

    // Event Listeners
    document.getElementById("add-player-button").addEventListener("click", addPlayer);
    document.getElementById("continue-button").addEventListener("click", renderTopicSelection);

    // Initialization
    refreshPlayerList();

    // Functions
    function addPlayer() {
        let input = document.getElementById("add-player-input");
        if (input.value !== "" && players.length !== 4 && !players?.some(player => player.name === input.value)) {
            let colorList = ["red", "green", "blue", "purple"]
            players.push({name: input.value, score: 0, color: colorList[players.length]});
            refreshPlayerList();
        }
    }

    function refreshPlayerList() {
        let playersDiv = document.getElementById("playersDiv");
        playersDiv.innerHTML = '';
        let index = 0;
        players.forEach((player) => {
            playersDiv.innerHTML += `
                <div class="created-player-container">
                    <p id="${player.name}">${index + 1}-${player.name}</p>
                    <button id="delete-${index}">X</button>
                </div>
            `;
            document.getElementById(`delete-${index}`).addEventListener("click", () => {
                players = players.filter(p => p.name !== player.name);
                refreshPlayerList();
            });
            index++;
        });
    }
}


function renderTopicSelection() {
    if (players.length === 0) {
        return;
    }
    container.innerHTML = `
        <h1>Select Topic</h1>
        <label for="topic-selector">
            <select id="topic-selector">
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>
        </label>
        <button id="back-button">Back</button>
        <button id="continue-button">Start Game</button>
    `;

    // Event Listeners
    document.getElementById("back-button").addEventListener("click", renderSelectPlayerSection);
    document.getElementById("continue-button").addEventListener("click", () => {
        selectedTopic = document.getElementById("topic-selector").value;
        renderQuestion();
    });
}


function renderQuestion(questionNo) {
    if (currentQuestion === maxQuestions) {
        // finish the game
        renderFinishScreen()
        return;
    }
    currentQuestion++;
    players = shuffle(players)

    container.innerHTML = "";
    playersContainer.innerHTML = "";
    // Display Players and scores
    let index = 0;
    players.forEach((player) => {
        playersContainer.innerHTML += `
            <div>
                <div class="circle" id="${player.name}-circle">${index + 1}</div>
                <p class="player-name" id=${player.name}>${player.name}</p>
                <p class="player-score" id=${player.name + player.score}>${player.score}</p>
            </div>
        `;
        index++;
    });


    //Choose random question from the selected topic
    let question = getRandomQuestion();

    container.innerHTML = `
        <div id="question-container">
            <p id="player-turn-text">It's player </p>
            <div id="timer"></div>
            <div id="question">${question.questionText}</div>
            <div id="answer-buttons" class="btn-grid">
                <button class="btn" name="quiz-option">${question.options[0]}</button>
                <button class="btn" name="quiz-option">${question.options[1]}</button>
                <button class="btn" name="quiz-option">${question.options[2]}</button>
                <button class="btn" name="quiz-option">${question.options[3]}</button>
            </div>
            <button class=" hide btn" id="next-question-btn">Next Question</button>
        </div>
    `;
    startQuestionTimer();


    let selectedAnswersArray = [];
    let selectedAnswersArrayWithPlayers = [];
    highliteCurrentPlayer()
    let quizOptions = document.getElementsByName("quiz-option");
    quizOptions.forEach(function (button) {
        button.addEventListener("click", (e) => {
            answerSelectionHandler(e);
        });
    });

    function answerSelectionHandler(e) {
        if (e) {
            selectedAnswersArray.push(e.target.textContent);
            selectedAnswersArrayWithPlayers.push({
                player: players[selectedAnswersArray.length - 1],
                answer: e.target.textContent
            })
        }
        if (selectedAnswersArray.length === players.length) {
            let quizOptions = document.getElementsByName("quiz-option");
            quizOptions.forEach((option) => {
                option.classList.add("disable")
            });
            let nextBtn = document.getElementById("next-question-btn")
            let playerCircles = document.getElementsByClassName("circle")
            for (let playerCircle of playerCircles) {
                playerCircle.className = "";
                playerCircle.classList.add("circle")
            }
            let playerTurnText = document.getElementById("player-turn-text")
            playerTurnText.style.color = "black"
            playerTurnText.textContent = "All of the players answered this question. Go to  next question"
            nextBtn.classList.remove("hide")
            nextBtn.addEventListener("click", () => {
                answerHistory.push({question: question, answers: selectedAnswersArrayWithPlayers})
                nextQuestion()
            })
        } else {
            startQuestionTimer();
            highliteCurrentPlayer()
        }
    }

    function nextQuestion() {
        let index = 0;
        for (const answer of selectedAnswersArray) {
            if (question.answer === answer) {
                let player = players[index]
                player.score += 10;
            }
            index++
        }
        renderQuestion();
    }

    function highliteCurrentPlayer() {
        let playerCircles = document.getElementsByClassName("circle")
        let playerTurnText = document.getElementById("player-turn-text")
        playerTurnText.textContent = "It's player " + (selectedAnswersArray.length + 1)
        playerTurnText.style.color = players[selectedAnswersArray.length].color

        let currentPlayerObjet = players[selectedAnswersArray.length];
        for (let playerCircle of playerCircles) {
            playerCircle.className = "";
            playerCircle.classList.add("circle")
        }
        let currentPlayerCircle = document.getElementById(currentPlayerObjet.name + "-circle")
        currentPlayerCircle.classList.add("selected-" + currentPlayerObjet.color)
    }

    function startQuestionTimer() {
        let timeLeft = timeLimit;
        resetTimer() // Reset the timer if it's still running
        // Update the UI to show the initial time
        updateTimerDisplay(timeLeft);

        // Start the timer
        timer = setInterval(() => {
            timeLeft--;
            // Update the UI to show the remaining time
            updateTimerDisplay(timeLeft);

            if (timeLeft <= 0) {
                // Timer has finished
                clearInterval(timer); // Clear the timer

                // Perform actions when the timer is finished
                nextPlayer();

            }
        }, 1000); // Update the timer every second
    }

    function nextPlayer() {
        // Move to the next player
        selectedAnswersArray.push(null); // Indicate that the current player didn't answer
        answerSelectionHandler();
    }

    function renderFinishScreen() {
        clearInterval(timer);

        // Clear the container
        container.innerHTML = '';
        playersContainer.innerHTML = '';

        // Create elements for finish screen
        var finishScreen = document.createElement('div');
        finishScreen.id = 'finish-screen';

        // add start again button
        let startAgainBtn = document.createElement("button");
        startAgainBtn.textContent = "Start Again";
        startAgainBtn.id = "start-again-btn";
        finishScreen.appendChild(startAgainBtn);




        var heading = document.createElement('h1');
        heading.textContent = 'Game Over!';
        finishScreen.appendChild(heading);

        // Sort players by score and name
        players = players.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score; // Sort by score descending
            } else {
                // If scores are equal, sort by name ascending
                return a.name.localeCompare(b.name);
            }
        });

        // Initialize rankings array
        let rankings = [];

        // Group players with the same score
        for (let i = 0; i < players.length; i++) {
            let group = [players[i]];

            // Check if there are players with the same score
            while (i + 1 < players.length && players[i].score === players[i + 1].score) {
                group.push(players[i + 1]);
                i++;
            }

            // Add the group to the rankings array
            rankings.push(group);
        }

        // create rankings list
        var rankingsList = document.createElement('ul');
        rankingsList.classList.add("margin-bottom");
        rankings.forEach((group, index) => {
            // Create a list item for each player in the group
            group.forEach(player => {
                var listItem = document.createElement('li');
                listItem.textContent = `${player.name} - ${player.score} points`;
                rankingsList.appendChild(listItem);
            });

            // Add a line break after each group
            if (index < rankings.length - 1) {
                rankingsList.appendChild(document.createElement('br'));
            }

        });


        finishScreen.appendChild(rankingsList);

        // loop through answerHistory and create a list for each question and also list all the answers and show the correct one using inner html
        answerHistory.forEach((answer, index) => {
            let question = `
                <div class="question-container">
                    <h3 class="finish-screen-question">${index + 1}. ${answer.question.questionText}</h3>
                    <p class="finish-screen-correct-answer">Correct Answer: ${answer.question.answer}</p>
                    <p class="finish-screen-answers-title">Answers:</p>
                    <div>
            ` + answer.answers.map(answer => `<p class="finish-screen-player-answer  `+ answer.player.color + `">${answer.player.name}: ${answer.answer}</p>`).join("") +
                `
                    </div>
                </div>
            `
            finishScreen.innerHTML += question
        })
        container.appendChild(finishScreen);
        // find starta again button by id and add event listener
        document.getElementById("start-again-btn").addEventListener("click", startAgain);






    }

    function startAgain() {
        currentQuestion = 0;
        usedQuestions = [];
        answerHistory = [];
        players.forEach(player => { player.score = 0 })
        container.innerHTML = "";
        renderSelectPlayerSection();
    }

}


function shuffle(array) {
    // Copy the array to avoid modifying the original array directly.
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element.
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
            shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }

    // Ensure the first element has a different 'name'
    if (shuffledArray.length > 1 && shuffledArray[0].name === array[0].name) {
        const temp = shuffledArray[0];
        shuffledArray[0] = shuffledArray[1];
        shuffledArray[1] = temp;
    }

    return shuffledArray;
}

function getRandomQuestion() {
    // Find the category based on the selectedTopic
    const selectedCategory = questions.categories.find(category => category.name === selectedTopic);

    // Check if the category was found and has questions
    if (selectedCategory && selectedCategory.questions) {
        let unusedQuestions = selectedCategory.questions.filter(question => !usedQuestions.includes(question));

        // Check if there are unused questions
        if (unusedQuestions.length > 0) {
            let randomIndex = Math.floor(Math.random() * unusedQuestions.length);
            usedQuestions.push(unusedQuestions[randomIndex]);
            return unusedQuestions[randomIndex];
        } else {
            console.error("No unused questions in the selected category.");
            return null; // or handle the case when no unused questions are available
        }
    } else {
        console.error("Category not found or does not have questions.");
        return null; // or handle the case when the category is not found or has no questions
    }
}


function updateTimerDisplay(timeLeft) {
    // Update the UI to display the remaining time
    const timerDisplay = document.getElementById("timer");
    // get player-turn-text p tag and its text and check if it is All of the players answered this question. Go to next question
    let playerTurnText = document.getElementById("player-turn-text")
    let playerTurnTextContent = playerTurnText.textContent
    if (playerTurnTextContent !== "All of the players answered this question. Go to  next question") {
        if (timerDisplay) {
            timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
        }
    }else {
        clearInterval(timer);
        timerDisplay.textContent = ""
    }

}

function resetTimer() {
    clearInterval(timer); // Clear the timer if it's still running
    // Update the UI to reset or hide the timer display
    updateTimerDisplay(timeLimit);
}


