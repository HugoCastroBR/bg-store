import React from 'react';
import { Image } from '../../types/restaurant';

const ProductImage = ({ images }: { images: Image[] }) => {

  // verify if there is an image available in the array
  const productImage = images?.find(img => img.image)?.image;

  return (
    <figure
      className="flex-shrink-0 relative w-32 h-[85px] overflow-hidden  rounded-[4px]"
      aria-label="Imagem do produto"
    >
      {productImage ? (
        <img
          src={productImage}
          alt="Imagem ilustrativa do produto"
          className="object-cover w-full h-full"
        />
      ) : (
        null
      )}
    </figure>
  )
}


export default ProductImage;