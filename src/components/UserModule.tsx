import css from "./UserMenu.module.css";
import { HiUser } from "react-icons/hi";

interface UserMenuProps {
  name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
  return (
    <div>
      <HiUser className={css.icon} size={24}>
        {name}
      </HiUser>
    </div>
  );
}
