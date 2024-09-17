import React from 'react'
import ReviewCard from '../reviewCard';

const reviews = [
  {
    name: "John Doe",
    imgSrc: "/reviews/rev1.jpg",
    company: "Tech Innovators Inc.",
    review: "This AI video editor is a game-changer! It made editing our promotional videos so much easier and faster."
  },
  {
    name: "Jane Smith",
    imgSrc: "/reviews/rev2.jpg",
    company: "Creative Studios",
    review: "I love how user-friendly the AI video editor is. It’s perfect for beginners and professionals alike."
  },
  {
    name: "Emily Johnson",
    imgSrc: "/reviews/rev3.jpg",
    company: "Marketing Gurus",
    review: "The automated editing features saved us a ton of time. The final product was polished and professional."
  },
  {
    name: "Michael Brown",
    imgSrc: "/reviews/rev4.jpg",
    company: "Content Creators LLC",
    review: "The AI suggestions were spot on and really helped improve the quality of our videos. Highly recommend!"
  },
  {
    name: "David Wilson",
    imgSrc: "/reviews/rev5.jpg",
    company: "Digital Media Experts",
    review: "This AI video editor has become an essential tool for our team. It’s efficient and easy to use."
  },
  {
    name: "Sarah Davis",
    imgSrc: "/reviews/rev6.jpg",
    company: "Video Production House",
    review: "The AI editor exceeded our expectations. The quality of our video content has significantly improved."
  }
];

const Reviews = () => {
  return (
    <div className='p-16 flex flex-col lg:flex-row lg:justify-between relative'>
      <div className='absolute left-1/4 w-3/4 inset-0 gradient-01 z-0' />
      <div className='mb-16 w-72 z-10'>
        <p className='text-slogan mb-6'>wall of love</p>
        <h2 className='h2'>Words from our fans</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-16 z-10 place-items-center'>
        {reviews.map((review, index) => (
          <ReviewCard  key={index} 
          name={review.name} 
          imgSrc={review.imgSrc}
          company={review.company}
          review={review.review}/>
        ))}
      </div>
    </div>
  )
}

export default Reviews
