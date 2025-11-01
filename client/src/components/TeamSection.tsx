import TeamMemberCard from './TeamMemberCard';
import executiveImage from '@assets/generated_images/Saudi_executive_team_member_d0d3e5dc.png';
import femaleTeamImage from '@assets/generated_images/Saudi_female_team_member_095ee012.png';
import directorImage from '@assets/generated_images/Marketing_director_headshot_b771cf32.png';

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    role: "Chief Executive Officer",
    image: executiveImage,
    linkedinUrl: "#"
  },
  {
    name: "Fatima Al-Zahrani",
    role: "Creative Director",
    image: femaleTeamImage,
    linkedinUrl: "#"
  },
  {
    name: "Mohammed Al-Qahtani",
    role: "Head of Marketing",
    image: directorImage,
    linkedinUrl: "#"
  },
  {
    name: "Sarah Al-Mutairi",
    role: "Event Manager",
    image: femaleTeamImage,
    linkedinUrl: "#"
  },
];

export default function TeamSection() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(to bottom, #f6f7ed 0%, #fafbf5 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground" data-testid="text-team-heading">
            Meet the Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate professionals dedicated to bringing your vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
