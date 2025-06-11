import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="h-40 w-40 rounded-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_30px_rgba(121,66,129,0.7)]"
        style={{ boxShadow: '0 10px 25px rgba(121, 66, 129, 0.6)' }}
      >
        <Image
          src={member.image}
          alt={member.name}
          width={160}
          height={160}
          quality={100}
          className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center mt-3 px-2">
        <h3 className="text-xl font-bold text-[#6a2971]" style={{ fontFamily: 'Inter_24pt-Bold', fontWeight: 700 }}>
          {member.name}
        </h3>
        <p className="text-base font-bold text-[#da171a]" style={{ fontFamily: 'Inter_24pt-Bold', fontWeight: 700 }}>
          {member.role}
        </p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Pasindu Nethsara",
      role: "Software Engineer",
      image: "/image/pasindu.jpeg"
    },
    {
      name: "Shenuka Randeniya",
      role: "Software Engineer",
      image: "/image/shenuka1.jpeg"
    },
    {
      name: "Sanjana Kumara",
      role: "Software Engineer",
      image: "/image/sanjana.jpg"
    },
    {
      name: "Jude Thamel",
      role: "Software Engineer",
      image: "/image/jude.jpg"
    },
    {
      name: "Pavani Munasinghe",
      role: "Software Engineer",
      image: "/image/pavani.jpg"
    }
  ];

  return (
    <div className="py-8 bg-white" style={{ fontFamily: 'Inter_18pt-ExtraBold' }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-[48px] leading-tight">
            <span style={{ color: '#794281', fontWeight: 1000 }}>Our</span>{' '}
            <span style={{ color: '#dd2e31', fontWeight: 1000 }}>Team</span>
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-base text-black" style={{ fontWeight: 500 }}>
            Each member's unique skills combine to create an unstoppable force for growth and impact
          </p>
        </div>

        <div className="flex flex-col items-center mb-10 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full justify-items-center">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl justify-items-center">
            {teamMembers.slice(3).map((member, index) => (
              <TeamMemberCard key={index + 3} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;