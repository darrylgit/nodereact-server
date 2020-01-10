import axios from "axios";

import { FETCH_USER, SUBMIT_SURVEY } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
};

export const submitSurvey = values => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  dispatch({ type: FETCH_USER, payload: res.data });
};
