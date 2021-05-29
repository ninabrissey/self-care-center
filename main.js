// variables 👇
var buttonReceiveMessage = document.querySelector('#receive-message-button');
var selectMantra = document.querySelector('#mantra-button');
var selectAffirmation = document.querySelector('#affirmation-button');
var motivationalMessageBell = document.querySelector('#meditation-bell-icon');
var motivationalMessage = document.querySelector('#motivational-message-display');



// event-listeners 👇
// buttonReceiveMessage.addEventListener('click', receiveMessage);
buttonReceiveMessage.addEventListener('click', receiveMessage);

// If you're using another button to activate it, it's even simpler: just include onclick="theid.checked=true" in the input tag of the activating button.



// functions and event handlers 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hideMeditationBell() {
  motivationalMessage.classList.remove('hidden');
  motivationalMessageBell.classList.add('hidden');
}

buttonReceiveMessage.addEventListener('click', receiveMessage);
// for function below, I would like to make it dynamic, but I done understand how to the computer would know which arguments to pass in. I think we could remove two lines of code if this were the case. 👇
function receiveMessage() {
  if (selectMantra.checked) {
    motivationalMessage.innerHTML = mantras[getRandomIndex(mantras)];
  } else if (selectAffirmation.checked) {
    motivationalMessage.innerHTML = affirmations[getRandomIndex(affirmations)];
  } else {
    motivationalMessage.innerHTML = 'Please select a mantra or affirmation.';
  }
  currentMessage = motivationalMessage.innerHTML;
  hideMeditationBell();
}

//I think I need to turn radio button into true/false 👆

// user selects mantra or affirmation
// user presses receive motivationalMessage
// if
// user selected affirmation for their message (true)
// return a random message from the affirmation
// else if
// user selected mantra motivational messages (true)
// return a random message from the affirmation
// else
// return a message for them to select either mantra or affirmation


// - [ ]  User should not be able to click the “Receive Message” button unless they have selected a message option.

// hide receive button and reveal it when the user selects affirmation or mantra

selectAffirmation.addEventListener('change', revealReceiveMessageButton);

function revealReceiveMessageButton() {
  if (selectMantra.checked || selectAffirmation.checked) {
    buttonReceiveMessage.classList.remove('hidden');
  }
}





// - [ ]  The user can click a clear button, which clears the page of any message.
// - [ ]  User should only be able to click the clear button if a message is visible.
// - [ ]  When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
// - [ ]  If you’ve added other buttons or inputs, be sure to add some error handling for them as well.

// *Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!*


var currentMessage = 'Please select mantra or affirmation to receive a message';

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionaly.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]
