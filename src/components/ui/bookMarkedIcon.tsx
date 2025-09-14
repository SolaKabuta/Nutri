import * as React from 'react';
import { useState } from "react";


interface BookMarkedIconProps {
  propName: string;
}

const BookMarkedIcon: React.FC<BookMarkedIconProps> = () => {
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsBookmarked(prev => !prev)}>
      {/* -- Fav Icon -- */}
      <svg className={isBookmarked ? " fill-black" : "fill-none"} width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path
          className="stroke-1"
          d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </button>
    </div>
  );
};

export default BookMarkedIcon;