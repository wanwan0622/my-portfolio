import { fontFamily } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ href, is_newpage, children }) => {
  return is_newpage ? (
    <Link
      to={href}
      target="blank"
      style={{
        textDecoration: "none",
        fontSize: "16px",
        color: "#757575",
        fontWeight: "bold",
        fontFamily: '"Cormorant Garamond", serif',
      }}
    >
      {children}
    </Link>
  ) : (
    <Link
      to={href}
      style={{
        textDecoration: "none",
        fontSize: "16px",
        color: "#757575",
        fontWeight: "bold",
        fontFamily: '"Cormorant Garamond", serif',
      }}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
