import axios from "axios";
import { useEffect, useState } from "react";
import CATEGRYLIST from "./CategoryList/CATEGORYLIST.const";
import FASTFOODS from "./FASTFOODS.const";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});
const useAxios = (axiosParams) => {
  const [response, setRespons] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setRespons(result.data);
    } catch (error) {
      switch (axiosParams.type) {
        case "categories":
          setRespons(CATEGRYLIST);
          break;
        case "fastfoods":
          setRespons(FASTFOODS);
          break;
        case "filter":
          setRespons(
            axiosParams.payload
              ? FASTFOODS.filter(
                  (fastfood) => fastfood.categoryId === axiosParams.payload
                )
              : FASTFOODS
          );
          break;
        case "search":
          const re = new RegExp(axiosParams.payload, "i");
          setRespons(
            axiosParams.payload
              ? FASTFOODS.filter((fastfood) => fastfood.name.search(re) !== -1)
              : FASTFOODS
          );
          break;

        default:
          setError(error);
          break;
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosParams.url]);
  return [response, error, loading];
};
export default useAxios;
