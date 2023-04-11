import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStart, getImage } from "../redux/actions/chatActions";

const ImageAi = () => {
  const { chatState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    // const formInput = document.getElementById("formInput");
    formInput.value = "";
    dispatch(getDataStart());
    dispatch(getImage(value.prompt));
  };

  return (
    <div className="bg-gray-400 w-full h-full flex flex-col rounded-[0_0_8px_8px]">
      <div className="flex flex-col min-h-[400px] flex-1 overflow-auto">
        {chatState.imageAi.map((item, index) => (
          <div key={index}>
            <div className="flex self-start mr-4">
              <span className="bg-green-400 p-2 rounded-[10px_10px_10px_0]">
                {item.prompt}
              </span>
            </div>
            <div className="flex flex-col items-end ml-4 space-y-2 px-2">
             <img className="w-1/3 rounded-[30px_30px_0_30px] shadow-lg" src={item.answer[0].url} alt="" />
             <img className="w-1/3 shadow-lg rounded-[30px_30px_0_30px]" src={item.answer[1].url} alt="" />
            </div>
          </div>
        ))}
        {chatState.isLoading && <p>Loading...</p>}
      </div>
      <form
        onSubmit={handleForm}
        className="bg-black w-full flex p-2 rounded-[0_0_8px_8px]"
      >
        <input
          id="formInput"
          name="prompt"
          className="w-10/12 text-black outline-none p-1 rounded-[8px_0_0_8px]"
          type="text"
        />
        <button
          type="submit"
          className="w-2/12 bg-indigo-600 text-white rounded-[0_8px_8px_0] hover:opacity-70"
        >
          Sor
        </button>
      </form>
    </div>
  );
};

export default ImageAi;
