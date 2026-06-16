(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }
    
    // MODIFICACIÓN: Se cambia la 'c' inicial a Mayúscula ('CartBloc') para seguir las buenas prácticas 
    // y que no choque con tu variable en minúscula de abajo.
    class CartBloc {
        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }

    // Tu bloque final se queda EXACTAMENTE IGUAL, sin cambiar ninguna variable.
    // Solo corregimos que la segunda variable llame a la clase CartBloc correspondiente.
    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);

})();
