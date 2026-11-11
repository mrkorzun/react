import { useEffect, useState } from "react";
import css from "./Greeting.module.css";
import Modal from "./Modal/Modal";

const Greeting = () => {
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
    <>
      <Modal onSubmit={handleSL} />
      <h2 className={css["title"]}>
        {greeting}, {username}
      </h2>
    </>
  );
};

export default Greeting;
