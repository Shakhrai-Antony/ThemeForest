import React from 'react';
import {
  BlogSectionWrapper,
  BlogSwiperWrapper,
  BlogWrapper,
} from '@/pages/home/sections/blogSection/styles';
import {
  ButtonWrapper,
  TestimonialsTitle,
} from '@/pages/home/sections/testimonialsSection/styles';
import button_left from '@/assets/images/button_left.png';
import button_right from '@/assets/images/button_right.png';
import complience_blog from '@/assets/images/complience_blog.png';
import finance_blog from '@/assets/images/finance_blog.png';
import web_blog from '@/assets/images/web_blog.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import './swiperSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';
import baseTheme from '@/theme/theme';

const blogBlocks = [
  {
    id: 1,
    image: <img src={complience_blog} alt="article" />,
    date: '22 june 2022',
    article: 'ISO 13485 compliance of medical devices',
    description:
      'At vero eos et accusamus et iusto odio ' +
      'dignissimos ducimus qui blanditiis ' +
      'praesentium voluptatum deleniti atque ' +
      'corrupti quos dolores et quas. ' +
      'Quis autem vel eum iure...',
    link: 'Read more →',
  },
  {
    id: 2,
    image: <img src={finance_blog} alt="article" />,
    date: '22 june 2022',
    article: 'Business analysis helps you  in finance',
    description:
      'At vero eos et accusamus et iusto odio ' +
      'dignissimos ducimus qui blanditiis ' +
      'praesentium voluptatum deleniti atque ' +
      'corrupti quos dolores et quas. ' +
      'Quis autem vel eum iure...',
    link: 'Read more →',
  },
  {
    id: 3,
    image: <img src={web_blog} alt="article" />,
    date: '22 june 2022',
    article: '5 web portal examples your business can learn from',
    description:
      'At vero eos et accusamus et iusto odio ' +
      'dignissimos ducimus qui blanditiis ' +
      'praesentium voluptatum deleniti atque ' +
      'corrupti quos dolores et quas. ' +
      'Quis autem vel eum iure...',
    link: 'Read more →',
  },
  {
    id: 4,
    image: <img src={complience_blog} alt="article" />,
    date: '22 june 2022',
    article: 'ISO 13485 compliance of medical devices',
    description:
      'At vero eos et accusamus et iusto odio ' +
      'dignissimos ducimus qui blanditiis ' +
      'praesentium voluptatum deleniti atque ' +
      'corrupti quos dolores et quas. ' +
      'Quis autem vel eum iure...',
    link: 'Read more →',
  },
  {
    id: 5,
    image: <img src={finance_blog} alt="article" />,
    date: '22 june 2022',
    article: 'Business analysis helps you  in finance',
    description:
      'At vero eos et accusamus et iusto odio ' +
      'dignissimos ducimus qui blanditiis ' +
      'praesentium voluptatum deleniti atque ' +
      'corrupti quos dolores et quas. ' +
      'Quis autem vel eum iure...',
    link: 'Read more →',
  },
  {
    id: 6,
    image: <img src={web_blog} alt="article" />,
    date: '22 june 2022',
    article: '5 web portal examples your business can learn from',
    description:
      'At vero eos et accusamus et iusto odio ' +
      'dignissimos ducimus qui blanditiis ' +
      'praesentium voluptatum deleniti atque ' +
      'corrupti quos dolores et quas. ' +
      'Quis autem vel eum iure...',
    link: 'Read more →',
  },
];

const BlogSection = () => {
  return (
    <BlogSectionWrapper>
      <BlogSwiperWrapper>
        <TestimonialsTitle>Our blog</TestimonialsTitle>
        <ButtonWrapper>
          <div className="swiper-button-prev-unique">
            <img className="swiper_button_left" src={button_left} alt="left" />
          </div>
          <div className="swiper-button-next-unique">
            <img
              className="swiper_button_right"
              src={button_right}
              alt="right"
            />
          </div>
        </ButtonWrapper>
      </BlogSwiperWrapper>
      <Swiper
        className="swiper__slider2"
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          prevEl: '.swiper-button-prev-unique',
          nextEl: '.swiper-button-next-unique',
          clickable: true,
        }}
        pagination={{ clickable: false }}
        slidesPerGroup={1}
        breakpoints={baseTheme.breakpoints}
      >
        <BlogWrapper>
          {blogBlocks.map(({ id, image, date, article, description, link }) => (
            <SwiperSlide key={id}>
              {image}
              <p>{date}</p>
              <h4>{article}</h4>
              <p>{description}</p>
              <NavLink to="/">{link}</NavLink>
            </SwiperSlide>
          ))}
        </BlogWrapper>
      </Swiper>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
