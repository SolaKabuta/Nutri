import teamCard from '@/data/teamCard.json';

interface TeamCardProps {
  image: string;
  label: string;
  role: string;
}

const TeamCard= () => {
  return (
    <div>
      <section>
        
      </section>
      {teamCard.map((item: TeamCardProps, index: number) => (
        <div key={index} className="bg-accent-var border-1 border-border-light rounded-xl p-6  transition duration-300 linear hover:bg-primary group">
          <img src={item.image} alt="" />
          <p>{item.label}</p> 
          <p>{item.role}</p> 
        </div>
      ))}
    </div>
  );
};

export default TeamCard;