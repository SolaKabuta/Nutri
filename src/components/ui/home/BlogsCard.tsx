import blogsCard from "../../../data/blogsCard.json";
import { useState } from "react";

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
  const [isLiked, setIsLiked] = useState(false);

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
            <div className="pb-6">
              {item.text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <div className="bg-background border-1 border-border-light rounded-xl flex gap-3 items-center px-4">
              <img src={item.avatar} className="my-6" alt="avatar image" />
              <section className="flex justify-between w-full items-center">
                <div>
                  <p className="font-semibold text-primary">
                    {item.avatarName}
                  </p>
                  <p>{item.dateRead}</p>
                </div>
                <section className="flex gap-3 items-center [&_div]:bg-accent-var [&_div]:p-2 [&_div]:rounded-lg">
                  <div>
                    {/* -- Heart Icon -- */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                  {/* -- Fav Icon -- */}
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  </div>
                </section>
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogsCard;
