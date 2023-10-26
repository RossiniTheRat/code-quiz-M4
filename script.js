const beginBtn = document.getElementById('begin-btn');
const introEl = document.querySelector('article.intro');
const timeRemainingEl = document.getElementById('time-remaining');

const question1El = document.querySelector('article.q1');
const question2El = document.querySelector('article.q2');
const question3El = document.querySelector('article.q3');
const question4El = document.querySelector('article.q4');
const question5El = document.querySelector('article.q5');

const question1RadioEls = question1El.querySelectorAll('input[type="radio"]');
const question2RadioEls = question2El.querySelectorAll('input[type="radio"]');
const question3RadioEls = question3El.querySelectorAll('input[type="radio"]');
const question4RadioEls = question4El.querySelectorAll('input[type="radio"]');
const question5RadioEls = question5El.querySelectorAll('input[type="radio"]');


let timeRemaining = 60;
let countdownInterval;
question1El.style.display = 'none';
question2El.style.display = 'none';
question3El.style.display = 'none';
question4El.style.display = 'none';
question5El.style.display = 'none';

//timer countdown function
function startCountdown() {
  countdownInterval = setInterval(() => {
    timeRemaining--;
    timeRemainingEl.textContent = `Time remaining: ${timeRemaining}`;
    if (timeRemaining === 0) {
      clearInterval(countdownInterval);
      alert('Time is up!');
    }
  }, 1000);
}

beginBtn.addEventListener('click', () => {
  introEl.style.display = 'none';
  question1El.style.display = 'block';
  timeRemaining = 30;
  timeRemainingEl.textContent = `Time remaining: ${timeRemaining}`;
  clearInterval(countdownInterval);
  startCountdown();
});


// Example code to check the selected answer for question 1
question1RadioEls.forEach(radioEl => {
  radioEl.addEventListener('change', () => {
    if (radioEl.checked) {
      const selectedAnswer = radioEl.value;
      console.log(`Selected answer for question 1: ${selectedAnswer}`);
      question1El.style.display = 'none';
      question2El.style.display = 'block';
    }
  });
});

// Example code to check the selected answer for question 2
question2RadioEls.forEach(radioEl => {
  radioEl.addEventListener('change', () => {
    if (radioEl.checked) {
      const selectedAnswer = radioEl.value;
      console.log(`Selected answer for question 2: ${selectedAnswer}`);
      // Show results or next question here
      question2El.style.display = 'none';
      question3El.style.display = 'block';
    }
  });
});

// Example code to check the selected answer for question 3
question3RadioEls.forEach(radioEl => {
  radioEl.addEventListener('change', () => {
    if (radioEl.checked) {
      const selectedAnswer = radioEl.value;
      console.log(`Selected answer for question 3: ${selectedAnswer}`);
      // Show results or next question here
      question3El.style.display = 'none';
      question4El.style.display = 'block';
    }
  });
});

// Example code to check the selected answer for question 4
question4RadioEls.forEach(radioEl => {
  radioEl.addEventListener('change', () => {
    if (radioEl.checked) {
      const selectedAnswer = radioEl.value;
      console.log(`Selected answer for question 4: ${selectedAnswer}`);
      // Show results or next question here
      question4El.style.display = 'none';
      question5El.style.display = 'block';
    }
  });
});

// Example code to check the selected answer for question 5
question5RadioEls.forEach(radioEl => {
  radioEl.addEventListener('change', () => {
    if (radioEl.checked) {
      const selectedAnswer = radioEl.value;
      console.log(`Selected answer for question 5: ${selectedAnswer}`);
      // Show results or next question here
      question5El.style.display = 'none';
    }
  });
});


