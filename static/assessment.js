"use strict";

// References: api.jquery.com, w3schools.com/jsref/, lectures, labs 
// Code was tested piecemeal in Chrome > ChromeDev > Console during coding. 

//
// 1. Update Paragraph Colors
//
// Note: There are multiple <p> elements of class light-or-dark. 

const getPTags = () => {

   $.get('/', () => { 
    // get all values of <p> elements that belong to light-or-dark class
    const pTags = document.querySelectorAll('.light-or-dark'); 

    // Note: 
    // pTags[i] does not return text b/n <p></p> tags 
    // pTags[i].textContent returns the text "Light" or "Dark" 
    // pTags.length is 11 

    // iterate through each element by its index, starting at 0 
    for (const i in pTags.length ) {
        // This doesn't work: 
        // if ('Light' in pTags[0].textContent) 
        if (pTags[i].textContent == "Light") {
            // "gray" isn't defined 
            pTags[i].style.color = "gray"; 
        } else {
            pTags[i].style.color = "white";  
            pTags[i].style.background = "black"; 
        }; //--end of if-else 
    }; //--end of for-loop 
   });//--end of $.get request call block 
} //--end of getAllPTags()

// ^Syntax appears correct according to ChromeDev > Console 
// BUT changes fail to appear in the DOM after a hard reload 

// Syntax errors with previous attempt: 
// for (const i in pTags ) {
//     if (pTags[i].value === "Light") {
//         color: gray;  // wrong way to assign a color to a DOM element in JS
//     } else {
//         color: white; 
//         background: black; 
//     } //--end of if-else 
// } //--end of for-loop 





//
// 2. Change Button Text
//
// Code was successfully tested in Chrome Dev > Console

document
    .getElementById('login')
    .addEventListener('click', (event) => 
    { 
        if ( document.getElementById('login').innerHTML == 'Log In' ) 
        {
            document.getElementById('login').innerHTML = 'Log Out'
        } 
        else 
        {
            document.getElementById('login').innerHTML = 'Log In'
        }; //--end of if-else 
    } //--end of call block for arrow function 
    ) //--end of .addEventListener() 




//
// 3. Prevent Form Submission (Show flash msg instead)
//
document
    .getElementById('fav-color-form')
    .addEventListener('click', (event) => {
        event.preventDefault();
        alert('Your form has not been submitted.')
    }); 





//
// 4. Random Color Changer
//


//
// 5. Generate Todo List
//



