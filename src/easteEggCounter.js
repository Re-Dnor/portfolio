export default function easteEggCounter() {
  const easterEgg = document.getElementById('easterEgg');
  const age = document.getElementById('age');
  const myAge = 26;
  let i = 0;

  function stopDefAction(evt) {
    evt.preventDefault();
    i += 1;
    console.log(myAge);
    age.innerHTML = `${i}`;
    if (i === myAge) {
      easterEgg.src = './img/OMG.jpg';
      easterEgg.removeEventListener('click', stopDefAction);
    }
  };
  easterEgg.addEventListener('click', stopDefAction);
}