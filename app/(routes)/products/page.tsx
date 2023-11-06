import type { Metadata } from 'next'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '',
    description: '',
}

async function getProducts() {

    try {
        const response = await fetch(`${process.env.BASEURL}/products?consumer_key=ck_3d06586e1a83d260041f72db0404f0ca5102f1f7&consumer_secret=cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd`, {
            next: {
                revalidate: 1
            }
        })

        return response.json()
    } catch (error) {
        console.log(error);
        return [];
    }

}


export default async function Products() {
    const data = await getProducts()
    console.log(data[1].images)

    return (
        <div>
            {data && data.map((produs) => (
                <Link href={`/product/${produs.slug}`}>
                    <Image src={produs.images[0].src} width={100} height={100} quality={100} alt={`Photo with ${produs.name}`}/>
                    <h2>{produs.name}</h2>
                    <h2>{produs.slug}</h2>
                    <h3>{produs.price} RON</h3>
                </Link>
            ))}
        </div>
    )
}
