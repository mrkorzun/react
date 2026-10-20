import css from "./Counter.module.css";

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

const ClickCounter = ({ value, onUpdate }: ClickCounterProps) => {
  return (
    <div className={css["counter"]}>
      <button onClick={onUpdate}>Click Me: {value}</button>
    </div>
  );
};

export default ClickCounter;
