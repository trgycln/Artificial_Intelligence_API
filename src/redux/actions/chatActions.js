import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

// senkron olduğu için Redux-Thunk kullanımına ihtiyaç yok.
export const getDataStart = () => ({
  type: ActionTypes.GET_DATA_START,
  payload: true,
});

export const getAnswer = (prompt) => async (dispatch) => {
  //   ChatGPT APİ codes
  const options = {
    method: "POST",
    url: "https://openai80.p.rapidapi.com/chat/completions",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "c70608ae13msh7a49a4214c82ff5p1e7104jsn23c35ba1147b",
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`,
  };
  //   // Api Request
  const res = await axios.request(options);
  console.log(res.data.choices[0].message.content);

  dispatch({
    type: ActionTypes.GET_ANSWER,
    payload: { prompt, answer: res.data.choices[0].message.content },
  });
};


export const getImage =(prompt)=> async (dispatch)=>{

  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/images/generations',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c70608ae13msh7a49a4214c82ff5p1e7104jsn23c35ba1147b',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    data: `{"prompt":"${prompt}","n":2,"size":"1024x1024"}`
  };

  const res = await axios.request(options)
  console.log(res);

  dispatch({
    type:ActionTypes.GET_IMAGE,
    payload:{prompt, answer:res.data.data}
  })

}