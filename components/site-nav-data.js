export const navLink = "hover:opacity-60 transition duration-200";
export const activeNavLink = "font-medium hover:opacity-60 transition duration-200";

export const dropdownLinks = [
  {
    href: "/over-ons",
    label: "Over ons",
  },
  {
    href: "/team/persoon-1",
    label: "Jacob Remijnse",
  },
  {
    href: "/team/persoon-2",
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
      activeDropdown: "/team/persoon-1",
    },
    "/diensten": {
      activePrimary: "/diensten",
      activeDropdown: "/team/persoon-1",
    },
    "/over-ons": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/persoon-1",
    },
    "/team/persoon-1": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/persoon-1",
    },
    "/team/persoon-2": {
      activePrimary: "/over-ons",
      activeDropdown: "/team/persoon-2",
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
