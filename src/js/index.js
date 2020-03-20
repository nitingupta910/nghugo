import('../css/index.scss');

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import('bootstrap');
import '@fortawesome/fontawesome-free/js/all'

import katex from 'katex';
import renderMathInElement from 'katex/dist/contrib/auto-render';
//const katex = require('katex/dist/contrib/auto-render');
//import('katex/dist/contrib/auto-render');
//import * as ktx from 'katex/dist/contrib/auto-render';
//console.log(katex);
//console.log("================");
//console.log(renderMathInElement);
renderMathInElement(document.body, {
    delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
    ]
});

window.addEventListener('DOMContentLoaded', (event) => {
});

import('./main');
