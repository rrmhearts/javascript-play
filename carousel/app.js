/* label the images, just for convenience, to visually track them */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}


let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

/* configuration */
let width = parseInt(getComputedStyle(listElems[0]).width, 10); // image width
let count = parseInt(
    getComputedStyle(document.documentElement)
        .getPropertyValue('--num-images'), 10); // visible images count

let position = 0; // ribbon scroll position

carousel.querySelector('.prev').onclick = function() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};