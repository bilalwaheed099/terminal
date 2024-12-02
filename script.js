const texter = document.querySelector('.texter');
const cursor = document.querySelector('.cursor');
const typer = document.querySelector('.typer');
const list = document.querySelector('.list');

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    // cursor.style.left += 10;
    typer.innerHTML = typer.textContent.substring(0, typer.textContent.length - 1);
  } else if (e.key === 'Enter') {
    console.log('Enter pressed');
    let el = document.createElement('div');
    let el3 = document.createElement('p');
    let el4 = document.createElement('span');
    el.classList.add('container');
    el3.innerHTML = 'root@terminal>&nbsp;';
    el4.innerHTML = typer.innerHTML;
    el.appendChild(el3);
    el.appendChild(el4);
    let pa = document.createElement('p');
    pa.innerHTML = 'Commands coming soon!';
    pa.className = 'tran';
    list.insertAdjacentElement('beforeend', el);
    list.insertAdjacentElement('beforeend', pa);
    typer.textContent = '';
  } else if (e.key === ' ') {
    typer.innerHTML += '&nbsp;';
  } else if (e.key !== 'Shift') {
    typer.innerHTML += e.key;
  }
});
