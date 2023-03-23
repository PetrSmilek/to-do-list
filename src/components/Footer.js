import React from "react";

function Footer() {
  const now = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright ⓒ {now} </p>
    </footer>
  );
}

export default Footer;