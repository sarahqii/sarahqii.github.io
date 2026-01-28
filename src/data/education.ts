import React from 'react';

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  extra?: React.ReactNode;
}

export const education: EducationItem[] = [
  /*{
    school: 'Korea Advanced Institute of Science & Technology (KAIST)',
    degree: 'M.S. School of Computing',
    location: 'Daejeon, Korea',
    period: '2024.02 – Present',
    extra: React.createElement('ul', { className: 'list-disc ml-5 text-gray-600' },
      React.createElement('li', null, 'Advisor: Prof. Uichin Lee, Interactive Computing Lab (ICLab)')
    ),
  },*/
  {
    school: 'Grinnell College',
    degree: 'B.A. in Computer Science, with a concetration in Statistics',
    location: 'Grinnell, Iowa, United States',
    period: '2023.08 – 2026.12',
  },
]; 