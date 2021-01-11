import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const AppActionContext = createContext();
export const AppStateContext = createContext();

function ApiProvider({ children }) {
  const [state, mainSetState] = useState({
    token: false,
    dataSource: [],
    error: false
  });
  const setState = (newState) => mainSetState(prevState => ({ ...prevState, ...newState }));

  const authentication = useCallback(() => {
    return axios.post("https://cors-anywhere.herokuapp.com/https://imdb.hriks.com/user/auth-token", {
      "username": "hriks",
      "password": "gt4043@1"
    })
      .then(resp => {
        setState({ token: resp.data });

        return Promise.resolve(resp.data);
      })
      .catch(error => {
        setState({ error: { error } });

        return Promise.reject(error);
      });
  }, []);

  const getMovies = useCallback(() => {
    return axios.get("https://cors-anywhere.herokuapp.com/https://imdb.hriks.com/movie/")
      .then(resp => {
        setState({ dataSource: resp.data.results });

        return Promise.resolve(resp.data);
      })
      .catch(error => {
        setState({ error: { error } });

        return Promise.reject(error);
      });
  }, []);

  return (
    <AppStateContext.Provider value={{ ...state }}>
      <AppActionContext.Provider
        value={{
          authentication,
          getMovies
        }}
      >
        {children}
      </AppActionContext.Provider>
    </AppStateContext.Provider>
  );
}

export default ApiProvider;
