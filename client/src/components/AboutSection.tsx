import cityImage from '@assets/generated_images/Riyadh_modern_cityscape_9ad139d0.png';

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img 
              src={cityImage} 
              alt="Modern Riyadh cityscape"
              className="w-full h-full object-cover"
              data-testid="img-about-cityscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#024442]/20 to-transparent" />
          </div>
          
          <div>
            <h2 className="text-5xl font-bold mb-6 text-foreground" data-testid="text-about-heading">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description">
              RdP Group is a Saudi conglomerate specializing in city marketing, corporate event management, royal ceremonies, and creative advertising.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a footprint across the Kingdom, we deliver powerful campaigns that bridge innovation and culture, reflecting the excellence and elegance of Saudi heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
