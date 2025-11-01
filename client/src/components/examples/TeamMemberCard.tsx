import TeamMemberCard from '../TeamMemberCard';
import teamImage from '@assets/generated_images/Saudi_executive_team_member_d0d3e5dc.png';

export default function TeamMemberCardExample() {
  return (
    <div className="p-8 bg-[#f6f7ed]">
      <TeamMemberCard 
        name="Ahmed Al-Rashid"
        role="Chief Executive Officer"
        image={teamImage}
        linkedinUrl="https://linkedin.com"
      />
    </div>
  );
}
