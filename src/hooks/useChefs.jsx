import { useEffect, useState } from "react";

const useChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://a-10-chef-recipe-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return [chefs];
};

export default useChefs;
