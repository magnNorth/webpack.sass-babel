import  home   from './module_home/home'
import './core/core.scss';

let word = 'hello'; 
console.log( word +  ' ' + home.data ); 

var contentFrame = document.getElementById('home_content');
contentFrame.innerHTML = word +  ' ' + home.data;