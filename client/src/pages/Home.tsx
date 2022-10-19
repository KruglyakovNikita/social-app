import React from 'react';
import { Card } from '../components/Card';
import { courses } from '../data';

export const Home = () => {
  return (
    <div className='home'>
      {courses.map(course => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};
