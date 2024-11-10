import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

const FetchData = () => {
  const [users, setUSers] = useState([]);
  return useEffect(() => {
    const fetchData = async () => {
      // supabase에 있는 데이터를
      // 컴포넌트에 던져주는 로직

      // supabase에 있는 데이터를
      // 브라우저 창에 던져주는 로직
      const { data, error } = await supabase.from("NBCAMP_SAMPLE").select("*");
      if (error) {
        console.log("error → ", error);
      } else {
        console.log("data → ", data);
        // setUSers는
        // 데이터베이스로부터 던져진 값이 들어감
        setUSers(data);
      }
    };
    fetchData();
  });
};

export default FetchData;
