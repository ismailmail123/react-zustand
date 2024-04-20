import React, { useEffect } from 'react';
import useStoreShoppingCartStore from '../store/useShoppingCartStor';
import Cart from './Cart';

const ListProductCart = () => {
  const products = useStoreShoppingCartStore((state) => state.products);
  const fetchProducts = useStoreShoppingCartStore((state) => state.fetchProducts);
  const addToCart = useStoreShoppingCartStore((state) => state.addToCart);
  const removeFromCart = useStoreShoppingCartStore((state) => state.removeFromCart);
  const cart = useStoreShoppingCartStore((state) => state.cart);
  console.log("ini produk", products)
  console.log("add to cart", cart)

  useEffect(() => {
    fetchProducts()
      .then(() => console.log("Data produk berhasil dimuat:", useStoreShoppingCartStore.getState().products))
      .catch((error) => console.error("Gagal memuat data produk:", error));
  }, []);

  const locale = "id-ID";
  const option = {
    style: "currency",
    currency: "IDR",
  };

  return (
    <div className='container'>
    <h2>Daftar Produk</h2>
    <div className='card-container'>
        {products.map((product) => (
          <div
          className='card-product'
          key={product.id}>
            <img
            style={{width: "100px" }}
            src={product.image} alt='photo' />
            <p>{product.title}</p>
            <p>{new Intl.NumberFormat(locale, option).format(product.price)}</p>
            <p>
            <i className="icon fa-solid fa-star"> </i>
            {product.rating.rate}
            </p>
            <button onClick={() => addToCart(product)}>Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
      <Cart />
  </div>
  );
};

export default ListProductCart;
