import { MouseEventHandler, ReactNode, useState } from "react";
import "./Navigation.scss";
import { HFlex, VFlex } from "../../shared/Layout/Flex/Flex";
import { MdForwardToInbox } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const navItems = [
  {
    caption: "Navigation",
    navItems: [
      { label: "Inbox", icon: <MdForwardToInbox /> },
      { label: "Sent", icon: <SiMinutemailer /> },
    ],
  },
];

const Navigation = () => {
  const [active, setActive] = useState("Inbox");
  return (
    <VFlex className="navigation">
      {navItems?.map((group) => {
        return (
          <>
            <p className="navCaption">{group.caption}</p>
            {group?.navItems?.map((nav) => (
              <NavItem
                key={nav?.label}
                isActive={nav?.label === active}
                {...nav}
                onClick={() => setActive(nav?.label)}
              />
            ))}
          </>
        );
      })}
    </VFlex>
  );
};

export default Navigation;

type TNavItemProps = {
  label: string;
  icon: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  isActive: boolean;
};

const NavItem = ({ label, icon, onClick, isActive }: TNavItemProps) => {
  return (
    <HFlex>
      <a className={`navitem ${isActive ? "active" : ""}`} onClick={onClick}>
        {icon} {label}
      </a>
    </HFlex>
  );
};
