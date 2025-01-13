const AppOverview = () => {
  return (
    <section>
      <div className="bg-fitViolet flex justify-center px-[15px] lg:max-h-[510px]">
        <div className="container flex justify-between items-center py-[50px] flex-col-reverse lg:flex-row">
          <div className="overview-info">
            <h1 className="lg:text-[68px] lg:font-normal md:max-sm:text-[48px] text-[36px] font-bold text-white max-w-[600px] leading-none min-[320px]:max-[1023px]:max-w-[400px] min-[320px]:max-[1023px]:text-center">
              PLAN YOUR DAILY WORKOUT
            </h1>
            <p className="text-[24px] text-white max-w-[630px] mt-[7px] min-[320px]:max-[1023px]:max-w-[400px] min-[320px]:max-[1023px]:text-[18px] min-[320px]:max-[1023px]:text-justify text-justify">
              Stay on track with easy-to-follow workout plans tailored to your
              goals. Whether you’re focusing on strength, endurance, or overall
              fitness, FitSpo simplifies your journey to consistent progress.
            </p>
            <div className="mt-[20px] min-[320px]:max-[1023px]:flex min-[320px]:max-[1023px]:justify-center max-[370px]:flex-col">
              <button className="py-[20px] px-[33px] bg-fitGreen rounded-[35px] text-[18px] font-bold transition ease-in-out hover:bg-fitBlue hover:text-fitGreen">
                Try for free
              </button>
              <button className="py-[20px] px-[33px] rounded-[35px] text-[18px] font-bold text-fitGreen border border-fitGreen ml-[10px] max-[370px]:ml-0 max-[370px]:mt-[15px] transition ease-in-out hover:bg-fitBlue hover:text-fitGreen hover:border-fitBlue">
                Read more
              </button>
            </div>
          </div>
          <div className="flex justify-center overview-img lg:ml-[25px] min-[320px]:max-[1023px]:mb-[30px]">
            <img
              className="max-md:w-[300px] w-[450px]"
              src="./workout.svg"
              alt="Workout"
            />
          </div>
        </div>
      </div>
      <div className="px-[15px] py-[55px] flex justify-around items-center min-[320px]:max-[1023px]:flex-col min-[320px]:max-[1023px]:items-center">
        <div className="max-w-[574px]">
          <img
            className="max-w-full"
            src="./form.png"
            alt="Workout form example"
          />
        </div>
        <div className="min-[320px]:max-[1023px]:mt-[30px]">
          <h2 className="text-fitBlue text-[36px] font-semibold mb-[5px] min-[320px]:max-[768px]:text-[30px]">
            Intuitive tracking
          </h2>
          <ul>
            <li className="flex items-center mb-[5px]">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Sign up
              </p>
            </li>
            <li className="flex items-center mb-[5px]">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Log exercises
              </p>
            </li>
            <li className="flex items-center">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Plan workouts
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-full border-b border-fitBlue border-dashed"></div>
      <div className="px-[15px] py-[55px] flex justify-around items-center min-[320px]:max-[1023px]:flex-col-reverse min-[320px]:max-[1023px]:items-center">
        <div className="min-[320px]:max-[1023px]:mt-[30px]">
          <h2 className="text-fitBlue text-[36px] font-semibold mb-[5px] min-[320px]:max-[768px]:text-[30px]">
            Measure progress
          </h2>
          <ul>
            <li className="flex items-center mb-[5px] leading-none">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Charts to show your progress
              </p>
            </li>
            <li className="flex items-center mb-[5px]">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Personal records
              </p>
            </li>
            <li className="flex items-center">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Award points
              </p>
            </li>
            <li className="flex items-center">
              <img
                className="min-[320px]:max-[768px]:max-w-[40px]"
                src="./tick.svg"
                alt="Tick icon"
              />
              <p className="ml-[12px] text-[36px] text-fitBlue min-[320px]:max-[768px]:text-[30px]">
                Success medals
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <img className="" src="./progress.png" alt="Exercise progress" />
        </div>
      </div>
    </section>
  );
};

export default AppOverview;
