import storyCard from "../../../data/storyCard.json";

interface StoryCardProps {
  title: string;
  text: string;
  image: string;
}

const StoryCard = () => {
  return (
    <>
      <main className="w-screen h-screen grid place-content-center px-24">
        {/* -- Story Cards -- */}
          {storyCard.map((item: StoryCardProps, index: number) => (
            <div key={index}>
              <img src={item.image} alt="" />
            </div>
          ))}
      </main>
    </>
  );
};
export default StoryCard;
