import testimonialsCard from "../../../data/testimonialsCard.json";

interface Item {
  name: string;
  image: string;
  text: string[];
  icon: string;
}

const TestimonialsCard = () => {
  return (
    <div className="">
      <section className="grid grid-cols-2 gap-8 items-center">
      {testimonialsCard.map((item: Item, index:number) => (
        <div key={index} className="bg-accent-var border-1 border-border-light rounded-xl p-6">
          <div className="flex gap-3 items-center py-4">
            <img src={item.image} alt="features icon" />
            <p className="font-semibold">{item.name}</p>
          </div>
          {item.text.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      ))}
      </section>
    </div>
  );
};

export default TestimonialsCard;
