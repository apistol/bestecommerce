'use client'
import Link from 'next/link'
import Image from 'next/image'
import { getProducts } from '@/app/utils';

export default async function Carousel() {
    const data = await getProducts();
    return (
        <div className="w-full overflow-x-auto pb-6 pt-1 custom-scrollbar border-b border-gray-300">
            <ul className='flex animate-carousel gap-4'>
                {data?.map((product) => (
                    <li key={product.id} className='relative max-h-[275px] w-[65%] max-w-[425px] flex-none'>
                        <Link href={`/product/${product.id}`} className='relative h-full w-full'>
                            <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200'>
                                <Image
                                    width={900}
                                    height={500}
                                    src={product.images[0].src}
                                    alt="img"
                                    className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                                />
                                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                                    <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                                        <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>{product.name}</h3>
                                        <p className='flex-none rounded-full bg-blue-500 p-2 text-white'>{product.price} RON</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
