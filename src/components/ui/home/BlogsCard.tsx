import blogsCard from "../../../data/blogsCard.json";

interface Item {
  image: string;
  label: string;
  title: string;
  text: string[];
  avatar: string;
  avatarName: string;
  dateRead: string;
}

const BlogsCard = () => {
  return (
    <div className="">
      <section className="grid grid-cols-2 gap-8 items-center">
        {blogsCard.map((item: Item, index: number) => (
          <div
            key={index}
            className="bg-accent-var border-1 border-border-light rounded-xl p-6"
          >
            <img src={item.image} alt="blog card image" />
            <div className="py-8">
              <p className="pb-2">{item.label}</p>
              <p className="font-semibold">{item.title}</p>
            </div>
            {item.text.map((t, i) => (
              <div key={i}>
                <p>{t}</p>
              </div>
            ))}
            <div className="bg-background border-1 border-border-light rounded-xl flex gap-3 items-center p-2">
              <img src={item.avatar} className="my-6" alt="avatar image" />
              <div>
                <p className="font-semibold text-primary">{item.avatarName}</p>
                <p>{item.dateRead}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogsCard;
