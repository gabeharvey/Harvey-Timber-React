import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Loblolly = () => {
  const [flipped, setFlipped] = React.useState([false, false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const springProps = flipped.map((flip) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring({
      transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
      boxShadow: flip
        ? '0px 4px 20px rgba(0, 0, 0, 0.5)'
        : '0px 4px 20px rgba(0, 0, 0, 0.3)',
      config: { mass: 6, tension: 800, friction: 60 },
    })
  );

  const images = [
    { src: 'loblolly-image-0.jpg', label: 'Stage 1', description: 'Seedling' },
    { src: 'loblolly-image-1.jpg', label: 'Stage 2', description: 'Young Tree' },
    { src: 'loblolly-image-2.jpg', label: 'Stage 3', description: 'Mature Tree' },
    { src: 'loblolly-image-3.jpg', label: 'Stage 4', description: 'Fully Grown Tree' },
  ];

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Loblolly Pine Life Cycle
      </Text>
      <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='white' mb={10}>
        Explore the stages of the loblolly pine life cycle by clicking on each card to reveal more information.
      </Text>
      <Flex direction={['column', 'row']} wrap="wrap" justify="center">
        {images.map((image, index) => {
          const { transform, boxShadow } = springProps[index];

          return (
            <animated.div
              key={index}
              onClick={() => handleFlip(index)}
              style={{
                transformStyle: 'preserve-3d',
                transform,
                boxShadow,
                width: '300px',
                height: '400px',
                position: 'relative',
                borderRadius: '10px',
                transition: 'box-shadow 0.3s',
                marginTop: "10px",
                margin: "10px",
                cursor: "pointer",
                backgroundColor: 'darkgray',
              }}
            >
              <animated.div
                style={{
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  padding: '16px',
                  backgroundImage: `url(${image.src})`,
                  boxShadow: "black 5px 5px 5px",
                  backgroundColor: 'darkgray',
                }}
              >
                <Flex justify="center" align="center" height="100%">
                  <Text fontSize="4xl" fontWeight='bold' fontFamily='Chakra Petch, cursive' color='transparent'>
                    {image.label}
                  </Text>
                </Flex>
              </animated.div>
              <animated.div
                style={{
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transform: 'rotateY(180deg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#1A1A1A',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontFamily: "'Chakra Petch', cursive",
                  boxShadow: "black 5px 5px 5px",
                  padding: '10px'
                }}
              >
                <div>
                  <Text mb={3} fontWeight='bold'>{image.label}</Text>
                  <Text>{image.description}</Text>
                </div>
              </animated.div>
            </animated.div>
          );
        })}
      </Flex>
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
    </Flex>
  );
};

export default Loblolly;
