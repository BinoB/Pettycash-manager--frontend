import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/rupee.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <BsCashCoin size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link
                className="text-decoration-none rounded-pill"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-danger rounded-pill">
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-danger rounded-pill">
                <Link className="text-decoration-none" to="/dashboard">
                  Dashboard
                </Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-image ">
          <img src={heroImg} alt="" />
        </div>
        <div className="detail">
          <h1 className="display-1">Pettycash manager</h1>
          <h2 className="display-6">
            A petty cash manager is responsible for overseeing and maintaining
            accurate records of a small fund used for everyday expenses,
            ensuring proper authorization and documentation of all transactions.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
