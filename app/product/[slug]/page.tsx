

import Image from "next/image"
import { notFound } from "next/navigation"


export async function generateMetadata({ params }) {
    const { slug } = params
    const response = await fetch(`https://apollo.code-village.ro/wp-json/wc/v3/products?consumer_key=ck_3d06586e1a83d260041f72db0404f0ca5102f1f7&consumer_secret=cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd`, {
        next: {
            revalidate: 1
        }
    })
    const data = await response.json()
    let productData = { titlu: "" }
    let productExists = false
    data.map((product) => {
        if (product.slug === slug) {
            productData = {
                titlu: product.name,
                // DESCREIRE SEO
            }
            productExists = true
        }
    })
    if (!productExists) {
        notFound()
    }
    return { title: `${productData.titlu}` }
}

// 404 redirect / [lista de slugs pentru prerender]
export const dynamicParams = true;


export async function generateStaticParams() {
    const response = await fetch(`https://apollo.code-village.ro/wp-json/wc/v3/products?consumer_key=ck_3d06586e1a83d260041f72db0404f0ca5102f1f7&consumer_secret=cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd`)
    const data = await response.json()
    return data.map((slug) => ({
        slug: slug.slug,
    }))
}


async function getProduct(slug) {
    const response = await fetch(`https://apollo.code-village.ro/wp-json/wc/v3/products?slug=${slug}&consumer_key=ck_3d06586e1a83d260041f72db0404f0ca5102f1f7&consumer_secret=cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd`, {
        next: {
            revalidate: 30
        }
    })
    const data = await response.json()
    // Daca nu ai metadata dynamic, trebuie sa activezi bucata asta aici
    // if (!data.data.length) {
    //     notFound()
    // }
    return data
}



export default async function ProductPage({ params }) {
    const { slug } = params;
    const product = await getProduct(slug)
    const productData = product[0]

    return (
        <main className="flex flex-col gap-5 h-[80vh]">
            {productData && (
                <>
                    <div>
                        {productData.images.map((img, i) => {
                            if (i === 0) {
                                return (
                                    <Image src={img.src} width={200} height={200} quality={100} alt={img.alt} />
                                )
                            } else {
                                return (
                                    <Image src={img.src} width={100} height={100} quality={100} alt={img.alt} />
                                )
                            }
                        })}
                    </div>
                    <span>{productData.name}</span>
                    <span>{productData.price} RON</span>
                    <div dangerouslySetInnerHTML={{ __html: productData.description }} />
                </>
            )}
        </main>
    )
}
