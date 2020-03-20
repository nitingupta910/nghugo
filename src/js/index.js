import('../css/index.scss');

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import('./main');

import('bootstrap');

import katex from 'katex';
import renderMathInElement from 'katex/dist/contrib/auto-render';

renderMathInElement(document.body, {
    delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
    ]
});
