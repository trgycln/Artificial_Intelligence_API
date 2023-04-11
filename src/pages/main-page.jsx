import React, { useState } from "react";
import ChatAi from "../components/chatAi";
import ImageAi from "../components/ImageAi";

const MainPage = () => {
	const [changeScreen, setChangeScreen] = useState(true)
	
  const handleChatScreen = () => {
	setChangeScreen(!changeScreen)
  };
  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center rounded-[8px_8px_0_0]">
      <h1 className="font-bold text-white mb-4 uppercase tracking-wider">
        Yapay Zeka Uygulaması
      </h1>
      <button
        onClick={handleChatScreen}
        className="bg-black text-white font-semibold border-2 border-gray-500 p-2 w-full hover:text-yellow-500 hover:border-purple-900 rounded-[8px_8px_0_0]"
      >
        {changeScreen ? "Görsel" : "Chat"}
      </button>
	  {
		changeScreen ? (<ChatAi/>) :(<ImageAi/>)
	  }
    </div>
  );
};

export default MainPage;
