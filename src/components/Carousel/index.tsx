import { useState } from 'react';
import { Partner } from '../../utils/partners/partners';

type Props = {
  partners: Partner[];
};

const Carousel = ({ partners }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? partners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === partners.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <img
        src={partners[currentIndex].logo}
        alt={partners[currentIndex].name}
      />
      <button onClick={goToPrevious}>Anterior</button>
      <button onClick={goToNext}>Próximo</button>
    </div>
  );
};

export default Carousel;
