const btn = document.querySelector('.btn');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


const pasiveBtn = btn.addEventListener('click', function() {
    one.classList.toggle('pasive');
  
}
);

const activeBtn = btn.addEventListener('click', function() {
    two.classList.toggle('active');
}
);



