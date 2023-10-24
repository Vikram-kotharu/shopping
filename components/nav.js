import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            The-E-Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" href="/shirts">
                Shirts
              </Link>
              <Link className="nav-link" href="/hoodies">
                Hoodies
              </Link>
              <Link className="nav-link" href="/cups">
                Mugs
              </Link>
              <Link className="nav-link" href="/stickers">
                Stickers
              </Link>
            </div>
            <div className="navbar-nav bob1">
              <Link href='/cart'><AiOutlineShoppingCart /></Link>
              
              
              
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
