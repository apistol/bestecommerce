import React from 'react';
import Product from '@/app/(routes)/product/page'; // Actualizați calea conform structurii dvs.
import { getSingleProduct, getProducts } from '@/app/utils';

export async function getServerSideProps(context) {
  const { productId } = context.params;
  const dataProduct = await getSingleProduct(productId);
  const relatedProducts = await getProducts();

  return {
    props: {
      dataProduct,
      relatedProducts,
    },
  };
}

const ProductPage = ({ dataProduct, relatedProducts }) => {
  return <Product dataProduct={dataProduct} relatedProducts={relatedProducts} />;
}

export default ProductPage;