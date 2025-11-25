import React from 'react';

function parseNewsDate(dateStr: string): Date {
  const [yearStr, monthStr] = dateStr.split('.');
  const year = Number(yearStr);
  const month = Number(monthStr);
  return new Date(year, month - 1, 1);
}

export default function NewsList({ items }: { items: NewsItem[] }) {
  const [showAll, setShowAll] = useState(false);

  // Determine recent 6 months
  const now = new Date();
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, 1);

  const recentItems = items.filter(
    (item) => parseNewsDate(item.date) >= sixMonthsAgo
  );

  const olderItems = items.filter(
    (item) => parseNewsDate(item.date) < sixMonthsAgo
  );

  // What we show right now (only recent OR all)
  const itemsToShow = showAll ? items : recentItems;

  return (
    <div>
      <ul className="space-y-4">
        {itemsToShow.map((item, i) => (
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

      {/* Only show the button if there are older items */}
      {olderItems.length > 0 && (
        <div className="mt-3">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            {showAll ? 'Show less' : 'Click for more'}
          </button>
        </div>
      )}
    </div>
  );
}

/*export interface NewsItem {
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
} */