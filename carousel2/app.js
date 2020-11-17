let elements = document.querySelectorAll('div ul li');
let index = 0;

const isInViewport = function (elem) {
    try {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } catch (TypeError) {
        return false;
    }
};

const show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), elements.length-1);

  while ( 0 < index && index < elements.length-1 && isInViewport(elements[index])) {
      index += increase;
    //   console.log("Looping", index)
  }
  elements[index].scrollIntoView({behavior: 'smooth'});
}