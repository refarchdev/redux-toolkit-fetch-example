import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActorNames } from "./actorNamesSlice";

const App = () => {
  const dispatch = useDispatch();
  const { names, status, error } = useSelector((state) => state.actorNames);

  useEffect(() => {
    dispatch(fetchActorNames());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "succeeded" && (
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      {status === "failed" && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
