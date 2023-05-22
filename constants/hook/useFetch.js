import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveRecipee } from "../../Redux/Reducers";

export const useFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://the-birthday-cake-db.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "527f6f98f5msh5998ff31cb23074p1a4436jsnb1ba79030d83",
      "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response.data);
      
      dispatch(saveRecipee(response.data));
      setIsLoading(false);
      alert("Success");
    } catch (err) {
      setError(err);
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { isLoading, error, refetch };
};
