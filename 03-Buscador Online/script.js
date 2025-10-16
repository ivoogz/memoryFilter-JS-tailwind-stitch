
document.addEventListener("DOMContentLoaded", function () {

    console.log(productos)

    const busquedaUsuario = {
        capacidad: '',
        tipo: '',
        velocidad: '',
        marca: '',
        precioMin: '',
        precioMax: ''
    };



    const capacidad = this.querySelector('#capacidad');
    const tipo = this.querySelector('#tipo');
    const velocidad = this.querySelector('#velocidad');
    const marca = this.querySelector('#marca');
    const precio = this.querySelector('#precio');

    const btnBusqueda = this.querySelector('#btnBusqueda')

    const resultados = this.querySelector('#resultados')

    capacidad.addEventListener('change', (e) => {

        busquedaUsuario.capacidad = e.target.value;

    })

    tipo.addEventListener('change', (e) => {

        busquedaUsuario.tipo = e.target.value;

    })

    velocidad.addEventListener('change', (e) => {

        busquedaUsuario.velocidad = e.target.value;

    })

    marca.addEventListener('change', (e) => {

        busquedaUsuario.marca = e.target.value;

    })

    precio.addEventListener('change', (e) => {

        rangoPrecios = e.target.value;
        const valores = rangoPrecios.split('-');


        busquedaUsuario.precioMin = valores[0]
        busquedaUsuario.precioMax = valores[1]



    })

    btnBusqueda.addEventListener('click', () => {

        //Elimino busqueda anterior

        resultados.removeChild(resultados.firstChild);
        resultados.classList.remove('hidden')

        //Creo nuevo contenedor para pegar los resultados

        const divResultados = document.createElement('div');
        divResultados.classList.add('w-full');


        //Sumo titular al contenedor

        const titular = document.createElement('h2')
        titular.classList.add('text-center','text-4xl','m-4')

        //Sumo linea para dividir

        const linea = document.createElement('div')
        linea.classList.add('border-b-2')


        //Verificacion de consulta filtros con stock de productos

        const productosBusqueda = productos.filter(producto => {

            const cumpleCapacidad = !busquedaUsuario.capacidad || producto.capacidad == busquedaUsuario.capacidad;
            const cumpleTipo = !busquedaUsuario.tipo || producto.tipo == busquedaUsuario.tipo;
            const cumpleVelocidad = !busquedaUsuario.velocidad || producto.velocidad == busquedaUsuario.velocidad;
            const cumpleMarca = !busquedaUsuario.marca || producto.marca == busquedaUsuario.marca;
            const cumplePrecioMin = !busquedaUsuario.precioMin || producto.precio >= busquedaUsuario.precioMin;
            const cumplePrecioMax = !busquedaUsuario.precioMax || producto.precio <= busquedaUsuario.precioMax;


            return cumpleCapacidad && cumpleTipo && cumpleVelocidad && cumpleMarca && cumplePrecioMin && cumplePrecioMax;

        });

        //Si no hay resultados, mostrar mensaje

        if (productosBusqueda.length > 0) {
            titular.textContent = 'Resultados';
        }else if (productosBusqueda.length == 0){
            titular.textContent = 'No hay resultados';
        }else{
            console.log('error')
        }


        resultados.appendChild(divResultados);

        divResultados.appendChild(titular);

        divResultados.appendChild(linea);


        //Recorro los resultados

        for (let itemProducto of productosBusqueda) {

            const item = document.createElement('div')

            item.classList.add('flex', 'flex-row', 'm-auto', 'gap-4', 'border-b', 'p-5', 'border-white/10', 'justify-between')



            const itemCapacidad = document.createElement('p')
            const itemTipo = document.createElement('p')
            const itemVelocidad = document.createElement('p')
            const itemMarca = document.createElement('p')
            const itemPrecio = document.createElement('p')

            


            itemCapacidad.textContent = itemProducto.capacidad;
            itemTipo.textContent = itemProducto.tipo;
            itemVelocidad.textContent = itemProducto.velocidad;
            itemMarca.textContent = itemProducto.marca;
            itemPrecio.textContent = itemProducto.precio;


            divResultados.appendChild(item)

            item.appendChild(itemCapacidad)
            item.appendChild(itemTipo)
            item.appendChild(itemVelocidad)
            item.appendChild(itemMarca)
            item.appendChild(itemPrecio)


        };




    });





});