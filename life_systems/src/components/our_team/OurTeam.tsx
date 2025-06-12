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
        className="h-50 w-50 rounded-full overflow-hidden bg-white flex items-center justify-center transition-shadow duration-300 ease-in-out hover:shadow-gray-300]"
        style={{ boxShadow: '0 10px 25px rgba(121, 66, 129, 0.6)' }}
      >
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          quality={100}
          className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center mt-3 px-2">
        <h3 className="text-2xl font-bold text-[#6a2971]" >
          {member.name}
        </h3>
        <p className="text-lg font-bold text-[#da171a]" >
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
    <div className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-black">Our</span>{' '}
            <span className="text-[#231e55]">Team</span>
          </h1>
          <p className="text-[#666666] text-center text-[18px] font-semibold">
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