import Person from './modules/DataObject.js';

// This is an IIFE -> Immediately Invoked Function Expression
// Specifically, this is the JavaScript Module Pattern

(() => {
    console.log('working');
    console.log(Person);
})();