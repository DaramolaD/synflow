import React from "react";
import TestimonyItem from "../molecules/TestimonyItem";
import avatar_1 from "@/assets/avatar_1.jpg";
import avatar_2 from "@/assets/avatar_2.jpg";
import avatar_3 from "@/assets/avatar_3.jpg";
import avatar_4 from "@/assets/avatar_4.jpg";
import avatar_5 from "@/assets/avatar_5.jpg";
import avatar_6 from "@/assets/avatar_6.jpg";
import avatar_7 from "@/assets/avatar_7.jpg";
import avatar_8 from "@/assets/avatar_8.jpg";
import avatar_9 from "@/assets/avatar_9.jpg";

const Testimonies = () => {
  return (
    <div className="sectionContainer px-5 md:px-10 overflow-hidden w-full">
      <div className="flex flex-col gap-10 md:gap-16 items-center justify-center bg-dark-60 px-3 pt-10 pb-7 rounded-2xl md:rounded-[50px]">
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <div className="flex px-5 p-3 w-fit bg-gradient-to-t from-primary-main to-primary-15 rounded-xl">
            <h2 className="text-white">Testimonies</h2>
          </div>
          <h3 className="text-2xl md:text-4xl">
            Voices Of{" "}
            <span className="bg-title-gradient bg-clip-text text-transparent from-primary-main to-primary-15 ">
              Satisfaction
            </span>
          </h3>
          <p className="text-sm md:text-base">
            Explore the stories of our clients who have utilized our platform to
            solve their challenges and achieve success. Their experiences
            highlight the value we bring
          </p>
        </div>
        <div className="flex gap-3 w-full overflow-auto">
          {testominies.map((testimony) => (
            <TestimonyItem key={testimony.id} testimony={testimony} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

const testominies = [
  {
    id: 1,
    img: avatar_1,
    name: "Michael Thompson",
    startup: "CEO, FitLife Inc",
    msg: "Managing payroll was a nightmare until we found this platform. The automation and real-time tracking have saved us so much time and reduced errors. Our employees are happier than ever! Highly recommend it!",
  },
  {
    id: 2,
    img: avatar_2,
    name: "Lisa Thompson",
    startup: "Operations Manager, Bright Future Enterprises (Healthcare)",
    msg: "Our invoicing process was inefficient and time-consuming. With customizable invoicing and automated reminders, we now get paid faster and more reliably. It’s streamlined our entire billing process.",
  },
  {
    id: 3,
    img: avatar_3,
    name: "Robert Hayes",
    startup: "CFO, Global Innovations Inc",
    msg: "Our international transactions were complicated and slow. This platform’s seamless payment processing and automatic currency conversion have revolutionized our operations. Our cash flow has never been better.",
  },
  {
    id: 4,
    img: avatar_4,
    name: "Emma Rodriguez",
    startup: "Financial Director, BlueWave Enterprises",
    msg: "Expense tracking used to be chaotic. Now, with real-time tracking and integration with our accounting software, we have full visibility and control over our finances. It’s a game-changer!",
  },
  {
    id: 5,
    img: avatar_5,
    name: "Amanda Johnson",
    startup: "CEO, NexGen Media",
    msg: "The recurring billing feature has stabilized our revenue streams and improved customer retention. The insights we get from subscription analytics are invaluable for our growth strategy.",
  },
  {
    id: 6,
    img: avatar_6,
    name: "Fred Newton",
    startup: "Co-Founder, UrbanEats Food Delivery",
    msg: "Integrating with our existing systems was seamless. We've reduced operational costs and improved customer satisfaction. Our delivery times have decreased significantly, making both our customers and delivery partners happier.",
  },
  {
    id: 7,
    img: avatar_7,
    name: "Sarah Mitchell",
    startup: "CFO, GreenLeaf Enterprises",
    msg: "Before using this platform, managing our finances was a nightmare. Now, everything is automated, and our cash flow has never been better. It’s a game-changer for our agri-tech business.",
  },
  {
    id: 8,
    img: avatar_8,
    name: "David Kim",
    startup: "CFO, Global Innovations Inc",
    msg: "Our international transactions were complicated and slow. This platform’s seamless payment processing and automatic currency conversion have revolutionized our operations. Our cash flow has never been better.",
  },
  {
    id: 9,
    img: avatar_9,
    name: "John Peterson",
    startup: "Financial Director, BlueWave Enterprises",
    msg: "Expense tracking used to be chaotic. Now, with real-time tracking and integration with our accounting software, we have full visibility and control over our finances. It’s a game-changer!",
  },
];
