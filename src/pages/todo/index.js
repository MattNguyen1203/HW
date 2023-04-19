import React, { useEffect } from "react";
import { useRouter } from "next/router";
const index = () => {
  const nav = useRouter();
  useEffect(() => {
    nav.push("/todo/all");
  }, []);
  return <>Loading...</>;
};

export default index;
