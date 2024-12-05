import React from "react";
import { FaChalkboardTeacher, FaCheck, FaClock, FaUserGraduate } from "react-icons/fa";


const CardSection = () => {
  const cards = [
    {
      title: "FREE MYSCHOOL CBT APP [NO NEED FOR SUBSCRIPTION]",
      description: "Have you heard of myschool app? Incase you haven't heard of it let me give you a briefing about this app. The myschool app is a JAMB accredited CBT app that allows students to practice over 40,000+ Jamb questions and provide you with detailed answers.",
    },
    {
      title: "WEEKLY STANDARD JAMB MOCK AND PRIZES FOR TOP SCORERS",
      description: "Our students have testified of seeing our mock questions in their exams. We do take lots of mocks and the top 3 scorers for our mock in each week get awarded 3gb, 2gb and 1gb of data respectively. Isn't that amazing?🥳",
    },
    {
      title: "FULL COVERAGE OF YOUR JAMB SYLLABUS FROM SCRATCH TILL THE END",
      description: "We will help you cover all the topics in your syllabus from the very first topic till the last.",
    },
    {
      title: " BRAINSTORMING SESSIONS",
      description: "At Utopia, you'll get to interact and connect with other scholars. The brainstorming sessions will help you remember what you've been reading so far.",
    },
    {
        title: "UTOPIA COMPULSORY DAILY READING STRUCTURE",
        description: "We understand that no amount of teaching can replace the benefits of personal reading. So, we have a well-structured system to ensure that you get to wake up early or at night to study depending on what works best fir you. N.B: It is monitored by a coach to help ensure that you take it seriously.",
      },
      {
        title: " SPECIAL ACCESS TO TUTORS FOR ANY ACADEMIC CHALLENGE",
        description: "Enjoy learning at your own pace with customizable schedules.",
      },
      {
        title: " OVERNIGHT CLASSES",
        description: "Special overnight classes are organized once a week to treat JAMB past questions and drills.",
      },
      {
        title: " SPECIAL ORAL AND JAMB NOVEL CLASS",
        description: "Due to the nature of Oral English questions and JAMB Novel questions, we have prepared special classes for you on these areas.",
      },
      {
        title: "DAILY MOTIVATION, ACCOUNTABILITY, ATTENDANCE AND FOLLOW UP",
        description: "When you join most tutorials, nobody cares whether you're following up with classes or not. But here at Utopia, we have a team dedicated to make sure that you follow up with classes.",
      },
      {
        title: "DAILY SYNONYMS, ANTONYMS, IDIOMS AND PHRASAL VERBS",
        description: "These are areas where JAMB set deep questions. So, we will help you tackle them by sending them to you daily",
      },
      {
        title: " EXPOSURE TO THOUSANDS OF UTME LIKELY QUESTIONS",
        description: "During the course of the class, you'll be exposed to thousands of questions that you will likely see in your exam. Some may even come out word-for-word",
      },
      {
        title: "DISCIPLINARY MEASURE",
        description: "Discipline not just determines success but determines how long you can stay successful. - C MUTHU PALANIAPPAN What this means is that, if you're going to score 300+, then you need discipline. Therefore, we have a standby disciplinary committee that will ensure you attend classes, study everyday and take mocks",
      },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white via-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-lg shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-normal flex gap-1 justify-center items-center font-semibold text-gray-800 mb-4">
             <FaCheck/> {card.title}
              </h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
