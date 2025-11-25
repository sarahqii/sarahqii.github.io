/*import React from 'react';

export interface NewsItem {
  date: string;
  content: React.ReactNode;
}

export default function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="text-gray-400 font-semibold whitespace-nowrap mr-2">{item.date}:</span>
          <div className="text-gray-700 flex-1">
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
}*/
import React, { useState } from 'react';

export interface NewsItem {
  date: string;
  content: React.ReactNode;
}

interface NewsListProps {
  items: NewsItem[];
  initialCount?: number; // Optional prop to control how many items show at first
}

export default function NewsList({ items, initialCount = 5 }: NewsListProps) {
  // State to track if the full list is visible
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate which items to display based on state
  const visibleItems = isExpanded ? items : items.slice(0, initialCount);

  return (
    <div className="flex flex-col items-start">
      <ul className="space-y-4 w-full">
        {visibleItems.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-gray-400 font-semibold whitespace-nowrap mr-2">
              {item.date}:
            </span>
            <div className="text-gray-700 flex-1">
              {item.content}
            </div>
          </li>
        ))}
      </ul>

      {/* Only show the button if there are more items than the initial limit */}
      {items.length > initialCount && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors focus:outline-none flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Show Less <span aria-hidden="true">↑</span>
            </>
          ) : (
            <>
              Show More <span aria-hidden="true">↓</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}