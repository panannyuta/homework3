document.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelectorAll('.styledbutton');
  
    box.forEach(function (styledbutton) {
      styledbutton.addEventListener('click', function () {
        if (styledbutton.style.backgroundColor === 'lightsteelblue') {
          styledbutton.style.backgroundColor = 'yellow';
          styledbutton.style.marginLeft = '2vw';
          styledbutton.style.marginRight = '2vw';
          console.log('change color');
        } else {
          styledbutton.style.backgroundColor = 'lightsteelblue';
          styledbutton.style.marginLeft = '1vw';
          styledbutton.style.marginRight = '1vw';
        }
      });
    });
});