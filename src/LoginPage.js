import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./LoginPage.css";
import Header from "./Header";
function LoginPage() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [categoryChoice, setCategoryChoice] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        user: input,
        category: categoryChoice,
      })
    );
  };

  const handleChange = (e) => {
    setCategoryChoice(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="form__wrapper">
        <form className="form__container">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Name"
          />
          <select
            name="category"
            value={categoryChoice}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Category
            </option>
            <option value="C++">C++</option>
            <option value="Javascript">Javascript</option>
          </select>
          <button type="submit" onClick={handleLoginSubmit}>
            Play
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
