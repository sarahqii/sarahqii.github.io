import React from 'react';

export interface NewsItem {
  date: string;
  content: React.ReactNode;
}

export const news: NewsItem[] = [
  /*{
    date: '2025.07',
    content: React.createElement(React.Fragment, null, 'Attended ', React.createElement('a', { href: 'https://koreavis.org/2025', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'K-VIS Conference'), ' in Pohang, Korea'),
  },
  {
    date: '2025.04',
    content: React.createElement(React.Fragment, null, 'Attended ', React.createElement('a', { href: 'https://chi2025.acm.org/', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'CHI 2025'), ' in Yokohama, Japan ✈️'),
  },*/
  {
    date: '2025.04',
    content: React.createElement(React.Fragment, null, 'Joined the ', 
      React.createElement('a', { href: 'https://stat2labs.sites.grinnell.edu/', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'Stat2Labs'), 
      ' as a student researcher 🤓'),
  },
  {
    date: '2025.04',
    content: React.createElement(React.Fragment, null, 'Slected as a finalist team of ', React.createElement('a', { href: 'https://www.pi515.org/day-of-innovation/ai-challenge', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'Pi515 AI Challenge'), ' in Des Moines 🎉'),
  },
  {
    date: '2024.05',
    content: React.createElement(React.Fragment, null, 'Joined the ', React.createElement('a', { href: 'https://elbica.cs.grinnell.edu/', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'ELBICA Lab' ), ' as a stundent researcher 🤓'),
  },
  {
    date: '2024.01',
    content: React.createElement(React.Fragment, null, 'Earned a dean\'s list for the fall semester of 2023 🎉'),
  },
  {
    date: '2023.08',
    content: React.createElement(React.Fragment, null, 'Began my undergraduate studies at Grinnell College, double majoring in Computer Science and Economics with a concentration in Statistics 🐿️'),
  },
];