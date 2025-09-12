import testimonialsCard from "../../../data/testimonialsCard.json";

interface Item {
  name: string;
  image: string;
  text: string[];
  icon: string;
}

const TestimonialsCard = () => {
  return (
    <div className=" ">
      <section className="flex gap-8 items-center">
      {testimonialsCard.map((item: Item, index:number) => (
        <div key={index} className="relative bg-background border-1 border-border-light rounded-xl p-6">
          <img src={item.icon} alt="" />
          <div className="pt-12 pb-24">
          {item.text.map((t, i) => 
            <p key={i}>{t}</p>
          )}
          </div>
          <div className="absolute bottom-0 bg-accent-var flex gap-3 items-center py-4 pr-50 mt-14">
            <img src={item.image} alt="features icon" />
            <p className="font-semibold">{item.name}</p>
          </div>
        </div>
      ))}
      </section>
    </div>
  );
};

export default TestimonialsCard;
