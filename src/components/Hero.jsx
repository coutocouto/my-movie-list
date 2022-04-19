import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-blue-200 text-center bg-white pb-10'>
            <div className='w-60 mx-auto'>
                <Image src={'/images/hero-cinema.svg'} width={200} height={200} layout="responsive" alt='hero' />
            </div>
            <h1 className='text-2xl text-gray-700 uppercase font-bold'> Welcome to MML</h1>
            <p className='text-gray-500'>Films</p>
        </div>
    )
}

export default Hero