export const navLink = "hover:opacity-60 transition duration-200";
export const activeNavLink = "font-medium hover:opacity-60 transition duration-200";

export const dropdownLinks = [
  {
    href: "/over-ons",
    label: "Over ons",
  },
  {
    href: "/team/jacob-remijnse",
    label: "Jacob Remijnse",
  },
  {
    href: "/team/dennis-smith",
    label: "Dennis Smith",
  },
  {
    href: "/team/eefje-wassenaar",
    label: "Eefje Wassenaar",
  },
];

export const footerLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/diensten",
    label: "Diensten",
  },
  {
    href: "/over-ons",
    label: "Over ons",
  },
];

export function getHeaderState(pathname) {
  const states = {
    "/": {
      activePrimary: "/",
      activeDropdown: "/team/jacob-remijnse",
    },
    "/diensten": {
      activePrimary: "/diensten",
      activeDropdown: "/team/jacob-remijnse",
    },
    "/over-ons": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/jacob-remijnse",
    },
    "/team/jacob-remijnse": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/jacob-remijnse",
    },
    "/team/dennis-smith": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/dennis-smith",
    },
    "/team/eefje-wassenaar": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/eefje-wassenaar",
    },
  };

  return (
    states[pathname] || {
      activePrimary: null,
      activeDropdown: null,
    }
  );
}
