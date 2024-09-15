import React, { useCallback, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { customColors } from '../../constants/colors';

import ArrowRight from '../../assets/requestDemo/advertisementSchoolImages/ArrowRight.svg';
import ArrowLeft from '../../assets/requestDemo/advertisementSchoolImages/ArrowLeft.svg';
import SchoolOne from '../../assets/requestDemo/advertisementSchoolImages/SchoolOne.svg';
import SchoolTwo from '../../assets/requestDemo/advertisementSchoolImages/SchoolTwo.svg';
import SchoolThree from '../../assets/requestDemo/advertisementSchoolImages/SchoolThree.svg';
import { Navigation, Keyboard, FreeMode } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carouselStyles.css';

const AdvertisementSchoolCarousel = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const swiperItems = [SchoolOne, SchoolTwo, SchoolThree, SchoolThree];

  //TODO small amount of images make issues for loop mode in swiper, so is not clear regarding data what amount will be...
  //it can be the case when we  *2 real data for creating more items for solving issue with loop
  const multiplySchools = [...swiperItems, ...swiperItems, ...swiperItems];

  const swiperSlides = useMemo(() => {
    return multiplySchools.map((schoolPhoto, index) => {
      return (
        <SwiperSlide key={`${schoolPhoto}-${index}`} style={{ maxWidth: 180 }}>
          <Box
            sx={{
              width: { xs: '80px', md: '115px', lg: '180px' },
              height: { xs: '80px', md: '115px', lg: '180px' },
              backgroundColor: customColors.mainTextBackGroundColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={schoolPhoto}
              alt={`${schoolPhoto}-${index}`}
              sx={{
                width: { xs: '65px', md: '100px', lg: '150px' },
                height: { xs: '65px', md: '100px', lg: '150px' },
                pointerEvents: 'none',
              }}
            />
          </Box>
        </SwiperSlide>
      );
    });
  }, [swiperItems]);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '200px', md: '300px' },
          border: '1px solid transparent',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: { xs: '-16px', sm: '-24px' },
            right: { xs: '-16px', sm: '-24px' },
            height: 'fit-content',
            backgroundColor: { xs: 'none', sm: customColors.separatorLine },
            fontSize: { xs: '24px', md: '34px' },
            padding: { xs: '24px', md: '36px' },
            textAlign: 'center',
            color: customColors.mainPurple,
          }}
        >
          We are proud that these great schools are using our software. Join them today.
        </Box>
      </Box>

      <Box
        sx={{
          margin: {
            xs: '70px 20px',
            sm: '100px 40px 200px',
            md: '100px 35px 200px',
            lg: '170px 60px 200px',
          },
          position: 'relative',
        }}
      >
        <Swiper
          spaceBetween={40}
          loop
          centeredSlides={true}
          slidesPerView={'auto'}
          effect="fade"
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Keyboard, Navigation, FreeMode]}
          onSwiper={setSwiperRef}
        >
          {swiperSlides}
        </Swiper>
        <Box
          onClick={handlePrevious}
          component="img"
          src={ArrowLeft}
          alt={'ArrowLeft'}
          sx={{
            width: { xs: '25px', lg: '35px' },
            height: { xs: '25px', lg: '35px' },
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            left: { xs: -15, sm: -25, md: -20, lg: -40 },
            right: { xs: '20px', sm: 'unset' },
            transform: 'translate(-50%, -50%)',
            zIndex: 100,
          }}
        />
        <Box
          onClick={handleNext}
          component="img"
          src={ArrowRight}
          alt={'ArrowRight'}
          sx={{
            width: { xs: '25px', lg: '35px' },
            height: { xs: '25px', lg: '35px' },
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            right: { xs: -40, sm: -45, md: -45, lg: -70 },
            transform: 'translate(-50%, -50%)',
            zIndex: 100,
          }}
        />
      </Box>
    </Box>
  );
};

export default AdvertisementSchoolCarousel;
