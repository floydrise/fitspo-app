'use client';
import React, { useEffect } from 'react';

const Page = () => {
  // const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('https://exercisedb-api.vercel.app/api/v1/exercises').then(
      (result) => {
        if (!result.ok) {
          throw new Error("not alright")
        }
        return result.json();
      }
    ).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error);
    });
  });

  return <div></div>;
};

export default Page;
