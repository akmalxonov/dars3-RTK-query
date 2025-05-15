import { api } from "./index";

const todoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => ({
        url: "/products",
        providesTags: ["Products"],
      }),
    }),
    addProduct: build.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});
export const { useGetTodosQuery,useAddProductMutation,useDeleteProductMutation,useUpdateProductMutation } = todoApi;
