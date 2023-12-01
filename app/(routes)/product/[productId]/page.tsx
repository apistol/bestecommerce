// import React from "react";
import { getSingleProduct, getProducts } from "@/app/utils";
// import Product from "../Product";
import Image from "next/image";
// // import OrderButton from "@/app/_components/OrderButton";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import Link from "next/link";


// // interface ProductProps {
// //   params: {
// //     productId: number;
// //   };
// //   searchParams: any;
// // }

// // interface ProductData {
// //   name: string;
// //   description: string;
// //   price: string;
// //   images: {
// //     src: string;
// //   }[];
// //   attributes: {
// //     options: string;
// //   }[];
// // }

const Product = ({  dataProduct, relatedProducts }) => {

  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col lg:flex-row rounded-lg border bg-white p-8 md:p-12 lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
              <Image
                className="h-full w-full object-contain"
                width={1000}
                height={1000}
                src={dataProduct?.images[0].src}
                alt="img"
              />
              <div className="absolute bottom-[10%] flex w-full justify-center">
                <div className="mx-aut flex h-11 items-center rounded-full border bg-neutral-50/70 text-neutral-500 backdrop-blur gap-8">
                  <Link
                    href="/"
                    className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center"
                  >
                    <IoMdArrowBack className="h-8 w-8" />
                  </Link>
                  <div className="mx-1 h-6 w-px bg-neutral-500"></div>
                  <Link
                    href="/"
                    className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center"
                  >
                    <IoMdArrowForward className="h-8 w-8" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
              <div className="mx-1 max-h-[10rem] max-w-[10rem]">
                <Link href="/" className="h-full w-full">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white hover:border-blue-600 border ring-2 ring-transparent hover:ring-blue-600">
                    <Image
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      width={1000}
                      height={100}
                      src={dataProduct?.images[0].src}
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
              <div className="mx-1 max-h-[10rem] max-w-[10rem]">
                <Link href="/" className="h-full w-full">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white hover:border-blue-600 border ring-2 ring-transparent hover:ring-blue-600">
                    <Image
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      width={1000}
                      height={100}
                      src={dataProduct?.images[0].src}
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
              <div className="mx-1 max-h-[10rem] max-w-[10rem]">
                <Link href="/" className="h-full w-full">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white hover:border-blue-600 border ring-2 ring-transparent hover:ring-blue-600">
                    <Image
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      width={1000}
                      height={100}
                      src={dataProduct?.images[0].src}
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-full lg:basis-2/6">
            <div className="mb-6 flex flex-col border-b pb-6">
              <h1 className="mb-2 text-5xl font-semibold">
                {dataProduct?.name}
              </h1>
              <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-md text-white">
                <p>
                  {dataProduct?.price}.00
                  <span className="ml-1 inline">RON</span>
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4 text-sm uppercase tracking-wide font-semibold">
                Color
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex justify-center items-center min-w-[48px] rounded-full border px-4 py-1 text-sm bg-neutral-100 transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                  Black
                </button>
                <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-1 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                  White
                </button>
                <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-2 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                  Blue
                </button>
              </div>
              <div className="my-8">
                <div className="mb-4 text-sm uppercase tracking-wide font-semibold">
                  Color
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="flex justify-center items-center min-w-[48px] rounded-full border px-4 py-1 text-sm bg-neutral-100 transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    XS
                  </button>
                  <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-1 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    S
                  </button>
                  <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-2 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    M
                  </button>
                  <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-2 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    L
                  </button>
                  <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-2 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    XL
                  </button>
                  <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-2 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    XXL
                  </button>
                  <button className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-4 py-2 text-sm transition duration-300 ease-in-out hover:scale-110 ring-2 ring-transparent hover:ring-blue-600 font-semibold">
                    XXXL
                  </button>
                </div>
              </div>
              <div className="mx-auto font-medium mb-6">
                60% combed ringspun cotton/40% polyester jersey tee.
              </div>
              <button className="flex w-full justify-center items-center text-white p-4 rounded-full bg-blue-600 tracking-wide hover:opacity-90">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
          {/* Carousel section */}
          <div className="w-full overflow-x-auto pb-6 pt-1 custom-scrollbar border-b border-gray-300">
            <ul className="flex gap-4">
              {relatedProducts?.map((product) => (
                <li
                  key={product.id}
                  className="relative max-h-[275px] w-[65%] max-w-[425px] flex-none"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="relative h-full w-full"
                  >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200">
                      <Image
                        width={900}
                        height={500}
                        src={product.images[0].src}
                        alt="img"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                          <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                            {product.name}
                          </h3>
                          <p className="flex-none rounded-full bg-blue-500 p-2 text-white">
                            {product.price} RON
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getDataProduct = async ({ params }) => {
  try {
    console.log("Fetching data for product ID:", params.productId);
    const dataProduct = await getSingleProduct(params.productId);
    const relatedProducts = await getProducts();

    console.log("Fetched dataProduct:", dataProduct);
    return {
      dataProduct,
      relatedProducts,
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      dataProduct: null,
      relatedProducts: [],
    };
  }
};


// const ProductPage = ({ dataProduct, relatedProducts }) => {
//   return <Product dataProduct={dataProduct} relatedProducts={relatedProducts} />;
// };

export default Product;

// {productId}
// {dataProduct?.attributes[0]?.options}
// <h2>{dataProduct?.description.replace(/<\/?p>/g, "")}</h2>
// <OrderButton productId={productId} />
