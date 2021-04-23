import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res;
      if (data.status !== 200) {
        throw new Error(res.data);
      }

      console.log("success about page");
    } catch (error) {
      console.log(error);
      console.log("fail");
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return <>about</>;
};

export default About;
