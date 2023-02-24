import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import { GiChart } from "react-icons/gi";
import { MdPostAdd } from "react-icons/md";

const menu = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
    path: "/dashboard",
  },
  {
    title: "Add Expense",
    icon: <MdPostAdd />,
    path: "/add-expense",
  },
  {
    title: "Chart",
    icon: <GiChart />,
    path: "/chart",
  },

  {
    title: "Profile",
    icon: <MdOutlineManageAccounts />,
    path: "/profile",
  },
];

export default menu;
