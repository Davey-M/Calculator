const buttons = document.getElementsByClassName('button');
const display = document.getElementById('display');

const allowed_chars = ['1','2','3','4','5','6','7','8','9','0','-','+','x','*','/','.',];

function button_press(char)
{
  console.log(char);
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