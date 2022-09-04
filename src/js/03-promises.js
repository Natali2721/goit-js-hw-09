import Notiflix from 'notiflix';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  //console.log(formElem.delay.value);
  //console.log(formElem.amount.value);
  //console.log(formElem.step.value);

  let delay = Number(formElem.delay.value);
  //console.log(delay);
  const amount = Number(formElem.amount.value);
  const step = Number(formElem.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));

    delay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
      //Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
/*
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


createPromise(2, 100)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  */
