var iconBurger = document.querySelector('#icon__burger');
var modal = document.querySelector('#modal');
var plus = document.querySelector('#plus');
var block2 = document.querySelector('#block2');
var plus2 = document.querySelector('#plus2');
var block2_2 = document.querySelector('#block2_2');
var plus3 = document.querySelector('#plus3');
var block2_3 = document.querySelector('#block2_3');
var plus4 = document.querySelector('#plus4');
var block2_4 = document.querySelector('#block2_4');
var plus5 = document.querySelector('#plus5');
var block2_5 = document.querySelector('#block2_5');
var plus6 = document.querySelector('#plus6');
var block2_6 = document.querySelector('#block2_6');
var span1 = document.querySelector('#span1');
var span1_2 = document.querySelector('#span1_2');
var span2 = document.querySelector('#span2');
var span2_2 = document.querySelector('#span2_2');
var span3 = document.querySelector('#span3');
var span3_2 = document.querySelector('#span3_2');
var span4 = document.querySelector('#span4');
var span4_2 = document.querySelector('#span4_2');
var span5 = document.querySelector('#span5');
var span5_2 = document.querySelector('#span5_2');
var span6 = document.querySelector('#span6');
var span6_2 = document.querySelector('#span6_2');
var burgerSpan1 = document.querySelector('#burger_span1');
var burgerSpan2 = document.querySelector('#burger_span2');
var burgerSpan3 = document.querySelector('#burger_span3');
var header = document.querySelector('#header_before');

iconBurger.addEventListener('click', function() {
    this.classList.toggle('opened');
    header.classList.toggle('opened');
    modal.classList.toggle('opened');
    burgerSpan1.classList.toggle('opened');
    burgerSpan2.classList.toggle('opened');
    burgerSpan3.classList.toggle('opened');
});

plus.addEventListener('click', function() {

    this.classList.toggle('opened');
    block2.classList.toggle('opened');
    span1.classList.toggle('opened');
    span1_2.classList.toggle('opened');
    
});

plus2.addEventListener('click', function() {

    this.classList.toggle('opened');
    block2_2.classList.toggle('opened');
    span2.classList.toggle('opened');
    span2_2.classList.toggle('opened');
    
});

plus3.addEventListener('click', function() {

    this.classList.toggle('opened');
    block2_3.classList.toggle('opened');
    span3.classList.toggle('opened');
    span3_2.classList.toggle('opened');
    
});

plus4.addEventListener('click', function() {

    this.classList.toggle('opened');
    block2_4.classList.toggle('opened');
    span4.classList.toggle('opened');
    span4_2.classList.toggle('opened');
    
});

plus5.addEventListener('click', function() {

    this.classList.toggle('opened');
    block2_5.classList.toggle('opened');
    span5.classList.toggle('opened');
    span5_2.classList.toggle('opened');
    
});

plus6.addEventListener('click', function() {

    this.classList.toggle('opened');
    block2_6.classList.toggle('opened');
    span6.classList.toggle('opened');
    span6_2.classList.toggle('opened');
    
});