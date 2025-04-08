const rootStyles = document.documentElement.style;

const amountScroll = document.getElementById('amount-scroll');
const advanceBar = document.getElementById('advance-bar');

const changeRGB = document.getElementById('rgb-color');
const changeHEX = document.getElementById('hex-color');

const mouseBox = document.getElementById('mouse-box');

//scrollY: cuántos px se ha desplazado el usuario verticalmente desde arriba.
//innerHeight: alto visible de la ventana del navegador
//.scrollHeight: alto total del contenido de la página

amountScroll.textContent = `Scroll se ha desplazado 0px`;

const calculateScroll = () => {
  let calculateScroll = Math.floor(window.scrollY);
  amountScroll.textContent = `Scroll se ha desplazado ${calculateScroll}px`;
};
document.addEventListener('scroll', calculateScroll);

const chachgeScrollBar = () => {
  let amountScroll =
    (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight);
  rootStyles.setProperty('--bar-width', `${amountScroll}%`);
};
document.addEventListener('scroll', chachgeScrollBar);

const generateRGBNumber = () => {
  const aleatoryNumberRGB = Math.floor(Math.random() * 256);
  return aleatoryNumberRGB;
};

const aleatoryRGB = () => {
  rootStyles.setProperty(
    '--background-color',
    `rgb(${generateRGBNumber()}, ${generateRGBNumber()}, ${generateRGBNumber()})`
  );
};
changeRGB.addEventListener('click', aleatoryRGB);

const generateHEXcharacter = () => {
  const characters = 'ABCDEF0123456789';
  const aleatoryNumber = Math.floor(Math.random() * characters.length);
  const aleatoryHEXCharacter = characters.charAt(aleatoryNumber);
  return aleatoryHEXCharacter;
};

const aleatoryHEX = () => {
  let generateHEX = '';
  for (let i = 0; i < 6; i++) {
    generateHEX += generateHEXcharacter();
  }
  rootStyles.setProperty('--background-color', `#${generateHEX}`);
};
changeHEX.addEventListener('click', aleatoryHEX);

const moveMouseBox = event => {
  rootStyles.setProperty('--positionX', `${event.x}px`);
  rootStyles.setProperty('--positionY', `${event.y}px`);
  console.dir(event);
};

document.addEventListener('mousemove', moveMouseBox);
