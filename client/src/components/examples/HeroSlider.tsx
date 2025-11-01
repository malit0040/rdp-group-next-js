import HeroSlider from '../HeroSlider';

export default function HeroSliderExample() {
  return (
    <HeroSlider
      onExploreClick={() => console.log('Explore clicked')}
      onContactClick={() => console.log('Contact clicked')}
    />
  );
}
