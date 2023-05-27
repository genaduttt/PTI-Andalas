import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className=" bg-sky-600-full py-20 px-20 mt-10 justify-center content-center">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Welcome To Andalas Travel!
              </h1>
              <p className="text-lg text-gray-700">
                We are a trusted source of information that specifically
                presents content about tourist destinations on the island of
                Sumatera. With in-depth knowledge of the beauty and natural
                wealth of Sumatera, we are determined to help you find the best
                tourist destinations on this island. We offer comprehensive
                information about various interesting destinations in Sumatera,
                including stunning natural attractions such as mountains, lakes,
                beaches, tropical forests and national parks which are abundant
                with unique flora and fauna. In addition, we also provide
                information about the island's culture, history, culinary
                specialties, and special events, so you can experience local
                life and the cultural wonders of Sumatera. Are you ready to
                discover the natural wonders and cultural beauty of the island
                of Sumatera? With Andalas Travel, you will find amazing
                itineraries, stunning destinations, and unforgettable
                experiences. Enjoy exploring Sumatera with us!
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="src/assets/potoaboutus.jpg"
              alt="team img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
