class Propietario {
    constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    }

    datosPropietario() {
    return `Nombre: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
    }
    }

    class Animal {
    constructor(tipo) {
    this.tipo = tipo;
    }
    get tipo() {
    return `El tipo de animal es un: ${this.tipo}`;
    }
    }

    class Mascota extends Animal {
    constructor(nombre, enfermedad, tipo) {
    super(tipo);
    this._nombre = nombre;
    this._enfermedad = enfermedad;
    }

    get nombre() {
    return this._nombre;
    }

    set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
    }

    get enfermedad() {
    return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
    }
    }
    const formulario = document.getElementById('form');
    const botonAgregar = document.getElementById('boton-agregar');
    const listaDatos = document.getElementById('lista-datos');
    
    botonAgregar.addEventListener('click', () => {
    const nombrePropietario = document.getElementById('nombre-propietario').value;
    const direccionPropietario = document.getElementById('direccion-propietario').value;
    const telefonoPropietario = document.getElementById('telefono-propietario').value;
    const tipoAnimal = document.getElementById('tipo-animal').value;
    const nombreAnimal = document.getElementById('nombre-animal').value;
    const enfermedadAnimal = document.getElementById('enfermedad-animal').value;
    
    const propietario = new Propietario(nombrePropietario, direccionPropietario, telefonoPropietario);
    const mascota = new Mascota(nombreAnimal, enfermedadAnimal, tipoAnimal);
    
    const mensaje = `Datos Agregados\nEl nombre del dueño es: ${propietario.nombrePropietario}. El domicilio es: ${propietario.direccionPropietario}. y el numero telefonico de contacto: ${propietario.telefonoPropietario}.\nEl tipo de animal es un: ${mascota.tipo}. mientras que el nombre de la mascota es: ${mascota.nombre} y la enfermedad es: ${mascota.enfermedad}.`;
    
    const listItem = document.createElement('li');
    listItem.textContent = mensaje;
    listaDatos.appendChild(listItem);
    
    formulario.reset();
    });
    