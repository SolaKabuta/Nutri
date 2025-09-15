import achievementsCard from "../../../data/achievementsCard.json";

interface AchievementsCardProps {
  label: string;
  icon: string;
  text: string;
}

const AchievementsCard = () => {
  return (
    <>
      <div className="">
        <section className="grid lg:grid-cols-2 gap-8 items-center py-14 px-8 lg:px-24">
        {achievementsCard.map((item: AchievementsCardProps, index:number) => (
          <div key={index} className="bg-accent-var border-1 border-border-light rounded-xl p-6  transition duration-300 linear hover:bg-primary group">
            <div className="flex gap-3 items-center py-4">
              <img src={item.icon} alt="achievements icon" />
              <p className="font-semibold">
                <span className="transition duration-500 ease-in-out group-hover:text-white">
                {item.label}
                </span>
              </p>
            </div>
              <p className="transition duration-500 ease-in-out group-hover:text-white">
              {item.text}
              </p>
          </div>
        ))}
        </section>
      </div>
    </>
  );
};

export default AchievementsCard;