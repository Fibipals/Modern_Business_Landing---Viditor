import React from 'react'
import FaqCard from '../faqCard';

const faqs = [
  {
    question: "What is an AI video editor?",
    answer: "An AI video editor uses artificial intelligence to automate and enhance video editing processes, making it easier and faster to create professional-quality videos."
  },
  {
    question: "How does AI improve video editing?",
    answer: "AI can automate repetitive tasks, enhance video quality, provide smart editing suggestions, and use machine learning to understand and apply optimal edits based on the content."
  },
  {
    question: "Can AI video editors edit videos automatically?",
    answer: "Yes, AI video editors can automatically trim, cut, and arrange video clips, apply transitions, and even add music based on the content and style preferences set by the user."
  },
  {
    question: "Is AI video editing suitable for beginners?",
    answer: "Absolutely! AI video editors are designed to be user-friendly, making it easier for beginners to create high-quality videos without needing extensive editing skills."
  },
  {
    question: "Can I customize the edits made by the AI?",
    answer: "Yes, most AI video editors allow users to manually adjust and customize the edits made by the AI to match their specific preferences and vision."
  },
  {
    question: "What types of videos can I edit with an AI video editor?",
    answer: "AI video editors can be used to edit a wide range of videos, including vlogs, tutorials, promotional videos, social media content, and more."
  },
  {
    question: "How fast can an AI video editor process a video?",
    answer: "The speed of processing depends on the length and complexity of the video, but AI video editors generally process videos much faster than traditional methods."
  },
  {
    question: "Do AI video editors support multiple video formats?",
    answer: "Yes, most AI video editors support a wide range of video formats, allowing you to import and export videos in the format that best suits your needs."
  },
  {
    question: "Are there any privacy concerns with AI video editors?",
    answer: "It's important to use AI video editors from reputable providers that ensure your data and content are secure and not misused. Always check the privacy policy of the service you are using."
  },
  {
    question: "Do AI video editors offer templates and presets?",
    answer: "Yes, many AI video editors come with a variety of templates and presets that can help you quickly create professional-looking videos with minimal effort."
  }
];

const Faq = () => {
  const formatNumber = (number: number):string => {
    if(number < 10) return "0" + number + "."
    return number + "."
  }
  return (
    <div className='px-4 lg:px-16 pt-28' id='faq'>
      <h2 className='h2 max-w-96 md:pl-8'>You`ve got questions, we`ve got answers.</h2>
      <p className='p mt-4 md:pl-8'>Find your answers below</p>
      <div className='grid md:grid-cols-2 mt-16 gap-y-4 gap-x-16'>
        {faqs.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} number={formatNumber(index  + 1)} />
        ))}
      </div>
    </div>
  )
}

export default Faq
