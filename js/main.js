var navButton = document.querySelector('.nav-icon');
 navButton.addEventListener('click', function() {
 console.log('clicky!!!');
 document
   .querySelector('body')
   .classlist
   .toggle('nav-open');
 });

 var closeButton = document.querySelector('.close-icon');
 closeButton.addEventListener('click', function() {
 console.log('close it!');
 document
   .querySelector('body')
   .classlist
   .toggle('nav-open');
 });
