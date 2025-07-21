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

 // Imagenes 
function obtenerImagen(nombreProducto) {
  if (nombreProducto.includes("Laptop")) return "https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png";
  if (nombreProducto.includes("Celular")) return "https://images.samsung.com/is/image/samsung/assets/co/support/hhp/activarpaneledge1.png?$ORIGIN_PNG$";
  if (nombreProducto.includes("Auriculares")) return "https://www.jbl.com.pe/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa560efe3/JBL_Tune_770NC_Box%20Image_Side_Black_SKU_1605x1605.png?sw=537&sfrm=png";
  if (nombreProducto.includes("Mouse")) return "https://cdn.memorykings.pe/files/2024/12/18/351469-MK038314-D.jpg";
  if (nombreProducto.includes("Teclado")) return "https://hca.pe/storage/media/large_dA3As37ZiiLI7wRSA6m9uKL3wtoaCiIku9aQKgth.png";

  if (nombreProducto.includes("Sofá")) return "https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-contemporary-grey-fabric-sofa-with-sleek-wooden-legs-png-image_16160884.png";
  if (nombreProducto.includes("Mesa")) return "https://png.pngtree.com/png-clipart/20250424/original/pngtree-dinning-table-set-top-view-icon-dining-household-png-image_20854538.png";
  if (nombreProducto.includes("Lámpara")) return "https://png.pngtree.com/png-clipart/20250209/original/pngtree-vintage-floor-lamp-with-shade-png-image_19783656.png";
  if (nombreProducto.includes("Alfombra")) return "https://png.pngtree.com/png-clipart/20230421/original/pngtree-persian-carpet-png-image_9073245.png";
  if (nombreProducto.includes("Silla")) return "https://cdn3d.iconscout.com/3d/premium/thumb/silla-ergonomica-de-oficina-14851888-11985449.png";

  if (nombreProducto.includes("Remera")) return "https://png.pngtree.com/png-clipart/20241125/original/pngtree-d-white-tshirt-mockup-and-shirt-clipart-icon-isolated-on-transparent-png-image_17306892.png";
  if (nombreProducto.includes("Pantalón")) return "https://png.pngtree.com/png-clipart/20220103/original/pngtree-blue-men-s-jeans-in-back-views-isolated-png-and-psd-png-image_7020960.png";
  if (nombreProducto.includes("Campera")) return "https://dainese-cdn.thron.com/delivery/public/image/dainese/793b39d8-3f77-47af-b1b1-5341df963231/px6qct/std/450x450/201533877_001_1.png?format=webp&quality=auto-medium";
  if (nombreProducto.includes("Zapatillas")) return "https://static.nike.com/a/images/w_1280,q_auto,f_auto/ymx26vc7gw9uczlgiuki/nike-air-max-95-big-logo-dust-volt-release-date.jpg";
  if (nombreProducto.includes("Gorra")) return "https://neweraco.vtexassets.com/assets/vtex.file-manager-graphql/images/1f85a901-d7a2-4a2b-902c-8d691860f03e___bec6d1c0e69a9c3f84fcadc7fc2e453c.png";

  if (nombreProducto.includes("Martillo")) return "https://cdnx.jumpseller.com/ferroelectronic/image/25296582/resize/540/600?1697570983";
  if (nombreProducto.includes("Taladro")) return "https://cdn.makitatools.com/apps/cms/img/xfd/253eda01-0df1-4fdc-ba70-34e5a12510d5_xfd10z_p_1500px.png";
  if (nombreProducto.includes("Caja")) return "https://dojiw2m9tvv09.cloudfront.net/79550/product/cjh17m5113.png";
  if (nombreProducto.includes("Destornillador")) return "https://qsbtools.com/wp-content/uploads/2024/01/B60275-DESTORNILLADOR-ESTRELLA-qsb.png";
  if (nombreProducto.includes("Cinta")) return "https://oechsle.vteximg.com.br/arquivos/ids/17698931/image-13d6830a871e461e8c6d4aa98e398d2d.jpg?v=638507414271000000";

  return "img/default.jpg";
}

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
            src="${obtenerImagen(producto.nombre)}"
            alt="${producto.nombre}
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
