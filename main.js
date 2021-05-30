// variables 👇
var buttonReceiveMessage = document.querySelector('#receive-message-button');
var selectMantra = document.querySelector('#mantra-button');
var selectAffirmation = document.querySelector('#affirmation-button');
var motivationalMessageBell = document.querySelector('#meditation-bell-icon');
var motivationalMessage = document.querySelector('#motivational-message-display');
var buttonSelectAnotherMessage = document.querySelector('#select-another-message-button');
var radioButtons = document.querySelector('#radio-buttons');


// event-listeners 👇
buttonReceiveMessage.addEventListener('click', receiveMessage);
buttonSelectAnotherMessage.addEventListener('click', selectAnotherMessage);
selectAffirmation.addEventListener('change', revealReceiveMessageButton);
selectMantra.addEventListener('change', revealReceiveMessageButton);
buttonReceiveMessage.addEventListener('click', receiveMessage);



// functions and event handlers 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

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
  revealSelectAnotherMessageButton();
};

function revealReceiveMessageButton() {
  if (selectAffirmation.checked || selectMantra.checked) {
    show(buttonReceiveMessage);
  }
};

function hideMeditationBell() {
  hide(motivationalMessageBell);
  show(motivationalMessage);
};

function revealSelectAnotherMessageButton() {
  hide(buttonReceiveMessage);
  hide(radioButtons);
  show(buttonSelectAnotherMessage);
};

function selectAnotherMessage() {
  hide(motivationalMessage);
  hide(buttonSelectAnotherMessage);
  show(radioButtons);

  show(motivationalMessageBell);
  show(buttonReceiveMessage);
};

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

// data model 👇
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
];
