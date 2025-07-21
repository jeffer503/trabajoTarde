const productos = [
  { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500 },
  { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
  { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
  { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
  { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

  { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
  { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
  { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
  { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
  { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

  { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
  { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
  { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
  { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
  { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

  { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
  { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
  { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
  { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
  { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },
];

// Selección de elementos
const contenedor = document.getElementById("contenedor-productos");
const totalTexto = document.getElementById("total-productos");
const selector = document.getElementById("selector-categoria");

// Función principal para mostrar productos 
function mostrarProductosDeCategoria(categoria) {
  contenedor.innerHTML = "";
  let total = 0;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === categoria) {
      const producto = productos[i];
      total++;
      contenedor.innerHTML += `
        <div class="rounded-2xl bg-white p-6 shadow-md">
          <img
            src="https://via.placeholder.com/200x150?text=${encodeURIComponent(producto.nombre)}"
            alt="Nombre producto"
            class="mb-4 h-48 w-full rounded-lg object-cover"
          />
          <h2 class="mb-2 text-xl font-semibold">${producto.nombre}</h2>
          <p class="mb-1 text-gray-700">$${producto.precio}</p>
          <span class="rounded-full bg-blue-100 px-2 py-1 text-sm text-blue-800">${producto.categoria}</span>
        </div>
      `;
    }
  }

  totalTexto.textContent = `Total de productos mostrados: ${total}`;
}

// Evento al cambiar categoría
selector.addEventListener("change", function () {
  mostrarProductosDeCategoria(this.value);
});

// Mostrar categoría por defecto
mostrarProductosDeCategoria(selector.value);
