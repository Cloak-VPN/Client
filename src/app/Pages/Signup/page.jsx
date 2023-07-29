"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import React from "react";
import logo from "../../Assets/Images/logo.svg";
import loginlogo from "../../Assets/Images/loginlogo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../../Assets/Images/discord.svg";
import SendIcon from "../../Assets/Images/SendIcon.svg";
import moreicon from "../../Assets/Images/moreicon.svg";

const page = () => {
  //Formik Logics
  const formiksign = useFormik({
    initialValues: {
      Username: "",
      EmailOrPhone: "",
      password: "",
      confirmPassword: "",
      checkbox: "",
      Subscribe: "",
    },

    //Validate form
    validationSchema: Yup.object({
      Username: Yup.string()
        .max(20, "Username must be 25 characters or less")
        .required("Username is required"),
      EmailOrPhone: Yup.string().required("Email or phone number is required"),
      password: Yup.string()
        .required(`Required`)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Invalid Password"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Password does not match")
        .required("Confirm"),
      checkbox: Yup.boolean(),
      Subscribe: Yup.string(),
    }),

    // Submit Form
    onSubmit: (values) => {
      console.log(values);
      // navigate("/home");
    },
  });
  //   console.log(formik.errors);
  // const navigate = useNavigate();

  return (
    <form onSubmit={formiksign.handleSubmit}>
      <div className="overflow-hidden">
        <nav className="pt-[1%] backdrop-blur-md flex justify-between items-center w-[100%] h-[10%] px-[5%]">
          <Image src={logo} alt="logo" width={140} />
          <ul className="flex justify-center items-center text-lg ">
            <li className=" py-[0px] bg-gray-700 text-white rounded-bl-lg">
              <a className="px-[20px] py-[0.5em] bg-white text-black chippedbutton">
                Features
              </a>
            </li>
            <li className="px-[20px] py-[0.5em] bg-gray-700 text-white">
              <a className="">Pricing</a>
            </li>
            <li className="px-[20px] py-[0.5em] bg-gray-700 text-white">
              <a className="">About us</a>
            </li>
            <li className="px-[20px] pr-[25px] py-[0.5em] bg-gray-700 text-white">
              <a className="flex">
                <p>More</p>{" "}
                <Image src={moreicon} alt="icon" width={10} className="ml-3" />
              </a>
            </li>
          </ul>
          <button className="chippedbutton bg-white text-black px-[1.5em] py-[0.3em]  text-lg font-bold ">
            Sign in
          </button>
        </nav>

        <div className="h-screen w-screen grid grid-cols-2 place-items-center snap-start">
          <div className="w-3/5 flex items-center justify-center ">
            <Image src={loginlogo} alt="login logo" />
          </div>
          <div className="w-3/5 mr-5 flex flex-col justify-center  gap-y-4">
            <p className=" text-3xl font-bold pb-8">Create account</p>
            <div id=" usernamediv">
              <p
                className={` text-lg ${
                  formiksign.errors.Username ? "text-red-500" : ""
                }`}
              >
                {formiksign.errors.Username
                  ? formiksign.errors.Username
                  : "Username"}
              </p>
              <input
                type="text"
                name="Username"
                className=" bg-transparent border-white border rounded w-[100%] h-10 text-lg"
                value={formiksign.values.Username}
                onChange={formiksign.handleChange}
                onBlur={formiksign.handleBlur}
              />
            </div>
            <div id=" emailorphonediv">
              <p
                className={` text-lg ${
                  formiksign.errors.EmailOrPhone ? "text-red-500" : ""
                }`}
              >
                {formiksign.errors.EmailOrPhone
                  ? formiksign.errors.EmailOrPhone
                  : "Email or phone number"}
              </p>
              <input
                type="text"
                name="EmailOrPhone"
                className=" bg-transparent border-white border rounded w-[100%] h-10 text-lg"
                value={formiksign.values.EmailOrPhone}
                onChange={formiksign.handleChange}
                onBlur={formiksign.handleBlur}
              />
            </div>
            <div id="passwordNconfirmdiv" className="flex w-full gap-x-10">
              <div id="passworddiv">
                <p
                  className={` text-lg ${
                    formiksign.errors.password ? "text-red-500" : ""
                  }`}
                >
                  {formiksign.errors.password
                    ? formiksign.errors.password
                    : "Password"}
                </p>
                <input
                  type="password"
                  name="password"
                  className=" bg-transparent border-white border rounded w-[100%] h-10 text-lg"
                  value={formiksign.values.password}
                  onChange={formiksign.handleChange}
                  onBlur={formiksign.handleBlur}
                />
              </div>
              <div id="confirmpassworddiv">
                <p
                  className={` text-lg ${
                    formiksign.errors.confirmPassword ? "text-red-500" : ""
                  }`}
                >
                  {formiksign.errors.confirmPassword
                    ? formiksign.errors.confirmPassword
                    : "Confirm password"}
                </p>
                <input
                  type="password"
                  name="confirmPassword"
                  className=" bg-transparent border-white border rounded w-[100%] h-10 text-lg"
                  value={formiksign.values.confirmPassword}
                  onChange={formiksign.handleChange}
                  onBlur={formiksign.handleBlur}
                />
              </div>
            </div>

            <div className=" flex items-center mt-5">
              <input
                type="checkbox"
                name="checkbox"
                className=" w-5 h-5 bg-transparent border-white focus:ring-0 focus:ring-offset-0 rounded-sm cursor-pointer"
                value={formiksign.values.checkbox}
                onChange={formiksign.handleChange}
              />
              <p className=" text-lg ml-4">Remember me?</p>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                id="button-save"
                className=" bg-white text-black rounded-sm w-[100%] h-12 py-1 text-lg font-bold mt-8"
              >
                Create account
              </button>
            </div>
            <p className=" text-lg w-[100%] text-center">
              Already have an account? <label>Sign in</label>
            </p>
          </div>
        </div>

        <hr className="h-[2px] my-8 bg-white border-0" />
        <section>
          <ul className="flex justify-evenly items-center h-[25vh]">
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <hr className="h-[2px] my-8 bg-white border-0" />
        <section className="flex justify-evenly items-start h-[25vh]">
          <div className="grid gap-y-10">
            <Image src={logo} alt="logo" width={250} />
            <p className="text-lg">
              All rights reserved. <br />
              2023 CLOAK.
            </p>
          </div>

          <div className="grid gap-y-10 ">
            <p className="text-lg">
              Stay updated on Cloak news and announcements
            </p>
            <div className="relative">
              <input
                type="email"
                name="Subscribe"
                placeholder="example@gmail.com"
                className="chippedbutton w-[30vw] text-lg text-black bg-white indent-1"
                value={formiksign.values.Subscribe}
                onChange={formiksign.handleChange}
                onBlur={formiksign.handleBlur}
              />
              <Image
                src={SendIcon}
                alt="sendicon"
                className="absolute top-1/2 -translate-y-1/2 right-5"
                onClick={formiksign.handleSubmit}
              />
            </div>
          </div>

          <div className="grid gap-y-10">
            <p className="text-lg">Socials</p>
            <div className="flex gap-x-5">
              <FacebookIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
              <Image src={DiscordIcon} alt="logo" width={35} />
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default page;
