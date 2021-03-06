import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../assets/css/RegisterCss.css";

let handleClick = async () => {
  let data = {};
  console.log("hello worlddddd");
  //lay data tu cac input
  data.name = document.getElementById("register__form__input__name").value;
  data.nickName = document.getElementById(
    "register__form__input__nick-name"
  ).value;
  data.password = document.getElementById(
    "register__form__input__password"
  ).value;

  console.log(data);

  let requestPackage = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let response = await fetch("http://localhost:3001/users", requestPackage);
  let request = await response.json();
};

let Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row register mb-5 pb-4 pt-4">
          <div className="col-1"></div>
          <div className="register__title text-capitalize col-0 col-md-5">
            get our latest news
            <p className="register__title__subscribe text-capitalize">
              {" "}
              subscribe now{" "}
            </p>
            <div className="col-0 col-md-10 col-lg-8 float-right">
              <Button btnName={"Check it out"} />
            </div>
          </div>
          <div className="register__form col-12 col-md-6">
            <div className="register__form__input mt-3 mb-3">
              {/*input danh cho name */}
              <input
                type="text"
                id="register__form__input__name"
                placeholder="Your name"
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">Please fill in your name</div>
            </div>
            <div className="register__form__input mt-3 mb-3">
              {/*input danh cho nickname */}
              <input
                type="text"
                id="register__form__input__nick-name"
                placeholder="You want to be called as..."
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">
                You must fill in this field
              </div>
            </div>
            <div className="register__form__input mt-3 mb-3">
              {/*input danh cho password*/}
              <input
                type="password"
                id="register__form__input__password"
                placeholder="Password"
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">Password is required !</div>
            </div>
            <div className="register__form__input mt-3 mb-3">
              <input
                type="password"
                id="register__form__input__name"
                placeholder="Type your password again"
                className="form-control p-3"
                required
              />
              <div className="invalid-feedback">Type your password again !</div>
            </div>
            <Button btnName="submit" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
