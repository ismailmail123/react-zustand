// store.js
import create from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  selectedProducts: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),
  toggleProductSelection: (productId) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.includes(productId)
        ? state.selectedProducts.filter((id) => id !== productId)
        : [...state.selectedProducts, productId],
    })),
  deleteSelectedProducts: () =>
    set((state) => ({
      products: state.products.filter(
        (product) => !state.selectedProducts.includes(product.id)
      ),
      selectedProducts: [],
    })),
  deleteAllProducts: () =>
    set((state) => ({
      products: [],
      selectedProducts: [],
    })),
}));

export default useProductStore;
