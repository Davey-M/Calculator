const buttons = document.getElementsByClassName('button');
const display = document.getElementById('display');

const allowed_chars = ['1','2','3','4','5','6','7','8','9','0','-','+','x','X','*','/','.','!','c','C','=','CE','^'];
const numbers = ['1','2','3','4','5','6','7','8','9','0',];
const multipliers = ['x','X','*'];

function button_press(char)
{
  if (!allowed_chars.includes(char))
  {
    return
  }

  if (multipliers.includes(char))
  {
    char = 'x';
  }
  
  if (numbers.includes(char))
  {
    display.innerText += char
  }
  else if (char === 'c' || char === 'C')
  {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
  }
  else if (char === 'CE')
  {
    display.innerText = '';
  }
  else if (char === '=')
  {
    let dis = display.innerHTML.toString();
    let equation = dis.split('x').join('*').split('&nbsp;').join(' ').split(' ');
    console.log(equation);
  }
  else
  {
    display.innerHTML += ' ' + char + '&nbsp';
  }
}

for (let b of buttons)
{
  b.addEventListener('click', () => {
    button_press(b.textContent);
  })
}

window.addEventListener('keypress', e => {
  button_press(e.key);
})