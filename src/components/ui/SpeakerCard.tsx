import React from "react";

interface SpeakerProps {
  nama: string;
  role: string;
  imageUrl: string;
}

const CardSpeaker: React.FC<SpeakerProps> = ({ nama, role, imageUrl }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center group mt-16 h-full">
      <div className="relative z-10 -mb-20">
        <img
          src={imageUrl}
          alt={nama}
          className="h-50 w-50 rounded-full border-8 border-red-900 mx-auto group-hover:scale-105 transition-transform duration-300 object-cover shadow-xl"
        />
      </div>

      <div className="flex flex-col items-center h-full w-full border-4 border-red-900 p-6 pt-24 pb-8 rounded-2xl shadow-xl bg-white group-hover:shadow-2xl group-hover:bg-red-50 transition-all duration-300">
        <div className="flex flex-col items-center gap-3 text-center grow w-full">
          <h3 className="text-2xl text-red-900 font-bold">{nama}</h3>
          <p className="text-xl text-gray-700 leading-relaxed px-2 grow">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSpeaker;