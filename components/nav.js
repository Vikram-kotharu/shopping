import React, { useEffect, useState } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
  const [token, settoken] = useState();
  const router = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("jwt");
    settoken(data);
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("jwt");
    settoken();
  };

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
              {token ? (
                <>
                  <div className=" me-4">
                    <Link href={"/order"}>
                      <button className="btn btn-secondary " type="button">
                        <MdAccountCircle />
                      </button>
                    </Link>
                  </div>

                  <button onClick={logout} className="btn btn-danger">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href={"/login"}>
                    <button className="btn btn-dark">Login</button>
                  </Link>
                </>
              )}

              <Link className="ms-3 ico" href="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
