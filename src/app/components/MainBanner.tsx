'use client';

import React, { useEffect } from 'react';

export default function MainBanner() {
  useEffect(() => {
    alert("Este site ficará ativo até o dia 10 de agosto. Após isso, o site será desativado.Por favor confirme a sua presença!");
  }, []);

  return (
    <div className="flex w-full h-[83vh]">
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-one.jpg"
      />
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-two.jpg"
      />
      <img
        loading="lazy"
        className="aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-three.jpg"
      />
      <img
        loading="lazy"
        className="hidden md:block aspect-w-9 aspect-h-16 flex-grow flex-shrink w-[15px] object-cover opacity-50 transition-all duration-500 ease-in-out hover:opacity-100 hover:w-[155px]"
        src="/assets/photo-four.jpg"
      />
    </div>
  );
}
