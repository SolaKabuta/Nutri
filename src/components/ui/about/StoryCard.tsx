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
      <main className="grid grid-cols-2 items-center">
        {/* -- Story Cards Left Column -- */}
        {storyCard.map((item: StoryCardProps, index: number) => (
          <div className="flex gap-14 items-center" key={index}>
            <img src={item.image} alt={item.alt} width={400} height={400} />
            {/*<div>
              <p className="text-xl font-semibold underline underline-offset-8 decoration-accent">
                {item.title}
              </p>
              <p className="py-10">{item.text}</p>
              <p>{item.date}</p>
            </div>*/}
          </div>
        ))}
      </main>
    </>
  );
};
export default StoryCard;
