window.addEventListener('click', function() {
    console.log('window');
}, );

document.addEventListener('click', function() {
    console.log('document');
}, );

document.querySelector('.div2').addEventListener(
   'click', function() {
    console.log('DIV2');
   }, );

document.querySelector('.div1').addEventListener(
    'click', function() {
     console.log('DIV1');
    }, );

document.querySelector('button').addEventListener(
    'click', function(e) {
        console.log(e.target.innerTarget = 'Clicked!');
    }, );   