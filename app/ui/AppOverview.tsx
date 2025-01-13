const AppOverview = () => {
  return (
    <section className="max-h-[510px] bg-fitViolet">
      <div className="w-[1440px] flex justify-between items-center py-[50px]">
        <div className="overview-info">
          <h1 className="text-[68px] text-white max-w-[600px] leading-none">
            PLAN YOUR DAILY WORKOUT
          </h1>
          <p className="text-[24px] text-white max-w-[630px] mt-[7px]">
            Stay on track with easy-to-follow workout plans tailored to your
            goals. Whether you’re focusing on strength, endurance, or overall
            fitness, FitSpo simplifies your journey to consistent progress.
          </p>
          <div className="mt-[20px]">
            <button className="py-[20px] px-[33px] bg-fitGreen rounded-[35px] text-[18px] font-bold">
              Try for free
            </button>
            <button className="py-[20px] px-[33px] rounded-[35px] text-[18px] font-bold text-fitGreen border border-fitGreen ml-[10px]">
              Read more
            </button>
          </div>
        </div>
        <div className="overview-img size-[400px]">
          <img src="./workout.svg" alt="Workout" />
        </div>
      </div>
    </section>
  );
};

export default AppOverview;
