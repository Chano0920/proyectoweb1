function brs(recuadro, n_br) {
    for (let i = 0; i < n_br; i++) {
        let br  = [];
        br[i]= document.createElement('br');
        recuadro.appendChild(br[i]);
    }
}

// RECUADRO 1
let recuadro1 = document.createElement('div');
document.body.appendChild(recuadro1);
recuadro1.classList.add('cuadro1');

let titulo_recuadro1 = document.createElement('h1');
titulo_recuadro1.innerText = 'Weight Training';
recuadro1.classList.add('titulo_recuadro1');
recuadro1.appendChild(titulo_recuadro1);

brs(recuadro1, 5);

let text_recuadro1 = document.createElement('p');
text_recuadro1.innerText = 'Weight training, also known as resistance training, is a type of physical exercise that uses weights to build strength and muscle mass.';
text_recuadro1.classList.add('text_recuadro1');
recuadro1.appendChild(text_recuadro1);


// RECUADRO 2
let recuadro2 = document.createElement('div');
document.body.appendChild(recuadro2);
recuadro2.classList.add('cuadro2');

let titulo_recuadro2 = document.createElement('h1');
titulo_recuadro2.innerText = '7 Day FREE Trial';
recuadro2.classList.add('titulo_recuadro2');
recuadro2.appendChild(titulo_recuadro2);

brs(recuadro2, 2);

let text_recuadro2 = document.createElement('p');
text_recuadro2.innerText = 'A 7-day free trial is a period of time during which you can use a product or service for free.7 Day FREE Trial';
text_recuadro2.classList.add('text_recuadro2');
recuadro2.appendChild(text_recuadro2)


// REACUADRO 3
let recuadro3 = document.createElement('div');
document.body.appendChild(recuadro3);
recuadro3.classList.add('cuadro3');

let titulo_recuadro3 = document.createElement('h1');
titulo_recuadro3.innerText = 'Cardio Workouts';
recuadro3.classList.add('titulo_recuadro3');
recuadro3.appendChild(titulo_recuadro3);

brs(recuadro3, 12);

let text_recuadro3 = document.createElement('p');
text_recuadro3.innerText = 'This is a Cardio workouts are a great way to improve your cardiovascular health, lose weight, and reduce your risk of chronic diseases.paragraph';
text_recuadro3.classList.add('text_recuadro3');
recuadro3.appendChild(text_recuadro3);


//RECUADRO 4
let recuadro4 = document.createElement('div');
document.body.appendChild(recuadro4);
recuadro4.classList.add('cuadro4');

let titulo_recuadro4 = document.createElement('h1');
titulo_recuadro4.innerText = 'Training Programs';
titulo_recuadro4.classList.add('titulo_recuadro4');
recuadro4.appendChild(titulo_recuadro4);


// RECUADRO 5
let recuadro5 = document.createElement('div');
recuadro5.innerText = 'Agility Training';
document.body.appendChild(recuadro5);
recuadro5.classList.add('cuadro5');


// RECUADRO 6
let recuadro6 = document.createElement('div');
recuadro6.innerText = 'Fitness';
document.body.appendChild(recuadro6);
recuadro6.classList.add('cuadro6');

// RECUADRO 7
let recuadro7 = document.createElement('div');
document.body.appendChild(recuadro7);
recuadro7.classList.add('cuadro7');

let titulo_recuadro7 = document.createElement('h1');
titulo_recuadro7.innerText = 'Book a Session';
titulo_recuadro7.classList.add('titulo_recuadro7');
recuadro7.appendChild(titulo_recuadro7);


let formulario = document.createElement('form');
recuadro7.appendChild(formulario);

let input = document.createElement('input');
formulario.appendChild(input);
input.classList.add('input1');
input.setAttribute('type', 'text');
input.placeholder = 'Name';

brs(formulario, 3);

let input2 = document.createElement('input');
formulario.appendChild(input2);
input2.classList.add('input2');
input2.placeholder = 'Email Address';

brs(formulario, 3);
let textArea = document.createElement('textarea');
formulario.appendChild(textArea);
textArea.classList.add('textarea1');
textArea.placeholder = 'Message';
textArea.rows = '6';

brs(formulario, 2);

let button = document.createElement('button');
formulario.appendChild(button);
button.classList.add('button1');
button.innerText = 'Send Message';

// RECUADRO 8
let recuadro8 = document.createElement('div');
document.body.appendChild(recuadro8);
recuadro8.classList.add('cuadro8');

let titulo_recuadro8 = document.createElement('h1');
titulo_recuadro8.innerText = '{;}CODEWATCHERS';
titulo_recuadro8.classList.add('titulo_recuadro8');
recuadro8.appendChild(titulo_recuadro8);