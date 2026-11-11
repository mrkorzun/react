import { useEffect, useState } from "react";
import css from "./Greeting.module.css";
import Modal from "./Modal/Modal";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

const Greeting = ({ date, title, module }: PageInfo) => {
  const [username, setUsername] = useState<string>(() => {
    const saved = localStorage.getItem("username");
    return saved !== null ? JSON.parse(saved) : "Guest";
  });

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  const hours = new Date().getHours();
  let greeting = "Good night";
  if (hours > 5 && hours < 11) greeting = "Good morning";
  else if (hours >= 11 && hours < 16) greeting = "Good afternoon";
  else if (hours >= 16 && hours < 20) greeting = "Good evening";

  const handleSL = (value: string) => {
    setUsername(value);
  };
  return (
    <Global date={date} module={module} title={title}>
      <Modal onSubmit={handleSL} />
      <h2 className={css["title"]}>
        {greeting}, {username}!
      </h2>
    </Global>
  );
};

export default Greeting;
