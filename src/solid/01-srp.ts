(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductServices {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log('Guardando en base de datos', product);
    }
  }

  class Mailer {
    private masterEmail: string = 'aaa@gmail.com'

    sendEmail(emailList: string[], template: string) {
      console.log('Enviando correo a los clientes');
    }
  }

  class ProductBloc {

    private productServices: ProductServices;
    private mailer: Mailer;
    constructor( productServices: ProductServices, mailer: Mailer) {
      this.productServices = productServices;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productServices.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productServices.saveProduct(product)
    }

    notifyClients() {
      this.mailer.sendEmail(['john@gmail.com'], 'Nuevo producto Template');
    }
  }

  class CartBloc {
    addToCart(productId: number) {
      console.log('Agregando al carrito', productId);
    }
  }

  const productServices = new ProductServices();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productServices, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);








})();