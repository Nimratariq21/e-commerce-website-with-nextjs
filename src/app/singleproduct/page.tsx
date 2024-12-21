import React from 'react';
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from 'react-icons/fa';
import WebsitePath from '@/components/WebPath';
import Button from '@/components/Button';
import Products from '@/components/Products';
import Underline from '@/components/Underline';
import Link from 'next/link';
import Image from 'next/image';

const SingleProduct = () => {
  return (
    <div className="cp relative py-[3rem]">
      <WebsitePath />
      <main className="md:flex py-[3rem] items-start justify-between">
        {/* Product Images */}
        <section className="flex md:flex-row flex-col items-center md:mt-[-3.3rem] min-h-[90vh] gap-4 md:w-[48%]">
          <div className="flex flex-row md:flex-col items-center gap-4">
            {['/images/sp1.png', '/images/sp2.png', '/images/sp3.png', '/images/sp5.png'].map((src, index) => (
              <div key={index} className="px-4 py-2 bg-[#FFF9E5] overflow-hidden rounded-md">
                <Image src={src} alt={`Product thumbnail ${index + 1}`} width={100} height={100} className="object-cover" />
              </div>
            ))}
          </div>
          <div className="bg-[#FFF9E5] rounded-lg p-4 h-[70vh]">
            <Image src="/images/sp4.png" alt="Main product image" fill className="object-cover" />
          </div>
        </section>

        {/* Product Details */}
        <section className="flex flex-col px-4 gap-4 min-h-screen md:w-[48%]">
          <h1 className="tracking-wider font-semibold lg:text-[3em] md:text-3xl sm:text-2xl text-[1.4rem]">Asgaard Sofa</h1>
          <p className="text-xl md:text-2xl font-medium text-[#4F4F4F] tracking-wider">Rs: 250,000.00</p>
          <div className="flex items-center gap-4">
            {/* Star Ratings */}
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4].map((_, index) => (
                <FaStar key={index} size="1.5rem" color="yellow" />
              ))}
            </div>
            <span className="text-3xl font-medium"> | </span>
            <span className="text-[.9em] md:text-[1em] text-[#4F4F4F]">5 Customer Reviews</span>
          </div>

          <p className="text-sm md:text-[1em] tracking-wide font-medium">
            Setting the bar as one the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <h4 className="text-[#4F4F4F] text-xl font-medium tracking-wider">Size</h4>
          <div className="flex items-center gap-3">
            {['L', 'XL', 'XS'].map((item, index) => (
              <div
                key={index}
                className={`text-lg h-[2.7em] flex-center w-[3em] ${index === 0 ? 'bg-yellow-100' : 'bg-gray-300'} rounded-md shadow-sm`}
              >
                {item}
              </div>
            ))}
          </div>

          <h4 className="text-[#4F4F4F] text-xl font-medium tracking-wider">Color</h4>
          <div className="flex items-center gap-3">
            {['black', 'purple', 'yellow'].map((color, index) => (
              <div key={index} className={`h-10 w-10 rounded-full bg-${color}`} />
            ))}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="px-5 rounded-lg py-4 border border-gray-400 flex items-center justify-between w-[8em] text-lg font-medium">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <Link href={'/Cart'}>
              <Button
                title="Add To Cart"
                btnClass="text-xl font-medium tracking-wide px-4 py-4 rounded-lg md:px-[3rem] border border-black"
              />
            </Link>
          </div>

          <hr className="w-full mt-8 bg-gray-400 h-[1.5px]" />
          <div className="flex items-center mt-9 gap-3">
            <div className="flex flex-col gap-2">
              {['SKU', 'Category', 'Tags', 'Share'].map((item, index) => (
                <span key={index} className="text-[1em] md:text-[1.2em] text-[#9F9F9F] tracking-wider font-medium">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[': SS01', ': Sofas', ': Sofa, Chair, Home, Shop'].map((item, index) => (
                <span key={index} className="text-[1em] md:text-[1.2em] text-[#9F9F9F] tracking-wider font-medium">
                  {item}
                </span>
              ))}
              <div className="flex items-center gap-4">
                <span>:</span>
                <FaFacebook size="1.5rem" />
                <FaInstagram size="1.5rem" />
                <FaTwitter size="1.5rem" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <hr className="h-[1.6px] bg-gray-400 w-[100vw]" />
      <div className="flex-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-6">
        {['Description', 'Additional Information', 'Review [5]'].map((item, index) => (
          <div
            key={index}
            className={`text-[1em] sm:text-[1.3em] tracking-wider font-medium ${
              index === 0 ? 'text-black' : 'text-[#9F9F9F]'
            } md:text-[1.5em] lg:text-[2em]`}
          >
            {item}
          </div>
        ))}
      </div>

      <p className="px-6 tracking-wide text-[1em] md:text-[1.1em] text-[#9F9F9F] md:pl-[3em] lg:pl-[6rem]">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
        unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        <br />
        <br />
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering.
      </p>

      <div className="w-full md:flex justify-center gap-5 items-center">
        <section className="md:w-[48%] w-full bg-[#FFF9E5] h-[50vh]">
          <Image src="/images/sofa2.png" alt="Related product 1" fill className="object-cover" />
        </section>
        <section className="md:w-[48%] sm:mt-[3em] md:mt-0 w-full bg-[#FFF9E5] h-[50vh]">
          <Image src="/images/sofa1.png" alt="Related product 2" fill className="object-cover" />
        </section>
      </div>

      <hr className="h-[1.6px] bg-gray-400 mt-[3em] w-[100vw]" />
      <div className="py-4 md:py-8">
        <h1 className="text-center tracking-wider text-[1.8em] md:text-[2.4em]">Related Products</h1>
        <Products />
        <div className="w-full flex-center mt-[3rem]">
          <Underline title="View More" />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
