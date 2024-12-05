import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Where does the class hold:?", answer: "Our classes are done via telegram, whatsapp and teams app" },
    { question: "Is it for just science students:", answer: "We have classes for arts and commercial students also." },
    { question: "Are the tutorials free?", answer: "We offer both free and paid tutorials, catering to a variety of learning needs." },
    { question: "The #5000 monthly is expensive, why can't Utopia charge less", answer: "Let's do the calculation together. There are about 30days in a month. So, #5000 ÷ 30 is approximately #170 per day.You're getting 4hours of learning daily. This is aside the weekly mock test, the myschool app, the follow up, the video course and other fantastic features we have. Can you see that in fact you're the one cheating us?" },
    { question: "Will I score 300+ if I join this tutorial", answer: "YES! if you follow all we ask you to do. No! If you don't take the classes seriously" },
    { question: "How long will the class hold", answer: "We are going to cover the entire syllabus in 10weeks" },
    { question: "What if I don't understand", answer: "Relax, our tutors use images, texts, audio, videos and more to teach in order to help you understand better" },
    { question: "Is there any discount:", answer: " YES! Just a one-time discount and it ends 8pm - Wednesday 4th December, 2024" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-primaryPurple mb-8">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-4 text-lg font-medium text-primaryPurple flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <span className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 pl-4 pb-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
