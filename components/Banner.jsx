"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerOne from '../app/assets/bg.jpg';
import bannerTwo from '../app/assets/bg2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export const Banner = () => {
  return (
    <main>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="w-full h-screen mySwiper"
    >
      <SwiperSlide className="relative bg-center bg-no-repeat bg-cover bg-banner-two">
        <div className="absolute -translate-y-1/2 px-36 top-1/2">
          <h1 className="text-6xl font-bold text-white">Bem vindo ao Rogue MIR4</h1>
          <p className="mt-5 mb-8 text-xl text-white font-sm max-w-[600px]">
            Temos mais de um servidor, você pode desfrutar de servidores de mudança de guerra, lutando em torres de dragões e cercos de castelos! Torne-se o mais forte do seu servidor!
          </p>
          <Link href={"/register"} className="px-6 py-3 font-bold text-white duration-150 ease-in-out bg-red-600 rounded-md gap-x-2 hover:bg-red-800">
            Registre-se já
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative bg-banner-one">
        <div className="absolute -translate-y-1/2 px-36 top-1/2">
        <h1 className="text-6xl font-bold text-white">Mercado Unificado</h1>
          <p className="mt-5 mb-8 text-xl text-white font-sm max-w-[600px]">
            A Era da Grande Unificação. Um enorme mercado único e orgânico.
          </p>
          <Link href={"/register"} className="px-6 py-3 font-bold text-white duration-150 ease-in-out bg-red-600 rounded-md gap-x-2 hover:bg-red-800">
            Junte-se ao MIR4 Rogue
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative bg-banner-one">
        <div className="absolute -translate-y-1/2 px-36 top-1/2">
        <h1 className="text-6xl font-bold text-white">Mercado Unificado</h1>
          <p className="mt-5 mb-8 text-xl text-white font-sm max-w-[600px]">
            A Era da Grande Unificação. Um enorme mercado único e orgânico.
          </p>
          <Link href={"/register"} className="px-6 py-3 font-bold text-white duration-150 ease-in-out bg-red-600 rounded-md gap-x-2 hover:bg-red-800">
            Junte-se ao MIR4 Rogue
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  </main>
  )
}