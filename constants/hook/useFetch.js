// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { saveRecipee } from "../../Redux/Reducers";

// export const useFetch = (id) => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://the-birthday-cake-db.p.rapidapi.com/${id}`,
//     headers: {
//       "X-RapidAPI-Key": "527f6f98f5msh5998ff31cb23074p1a4436jsnb1ba79030d83",
//       "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
//     },
//   };

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);
//       console.log(response);
//       dispatch(saveRecipee(response.data));
//       setIsLoading(false);
//     } catch (err) {
//       setError(err);
//       alert(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { isLoading, error, refetch };
// };
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveRecipee } from "../../Redux/Reducers";

export const useFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(new Set());

  useEffect(() => {
    const fetchData = async (id) => {
      const options = {
        method: "GET",
        url: `https://the-birthday-cake-db.p.rapidapi.com/${id}`,
        headers: {
          "X-RapidAPI-Key":
            "527f6f98f5msh5998ff31cb23074p1a4436jsnb1ba79030d83",
          "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setFetchedData((prevData) => new Set([...prevData, response.data]));
      } catch (err) {
        setError(err);
        alert(err.message);
      }
    };

    const fetchAllData = async () => {
      setIsLoading(true);

      for (let id = 1; id <= 15; id++) {
        await fetchData(id);
      }

      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    dispatch(saveRecipee(Array.from(fetchedData)));
  }, [fetchedData]);
  //dispatch, fetchedData
  return { isLoading, error };
};
