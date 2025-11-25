export interface AwardItem {
  title: string;
  description: string;
  issuer: string;
  date: string;
}

export const awards: AwardItem[] = [
  {
    title: "Pi515 AI Challenge",
    description: "Selected as a finalist team in the Pi515 Al Challenge for developing Tech Upskilling, a web application that uses user quiz data and career insights to recommend tech skills and curated learning resources for individuals exploring or transitioning into careers in the insurance industry.",
    issuer: "Pi515",
    date: "2025.04",
  },
  {
    title: "Dean's List Fall Semester 2023",
    description: "Achieved a semester GPA of 3.75 or higher while completing 16 credits, including 14 letter-graded credits.",
    issuer: "Grinnell",
    date: "2023.12",
  },
]; 