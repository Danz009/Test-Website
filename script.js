// Initial counter value

let prices = document.querySelectorAll('.price')
let counterValue = document.getElementById('counter');

prices.forEach(el => {
    el.addEventListener('click', function() {
        // Convert the current screen value and the clicked number to numbers
        let currentCounter = Number(counterValue.value);
        let clickedPrice = Number(el.innerText);

        // Perform addition and update the calculator screen
        counterValue.value = (currentCounter + clickedPrice).toString();
    });
});

// Function to handle button click and update counter value
// function incrementCounter(p) {
//     counterValue+=p;
//     document.getElementById('counter').textContent = counterValue;
// }

// Add event listener to the button
// document.getElementById('MorelMushrooms').addEventListener('click', function() {
//     incrementCounter(5); 
// });

// document.getElementById('PortabelloMushrooms').addEventListener('click', function() {
//     incrementCounter(5); 
// });

// document.getElementById('CreminiMushrooms').addEventListener('click', function() {
//     incrementCounter(5);
// });

// document.getElementById('ButtonMushrooms').addEventListener('click', function() {
//     incrementCounter(5);
// });

// document.getElementById('LionsMane').addEventListener('click', function() {
//     incrementCounter(5); 
// });

