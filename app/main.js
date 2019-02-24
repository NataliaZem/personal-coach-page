// hamburger-button changes
let hamburgerChange = (x) => x.classList.toggle('change');

// menu  after click on hamburger-button
let menuShow = () => document.getElementById('menu').classList.toggle('show');

// replace content on services
let changeLeft = () => {
  document.getElementById('h4-1').innerHTML = 'One On One Coaching';
  document.getElementById('h4-2').innerHTML = 'Couple\'s Guidance';
  document.getElementById('h4-3').innerHTML = 'Self-Improvement Workshop';

  document.getElementById('h5-1').innerHTML = '1 hr | $70.00';
  document.getElementById('h5-2').innerHTML = '1 hr 30 min | $120.00';
  document.getElementById('h5-3').innerHTML = '45 min | $90.00';
}

let changeRight = () => {
  document.getElementById('h4-1').innerHTML = 'Corporate Life';
  document.getElementById('h4-2').innerHTML = 'Career Coaching';
  document.getElementById('h4-3').innerHTML = 'Group Coaching';

  document.getElementById('h5-1').innerHTML = '1 hr | $70.00';
  document.getElementById('h5-2').innerHTML = '1 hr | $80.00';
  document.getElementById('h5-3').innerHTML = '2 hr | $90.00';
}

let back = () => {
  document.getElementById('learn-more').classList.add('hide');
  document.getElementById('transparent').classList.remove('hide');
}

let learnMore = () => {
  document.getElementById('transparent').classList.add('hide');
  document.getElementById('learn-more').classList.remove('hide');
}

let learnMore1 = () => {
  document.getElementById('h4-more').innerHTML = document.getElementById('h4-1').textContent;
  document.getElementById('h5-more').innerHTML = document.getElementById('h5-1').textContent;
}

let learnMore2 = () => {
  document.getElementById('h4-more').innerHTML = document.getElementById('h4-2').textContent;
  document.getElementById('h5-more').innerHTML = document.getElementById('h5-2').textContent;
}

let learnMore3 = () => {
  document.getElementById('h4-more').innerHTML = document.getElementById('h4-3').textContent;
  document.getElementById('h5-more').innerHTML = document.getElementById('h5-3').textContent;
}