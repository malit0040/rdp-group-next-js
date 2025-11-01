import StatCounter from './StatCounter';

export default function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#262624' }}>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1bc195 0%, transparent 50%)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white" data-testid="text-impact-heading">
            Our Impact
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Delivering excellence across the Kingdom
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <StatCounter end={400} suffix="+" label="Successful Campaigns" />
          <StatCounter end={1000} suffix="+" label="Followers" />
          <StatCounter end={1} suffix="M+" label="Post Impressions" />
          <StatCounter end={500} suffix="+" label="Brand Visits/Month" />
          <StatCounter end={300} suffix="+" label="Monthly Publications" />
        </div>
      </div>
    </section>
  );
}
