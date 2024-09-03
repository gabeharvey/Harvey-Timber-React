import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import quotes from '../utils/quotes.json';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CustomArrow = ({ direction, onClick }) => (
  <Box
    onClick={onClick}
    position="absolute"
    top="50%"
    transform="translateY(-50%)"
    backgroundColor="rgba(255, 255, 255, 0.7)"
    color="black"
    borderRadius="8px"
    p={2}
    cursor="pointer"
    zIndex="10"
    left={direction === "left" ? "10px" : "unset"}
    right={direction === "right" ? "10px" : "unset"}
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="40px"
    height="40px"
  >
    {direction === "left" ? <FaChevronLeft size="20px" /> : <FaChevronRight size="20px" />}
  </Box>
);

CustomArrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired
};

const Pagination = ({ currentSlide, totalSlides, onClick }) => (
  <Flex
    mt={4}
    justify="center"
    direction="row"
    align="center"
  >
    {Array.from({ length: totalSlides }).map((_, index) => (
      <Box
        key={index}
        width="12px"
        height="12px"
        borderRadius="50%"
        bg={currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.7)'}
        mx={1}
        cursor="pointer"
        onClick={() => onClick(index)}
      />
    ))}
  </Flex>
);

Pagination.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

const Timber = () => {
  const [randomQuote, setRandomQuote] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };
    setRandomQuote(getRandomQuote());
  }, []);

  const images = [
    { src: 'public/timber-image-0.jpg', label: 'Timber View 0' },
    { src: 'public/timber-image-1.jpg', label: 'Timber View 1' },
    { src: 'public/timber-image-2.jpg', label: 'Timber View 2' },
    { src: 'public/timber-image-3.jpg', label: 'Timber View 3' },
    { src: 'public/timber-image-4.jpg', label: 'Timber View 4' },
    { src: 'public/timber-image-5.jpg', label: 'Timber View 5' },
    { src: 'public/timber-image-6.jpg', label: 'Timber View 6' },
    { src: 'public/timber-image-7.jpg', label: 'Timber View 7' },
    { src: 'public/timber-image-8.jpg', label: 'Timber View 8' },
    { src: 'public/timber-image-9.jpg', label: 'Timber View 9' }
  ];

  const settings = {
    dots: false,  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomArrow direction="left" onClick={() => sliderRef.current.slickPrev()} />,
    nextArrow: <CustomArrow direction="right" onClick={() => sliderRef.current.slickNext()} />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Timber Gallery
      </Text>
      <Box width={{ base: "90%", md: "80%", lg: "60%" }} mb={10} position="relative">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <Box
              key={index}
              bgImage={`url(${image.src})`}
              bgSize="cover"
              bgPos="center"
              p={4}
              rounded="lg"
              height={{ base: "300px", md: "350px", lg: "400px" }} 
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='transparent'>
                {image.label}
              </Text>
            </Box>
          ))}
        </Slider>
        <Pagination
          currentSlide={currentSlide}
          totalSlides={images.length}
          onClick={index => {
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(index);
            }
          }}
        />
      </Box>
      <Link to='/'>
        <Button
          mt={10}
          bg='gray'
          color='white'
          fontFamily='Chakra Petch, cursive'
          fontSize='xl'
          _hover={{ bg: 'darkgray' }}
          _active={{ bg: 'darkgray', transform: 'scale(0.98)' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Home
        </Button>
      </Link>
      <Text fontSize='15px' fontFamily="Chakra Petch, cursive" fontWeight='bold' color='white' maxW="90%" mb="6" mt="10">
        {randomQuote.quote}
      </Text>
    </Flex>
  );
};

export default Timber;
