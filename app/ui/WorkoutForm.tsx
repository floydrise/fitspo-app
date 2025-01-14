// import { Button } from '@/components/ui/button';
// import React from 'react';
// import { postWorkoutHistory } from '../lib/serverActions';

// function WorkoutF() {
//   return (
//     <form action={postWorkoutHistory} className={'flex flex-col gap-2'}>
//       <div className={'flex flex-col items-start'}>
//         <label htmlFor={'weight'} className={'flex gap-1'}>
//           user_id:
//         </label>
//         <input
//           type='number'
//           name={'user_id'}
//           id={'user_id'}
//           className={
//             'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
//           }
//           placeholder={'user_id'}
//         />
//       </div>
//       <div className={'flex flex-col items-start'}>
//         <label htmlFor={'reps'} className={'flex gap-1'}>
//           workout_id:
//         </label>
//         <input
//           type='number'
//           name={'workout_id'}
//           id={'workout_id'}
//           className={
//             'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
//           }
//           placeholder={'workout_id'}
//         />
//       </div>
//       <div className={'flex flex-col items-start'}>
//         <label htmlFor={'date'} className={'flex gap-1'}>
//           date:
//         </label>
//         <input
//           type='date'
//           name={'date'}
//           id={'date'}
//           className={
//             'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
//           }
//           placeholder={'date'}
//         />
//       </div>
//       <div className={'flex flex-col items-start'}>
//         <label htmlFor={'duration'} className={'flex gap-1'}>
//           duration:
//         </label>
//         <input
//           type='number'
//           name={'duration'}
//           id={'duration'}
//           className={
//             'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
//           }
//           placeholder={'duration'}
//         />
//       </div>
//       <div className={'flex flex-col items-start'}>
//         <label htmlFor={'exercise_list'} className={'flex gap-1'}>
//           exercise_list:
//         </label>
//         <textarea
//           name={'exercise_list'}
//           id={'exercise_list'}
//           className={
//             'h-8 rounded-md border focus:border-violet-200 focus:outline-none focus:ring'
//           }
//           placeholder={'exercise_list'}
//         />
//       </div>

//       <div className={'flex justify-center gap-8'}>
//         <Button variant='green' type={'submit'}>
//           Submit
//         </Button>
//         <Button variant='destructive' asChild={true}></Button>
//       </div>
//       <span className={'text-purple-600 underline'}></span>
//     </form>
//   );
// }

// export default WorkoutF;
