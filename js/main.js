import Team from './modules/DataObject.js';

// This is an IIFE -> Immediately Invoked Function Expression
// Specifically, this is the JavaScript Module Pattern

(() => {
    console.log('working');

    let bioData = document.querySelector('.bio-wrapper').children;

    // Option 1: Populate the children with the data object values
    // bioData[0].src         = Person.avatar;
    // bioData[1].textContent = Person.name;
    // bioData[2].textContent = Person.role;
    // bioData[3].textContent = Person.bio;

    // Option 2: Finding a key in the "Person" data object and populating the data
    // bioData[0].src         = Person["avatar"];
    // bioData[1].textContent = Person["name"];
    // bioData[2].textContent = Person["role"];
    // bioData[3].textContent = Person["bio"];

    function parsePersonData() {
        // this = the element you clicked (in this case, the button)
        let person = this.textContent;

        bioData[0].src         = `images/${Team[person].avatar}`;
        bioData[1].textContent = Team[person].name;
        bioData[2].textContent = Team[person].role;
        bioData[3].textContent = Team[person].bio;
    }
    //loop through the object and build some UI (remember to declare local variable)
    for (let person in Team) {
        console.log(person);

        let currentButton = document.createElement('button'); //create a button for each team member
        currentButton.textContent = person; //add the person's name to the btn
        currentButton.addEventListener('click', parsePersonData); //add an event handler to btn
        document.querySelector('.team').appendChild(currentButton); //put btn in team section on index.html

        // another way to select this: bioData.nextElementSibling.appendChild(currentButton);
    }

})();