import teamCard from '@/data/teamCard.json';


interface TeamCardProps {
  image: string;
  label: string;
  role: string;
}



const TeamCard= () => {

  
  return (
    <div >
      <section 
        className='grid md:flex gap-6 mb-24 pb-14 px-4 lg:px-24'>
      {teamCard.map((item: TeamCardProps, index: number) => (
        <div key={index} className="relative transition duration-300 linear hover:bg-primary group">
          <img className='z-10 transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4' src={item.image} alt="" />
          <div className='absolute z-30 -bottom-4 bg-accent-var rounded-lg w-64 py-8 px-10 transition duration-700 group-hover:translate-y-2 group-hover:translate-x-8'>
          <p className='text-xl font-semibold transition duration-500 group-hover:scale-115'>{item.label}</p> 
          <p className='text-sm transition duration-1000 ease-in-out group-hover:scale-115 group-hover:translate-y-2'>{item.role}</p> 
          </div>
        </div>
      ))}
      </section>
    </div>
  );
};

export default TeamCard;