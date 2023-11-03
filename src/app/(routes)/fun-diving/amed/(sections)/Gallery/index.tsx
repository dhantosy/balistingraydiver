'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section, ImageWrapper, BoxContainer } from './styles'

const data = [
  {
    image: '/assets/images/amed/amed-1.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-2.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-3.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-4.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-5.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-6.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-7.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-8.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-9.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-10.jpg',
    alt: 'amed diving',
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
