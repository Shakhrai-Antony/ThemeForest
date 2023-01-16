import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import button_right from '@/assets/images/button_right.png';
import button_left from '@/assets/images/button_left.png';
import './swiperSlider.scss';
import {
  BlocksWrapper,
  ButtonWrapper,
  SwiperWrapper,
  TestimonialsSectionWrapper,
  TestimonialsTitle,
} from '@/pages/home/sections/testimonialsSection/styles';
import Alex from '@/assets/images/Alex.png';
import Ruben from '@/assets/images/Ruben.png';
import Tigran from '@/assets/images/Tigran.png';
import baseTheme from '@/theme/theme';

const blocks = [
  {
    id: 1,
    image: <img src={Alex} alt="client" />,
    name: 'Alex Bern',
    position: 'CEO by PixelPerfect',
    feedback:
      'Ut enim ad minima veniam, ' +
      'quis nostrum exercitationem ullam ' +
      'corpor suscipit laboriosam, nisi ut ' +
      'aliquid ex ea commodi consequatur? ' +
      'Quis utem vel eum iure reprehender ' +
      'qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.',
  },
  {
    id: 2,
    image: <img src={Ruben} alt="client" />,
    name: 'Ruben Chifundo',
    position: 'CEO by NOX',
    feedback:
      'Ut enim ad minima veniam, ' +
      'quis nostrum exercitationem ullam ' +
      'corpor suscipit laboriosam, nisi ut ' +
      'aliquid ex ea commodi consequatur? ' +
      'Quis utem vel eum iure reprehender ' +
      'qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.',
  },
  {
    id: 3,
    image: <img src={Tigran} alt="client" />,
    name: 'Tigran Nazaret',
    position: 'Data analyst',
    feedback:
      'Ut enim ad minima veniam, ' +
      'quis nostrum exercitationem ullam ' +
      'corpor suscipit laboriosam, nisi ut ' +
      'aliquid ex ea commodi consequatur? ' +
      'Quis utem vel eum iure reprehender ' +
      'qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.',
  },
  {
    id: 4,
    image: <img src={Alex} alt="client" />,
    name: 'Alex Bern',
    position: 'CEO by PixelPerfect',
    feedback:
      'Ut enim ad minima veniam, ' +
      'quis nostrum exercitationem ullam ' +
      'corpor suscipit laboriosam, nisi ut ' +
      'aliquid ex ea commodi consequatur? ' +
      'Quis utem vel eum iure reprehender ' +
      'qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.',
  },
  {
    id: 5,
    image: <img src={Ruben} alt="client" />,
    name: 'Ruben Chifundo',
    position: 'CEO by NOX',
    feedback:
      'Ut enim ad minima veniam, ' +
      'quis nostrum exercitationem ullam ' +
      'corpor suscipit laboriosam, nisi ut ' +
      'aliquid ex ea commodi consequatur? ' +
      'Quis utem vel eum iure reprehender ' +
      'qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.',
  },
  {
    id: 6,
    image: <img src={Tigran} alt="client" />,
    name: 'Tigran Nazaret',
    position: 'Data analyst',
    feedback:
      'Ut enim ad minima veniam, ' +
      'quis nostrum exercitationem ullam ' +
      'corpor suscipit laboriosam, nisi ut ' +
      'aliquid ex ea commodi consequatur? ' +
      'Quis utem vel eum iure reprehender ' +
      'qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.',
  },
];
const TestimonialsSection = () => {
  return (
    <TestimonialsSectionWrapper>
      <SwiperWrapper>
        <TestimonialsTitle>Testimonials</TestimonialsTitle>
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
      </SwiperWrapper>

      <Swiper
        className="swiper__slider"
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
        <BlocksWrapper>
          {blocks.map(({ id, image, name, position, feedback }) => (
            <SwiperSlide key={id}>
              <div>
                {image}
                <h5>{name}</h5>
                <p>{position}</p>
                <p>{feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </BlocksWrapper>
      </Swiper>
    </TestimonialsSectionWrapper>
  );
};

export default TestimonialsSection;
