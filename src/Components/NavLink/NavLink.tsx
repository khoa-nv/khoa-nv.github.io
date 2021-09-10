import React from 'react';
import { NavLink } from "react-router-dom";
import './NavLink.Style.css';
import img from 'assets/img/nav_active.svg';


type Props = {
  to: {
    label: String,
    path: String
  },
  className: any
}

const CustomNavLink: React.FC<Props> = ({ to, className }: Props): JSX.Element => {
  return (
    <NavLink
      exact
      to={to.path}
      className={className}
      activeClassName="navLinkActive"
    >
      <span>
        {to.label}
      </span>
      <img src={img} className="navlink_underline" alt="" />
    </NavLink>

  )
}

export default CustomNavLink;