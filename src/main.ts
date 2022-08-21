
const ratingLabels = document.querySelectorAll<HTMLLabelElement>('label');
const btnsubmit = document.querySelector<HTMLButtonElement>('#submit');
const ratingcard = document.querySelector<HTMLDivElement>('#ratingcard');
const thankyoucard = document.querySelector<HTMLDivElement>('#thankyoucard');

let ratingValue: string | undefined

function activateOption(label: HTMLLabelElement) {
  ratingLabels.forEach(label => { 
    label.parentElement?.classList.remove('active');
    document.getElementById(label.htmlFor)?.setAttribute('checked', 'unchecked');
  })
  const Input = document.querySelector<HTMLInputElement>(`#${label.htmlFor}`);
  Input?.setAttribute('checked', 'checked');
  ratingValue = Input?.value
  label.parentElement?.classList.add('active');
}

function submitRating() {
  if (ratingValue) { 
    const rating = document.querySelector<HTMLSpanElement>('#rating');
    rating!.innerText = ratingValue;
    ratingcard?.classList.add('hidden')
    thankyoucard?.classList.remove('hidden')
    ratingcard?.classList.remove('card')
    thankyoucard?.classList.add('card')
  } 
  return false;
}


document.addEventListener('DOMContentLoaded', () => { 
  ratingLabels.forEach(label => {
    label.addEventListener('click', (e) => {
      e.preventDefault();
      activateOption(label);
    } );
  });
  btnsubmit?.addEventListener('click', (e) => { 
    e.preventDefault();
    btnsubmit.setAttribute('disabled', 'true');
    btnsubmit.setAttribute('class', 'disabled');
    btnsubmit.innerText = 'Submitting...';
    setTimeout(() => {
      submitRating();
    }, 1000);
    // btnsubmit.removeAttribute('disabled');
    // btnsubmit.classList.remove('disabled');
  })
})

export { };

