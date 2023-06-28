import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveAdminRecipe } from "../../Redux/Reducers";

export const useTelephone = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const GetAdminData = async () => {
      const getAdminData = await fetch(
        "https://vote-verse-server-production-6153.up.railway.app/getupload",
        {
          method: "GET",
        }
      );
      const gottenAdminData = await getAdminData.json();
      //console.log(gottenAdminData.categories);
      dispatch(saveAdminRecipe(gottenAdminData.categories));
      setReload((prev) => !prev);
    };
    GetAdminData();
  }, [reload]);

  return {};
};
