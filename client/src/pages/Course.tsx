import React from 'react';
import { courses } from '../data';
import { useParams, Navigate } from 'react-router-dom';
export const Course = () => {
  const { id } = useParams();
  const course = courses.find(item => item.id === +id!);

  return (
    <div className='course'>
      {course ? (
        <>
          <img src={course.img} alt='' className='courseImg' />
          <h1 className='courseTitle'>{course.title}</h1>
          <p className='courseDescription'>{course.description}</p>
          <p className='courseLongDescription'>{course.longDescription}</p>
        </>
      ) : (
        <h4>Not Founded</h4>
      )}
    </div>
  );
};
