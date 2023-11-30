import React from 'react';
import Product from '@/app/(routes)/product/page'; // Actualizați calea conform structurii dvs.
import { getSingleProduct, getProducts } from '@/app/utils';
import Layout from "../../app/layout"

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
  return <Layout><Product dataProduct={dataProduct} relatedProducts={relatedProducts} /></Layout>;
}

export default ProductPage;