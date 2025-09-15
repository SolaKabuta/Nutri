import storyCard from "../../../data/storyCard.json";

interface StoryCardProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  date: string;
}

const StoryCard = () => {
  return (
    <>
      <main className="grid place-content-center py-44 px-8 lg:px-24">
        <section>
          {/* -- Story Cards Left Column -- */}
          {storyCard.map((item: StoryCardProps, index: number) => (
            <div className={`flex flex-col md:flex-row gap-6 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`} key={index}>
              <img className={`w-1/2 border-r-12 border-accent ${index % 2 !== 0 ? "border-none" : ""}`} src={item.image} alt={item.alt} width={400} height={400} />
              <div className={`text-left ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                <p className={`text-xl font-semibold underline underline-offset-8 decoration-accent`}>
                  {item.title}
                </p>
                <p className="py-10">{item.text}</p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
export default StoryCard;
