import createElement from './vdom/createElement.js';
import render from './vdom/render.js';
import mount from './vdom/mount.js'

console.log("Hello nerds!");
const vApp = createElement('div', {
    attrs: {
        id: 'app',
    },
    children: [
       createElement('img', {
           attrs:{
            src: "https://media.giphy.com/media/MUooCKgTgMDnVtWUFF/giphy.gif"
           },
        }), 
    ],
});

const $app = render(vApp);

mount($app, document.getElementById('app'));

console.log($app);