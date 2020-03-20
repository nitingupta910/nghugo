import('../css/index.scss');

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import('bootstrap');
import '@fortawesome/fontawesome-free/js/all'

import katex from 'katex';
import renderMathInElement from 'katex/dist/contrib/auto-render';

renderMathInElement(document.body, {
    delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
    ]
});

window.addEventListener('DOMContentLoaded', (event) => {
});

import('./main');
