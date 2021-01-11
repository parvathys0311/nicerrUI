
let select = document.querySelector('.selectSeeker');
console.log(select);

select.onchange = function colorChange() {
  console.log("1");
  if (select.value != 'null') {
    console.log('yes');
    select.style.color = '#00ff00';
  } else {
    select.style.color = '#c2c2c2';
  }
}
