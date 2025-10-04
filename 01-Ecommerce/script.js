
const btns = document.querySelectorAll('.btnCarrito');

const btnCarritoAbrir = document.getElementById('mostrarCarrito');

const btnCarritoCerrar = document.getElementById('cerrarCarrito');

const carritoCompleto = document.getElementById('carritoCompleto');

const ventanaCarrito = document.getElementById('ventanaCarrito');



//Evento click para mostrar carrito

// btnCarrito.addEventListener('click', mostrarCarrito)

//Abrir carrito

btnCarritoAbrir.addEventListener('click', () => {
    ventanaCarrito.classList.remove('noMostrar');
    ventanaCarrito.classList.add('mostrar');
})

//Cerrar carrito

btnCarritoCerrar.addEventListener('click', () => {
    ventanaCarrito.classList.remove('mostrar');
    ventanaCarrito.classList.add('noMostrar');
})




//Sumar productos al carrito

btns.forEach(btn => {
    btn.addEventListener('click', () => {       

        //Guardo el contenido del titulo y precio en variables

        let nombre = btn.parentElement.children[1].children[0].innerHTML;
        let precio = btn.parentElement.children[1].children[1].innerHTML;
        let img = btn.parentElement.children[0];


        //Declaro las variables con las etiquetas que voy a usar.

        let productoHtml = document.createElement('div');
        let imgHtml = document.createElement('img');
        let nombreHtml = document.createElement('p');
        let precioHtml = document.createElement('p');
        let btnDelete = document.createElement('p');
        



        imgHtml.src = img.src
        nombreHtml.textContent = nombre
        precioHtml.textContent = precio
        btnDelete.textContent = 'X';


       
        productoHtml.classList.add('prodCarrito')
        imgHtml.classList.add('icon')
        btnDelete.classList.add('btnDelete')
        

        carritoCompleto.appendChild(productoHtml)

        productoHtml.appendChild(imgHtml)
        productoHtml.appendChild(nombreHtml)
        productoHtml.appendChild(precioHtml)
        productoHtml.appendChild(btnDelete)
        


        textoCarrito();
        

    });
});


//Borrar productos carrito

document.addEventListener('click', (e) => {

    if (e.target.classList.value == 'btnDelete') {

        console.log(e.target.parentElement)
        productoDel = e.target.parentElement;

        productoDel.remove()

    }

    textoCarrito();

    
})  





function textoCarrito() {
    if (carritoCompleto.children.length > 0) {
        carritoCompleto.parentElement.children[0].textContent = 'Tu carrito';

    }else{
        let navCarrito = carritoCompleto.parentElement;
        navCarrito.children[0].textContent = 'Tu carrito esta vacio';
    }
}