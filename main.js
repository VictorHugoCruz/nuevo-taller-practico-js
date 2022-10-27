const itemFigGeo = document.querySelector('#figGeo');
const itemPorcDesc = document.querySelector('#porcDesc');
const itemEstdBas = document.querySelector('#estdBas');
const itemAnalisisSal = document.querySelector('#analisisSal');

const secFigGeo = document.querySelector('#secFigGeo');
const secPorcDesc = document.querySelector('#secPorcDesc');
const secEstBas = document.querySelector('#secEstdBas');
const secAnalisisSal = document.querySelector('#secAnalisisSal');


itemFigGeo.addEventListener('click', selectedFigGeo);
itemPorcDesc.addEventListener('click', selectedPorDesc);
itemEstdBas.addEventListener('click', selectedEstdBas);
itemAnalisisSal.addEventListener('click', selectedAnalisisSal);

function selectedFigGeo(){
  itemFigGeo.classList.add('nav__link--active');
  itemPorcDesc.classList.remove('nav__link--active');
  itemEstdBas.classList.remove('nav__link--active');
  itemAnalisisSal.classList.remove('nav__link--active');

  secFigGeo.classList.remove('main__section-active');
  secPorcDesc.classList.add('main__section-active');
  secEstBas.classList.add('main__section-active');
  secAnalisisSal.classList.add('main__section-active');
}

function selectedPorDesc(){
  itemFigGeo.classList.remove('nav__link--active');
  itemPorcDesc.classList.add('nav__link--active');
  itemEstdBas.classList.remove('nav__link--active');
  itemAnalisisSal.classList.remove('nav__link--active');

  secFigGeo.classList.add('main__section-active');
  secPorcDesc.classList.remove('main__section-active');
  secEstBas.classList.add('main__section-active');
  secAnalisisSal.classList.add('main__section-active');
}
function selectedEstdBas(){
  
  itemFigGeo.classList.remove('nav__link--active');
  itemPorcDesc.classList.remove('nav__link--active');
  itemEstdBas.classList.add('nav__link--active');
  itemAnalisisSal.classList.remove('nav__link--active');

  secFigGeo.classList.add('main__section-active');
  secPorcDesc.classList.add('main__section-active');
  secEstBas.classList.remove('main__section-active');
  secAnalisisSal.classList.add('main__section-active');
}

function selectedAnalisisSal(){
  
  itemFigGeo.classList.remove('nav__link--active');
  itemPorcDesc.classList.remove('nav__link--active');
  itemEstdBas.classList.remove('nav__link--active');
  itemAnalisisSal.classList.add('nav__link--active');

  secFigGeo.classList.add('main__section-active');
  secPorcDesc.classList.add('main__section-active');
  secEstBas.classList.add('main__section-active');
  secAnalisisSal.classList.remove('main__section-active');
}
console.log('hola');