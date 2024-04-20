import create from 'zustand';

const useStoreShoppingCartStore = create((set) => ({
  products: [], // Daftar produk
  cart: [], // Keranjang belanja

  addToCart: (productId) =>
    set((state) => ({
      cart: [...state.cart, productId],
    })),

    fetchProducts: async () => {
        try {
          // Ambil data produk dari API
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          set({ products: data }); // Tetapkan data produk ke state
        } catch (error) {
          console.error("Terjadi kesalahan dalam pengambilan data produk:", error);
          // Anda dapat menangani kesalahan di sini sesuai kebutuhan
        }
      },

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((id) => id !== productId),
    })),

}));


export default useStoreShoppingCartStore;