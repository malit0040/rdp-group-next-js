import StatCounter from '../StatCounter';

export default function StatCounterExample() {
  return (
    <div className="p-8 bg-[#262624]">
      <StatCounter end={400} suffix="+" label="Successful Campaigns" />
    </div>
  );
}
