window.addEventListener('click', function() {
    console.log('window');
},true);

document.addEventListener('click', function() {
    console.log('document');
},true );

document.querySelector('.div2').addEventListener(
   'click', function(e) {
    console.log('DIV2');
   },true );

document.querySelector('.div1').addEventListener(
    'click', function(e ) {
        // e.stopPropagation()
     console.log('DIV1');
    },true);

document.querySelector('.button').addEventListener(
    'click', function(e) {
        e.target.innerText = 'clicked!'
        console.log(e.target.innerTarget = 'Clicked!');
    },true);   


    // Added a function where if I click on a sport, it will log to the console that the sport is clicked. 
    document.querySelector("#sports").addEventListener(
       'click', (e) => {
           e.stopPropagation()
             console.log(e.target.getAttribute("id") + " is clicked");
       }, true
    )