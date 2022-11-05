// npm i react-router-dom
import { Link } from "react-router-dom";

import React from "react";

function Public() {
  return (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap"> Technotes </span>
        </h1>
        <Link to="/login">Employee Login</Link>
      </header>
      <main className="public__main">
        <p>
          We are a small family business that has been in operation for over 30
          years. You can login to your account and create your own notes.
        </p>
        <address className="public__addr">
          Our address is: 1234 Main Street, Anytown, USA
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+972584443338">tel: +972 0584443338</a>
        </address>
      </main>
      <footer>
        <p>Owner: Mahmod's Technotesltd</p>
      </footer>
    </section>
  );
}

export default Public;
