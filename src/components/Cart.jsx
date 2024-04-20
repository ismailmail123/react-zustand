import { useEffect, useState } from "react";
import useStoreShoppingCartStore from "../store/useShoppingCartStor";

const Cart = () => {
    const cart = useStoreShoppingCartStore((state) => state.cart);
  
    const removeFromCart = useStoreShoppingCartStore((state) => state.removeFromCart);

    console.log("ini cart" , cart)
//     const [data, setData] = useState()
//     const getData =async () => {
//         try {
//           // Ambil data produk dari API
//           const response = await fetch('https://fakestoreapi.com/products');
//           const data = await response.json();
//           console.log("data", data)
//           setData(data)
//         } catch (error) {
//           console.error("Terjadi kesalahan dalam pengambilan data produk:", error);
//           // Anda dapat menangani kesalahan di sini sesuai kebutuhan
//         }
//       }
// useEffect(() => {
// getData()
// },[])

const locale = "id-ID";
  const option = {
    style: "currency",
    currency: "IDR",
  };
    return (
      <div>
        <h2>Keranjang Belanja</h2>
        <div className="card-container">
          {cart.map((productId) => (
            <div
            className='card-product'
            key={productId.id}>
              <img
              style={{width: "100px" }}
              src={productId.image} alt='photo' />
              <p>{productId.title}</p>
              <p>{new Intl.NumberFormat(locale, option).format(productId.price)}</p>
              <p>
              <i className="icon fa-solid fa-star"> </i>
              {productId.rating.rate}
              </p>
              <button onClick={() => removeFromCart(productId)}>Hapus dari Keranjang</button>
            </div>
            
            
          ))}
        </div>
      </div>
    );
  };

  export default Cart;
  