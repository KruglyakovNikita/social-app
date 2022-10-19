import React from 'react';
import { Link } from 'react-router-dom';

export interface ICardProps {
  course: { id: number; title: string; img: string; description: string; longDescription: string; price: number; author: string };
}

export const Card: React.FC<ICardProps> = ({ course }) => {
  return (
    <div className='card'>
      <Link className='link' to={`/course/${course.id}`}>
        <span className='title'>{course.title}</span>
        <img src={course.img} alt='' className='img' />
        <p className='description'>{course.description}</p>
        <button className='cardButton'>Read more</button>
      </Link>
    </div>
  );
};
