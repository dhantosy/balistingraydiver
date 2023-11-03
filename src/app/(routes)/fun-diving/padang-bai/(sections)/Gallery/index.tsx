'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section, ImageWrapper, BoxContainer } from './styles'

const data = [
  {
    image: '/assets/images/padang-bai/padang-bai-1.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-2.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-3.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-4.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-5.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-6.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-7.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-8.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-9.jpg',
    alt: 'padang bai diving',
  },
]

export default function Gallery() {
  return (
    <Section id='gallery'>
      <BoxContainer>
        <Swiper
          loop
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          autoplay
          slidesPerView={1}
        >
          {data.map(({ image, alt }, i) => {

            return (
              <SwiperSlide key={i}>
                <ImageWrapper>
                  <Image
                    src={image}
                    alt={alt}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ImageWrapper>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </BoxContainer>
    </Section>
  )
}
