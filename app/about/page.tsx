import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-fitViolet text-white">
      <div className="container mx-auto py-12 px-6 space-y-8">
        {/* Title section with Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="text-4xl font-bold text-fitBlue text-center md:text-left">
            About the FitSpo Project
          </h1>
        </div>

        {/* Description section and why and how we came up with the idea */}
        <p className="text-lg leading-relaxed text-center">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>

        {/* Mission section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-fitGreen underline">Our Mission</h2>
          <p className="text-lg leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>

        {/* Offer section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-fitBlue underline">What We Offer</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi libero, suscipit nec facilisis vitae, ullamcorper in odio. Sed efficitur, enim id porta suscipit, sapien ligula ullamcorper leo, a placerat felis velit non ex. Aenean convallis sit amet diam nec porttitor. In nec risus mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer condimentum arcu et elit congue luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Proin laoreet, dolor ac pretium lobortis, lorem dolor efficitur nisi, et hendrerit augue nisl id justo. Etiam in maximus mi. Nunc scelerisque metus arcu, a facilisis elit pretium vitae. Sed laoreet suscipit ipsum vitae ultricies. Nam velit sem, pretium et tincidunt malesuada, sodales quis orci. Sed posuere urna quam, at luctus nibh aliquam et. Nulla facilisi. Cras euismod mi quis odio posuere, in pretium diam efficitur. Aliquam sed imperdiet tortor. Quisque sapien dui, suscipit dictum tempor tempor, sollicitudin vitae purus.</li>
            <li>Proin diam mi, mollis in auctor nec, accumsan vel ex. Donec ut suscipit nulla. Etiam tellus lectus, tincidunt eleifend feugiat in, ultricies sed lorem. Pellentesque vel lectus at augue auctor malesuada quis vitae ante. Ut porttitor sollicitudin ante, ut auctor nulla lacinia at. Nulla efficitur at urna molestie pulvinar. Phasellus eget libero quam. Duis at dolor justo. Fusce convallis dapibus sagittis. Aenean iaculis maximus dolor, eget porttitor urna condimentum sed. Maecenas sed venenatis risus. Suspendisse potenti. Nullam pretium ligula arcu, in suscipit lorem suscipit in.</li>
          </ul>
        </div>

                {/* Signup section */}
        <div className="text-center">
            <p className="text-2xl font-bold text-white bg-fitBlue inline-block px-4 py-2 rounded-lg shadow-lg">
            Ready to take the next step in your fitness journey?
          </p>
        <a
          href="/signup"
          className="block mt-4 mx-auto px-6 py-3 text-fitBlue bg-fitGreen rounded-lg hover:bg-fitRed font-bold transition transform hover:scale-105 shadow-md"
      >
          Join Us Today
        </a>
    </div>


      </div>
    </div>
  );
};

export default AboutPage;
