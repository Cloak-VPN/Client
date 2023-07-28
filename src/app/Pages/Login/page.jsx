"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import React from "react";
import logo from "../../Assets/Images/logo.svg";
import loginlogo from "../../Assets/Images/loginlogo.svg";

const page = () => {
  //Formik Logics
  const formiklog = useFormik({
    initialValues: {
      EmailOrUsername: "",
      password: "",
      checkbox: "",
    },

    //Validate form
    validationSchema: Yup.object({
      EmailOrUsername: Yup.string()
        .max(25, "Username/Email must be 25 characters or less")
        .required("Username/Email is required"),
      password: Yup.string().required(`Password can't be empty`),
      // checkbox: Yup.boolean(),
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
    <form onSubmit={formiklog.handleSubmit}>
      <div className="overflow-hidden">
        <nav className="flex justify-between items-center w-[100%] pl-[5px] pr-[5px]">
          <Image src={logo} alt="logo" width={80} height={10} />
          <ul className="flex justify-center items-center text-[8px]">
            <li className="px-[0px] py-[4.5px] bg-gray-700 text-white rounded-bl-lg">
              <a className="px-[12.5px] py-[4.5px] bg-white text-black rounded-bl-lg rounded-tr-lg">
                Features
              </a>
            </li>
            <li className="px-[12.5px] py-[4.5px] bg-gray-700 text-white">
              <a className="">Pricing</a>
            </li>
            <li className="px-[12.5px] py-[4.5px] bg-gray-700 text-white">
              <a className="">About us</a>
            </li>
            <li className="px-[12.5px] py-[4.5px] bg-gray-700 text-white">
              <a className="">More</a>
            </li>
          </ul>
          <button className=" text-xs bg-white text-black rounded-sm px-[20px] mt-[2px] py-[3px] font-bold rounded-bl-lg rounded-tr-lg">
            Sign up
          </button>
        </nav>

        <div className="h-screen w-screen grid grid-cols-2 place-items-center snap-start">
          <div className="w-3/5 flex items-center justify-center ">
            <Image src={loginlogo} alt="login logo" />
          </div>
          <div className="w-3/5 mr-5 flex flex-col justify-center  gap-y-2">
            <p className=" font-bold pb-10">Sign in</p>
            <div id=" usernamediv">
              <p
                className={` text-[8px] ${
                  formiklog.errors.EmailOrUsername ? "text-red-500" : ""
                }`}
              >
                {formiklog.errors.EmailOrUsername
                  ? formiklog.errors.EmailOrUsername
                  : "Username/Email"}
              </p>
              <input
                type="text"
                name="EmailOrUsername"
                className=" bg-transparent border-white border rounded w-4/5 h-6 text-[9px]"
                value={formiklog.values.EmailOrUsername}
                onChange={formiklog.handleChange}
                onBlur={formiklog.handleBlur}
              />
            </div>
            <div id="passworddiv">
              <p
                className={` text-[8px] ${
                  formiklog.errors.password ? "text-red-500" : ""
                }`}
              >
                {formiklog.errors.password
                  ? formiklog.errors.password
                  : "Password"}
              </p>
              <input
                type="password"
                name="password"
                className=" bg-transparent border-white border rounded w-4/5 h-6 text-[9px]"
                value={formiklog.values.password}
                onChange={formiklog.handleChange}
                // onBlur={formiklog.handleBlur}
              />
            </div>
            <label className=" text-[8px] w-4/5 text-center">
              Forgot password?
            </label>
            <div className=" flex items-center">
              <input
                type="checkbox"
                name="checkbox"
                className=" w-3 h-3 bg-transparent border-white focus:ring-0 focus:ring-offset-0 rounded-sm cursor-pointer"
                value={formiklog.values.checkbox}
                onChange={formiklog.handleChange}
              />
              <p className=" text-[9px] ml-4">Remember me?</p>
            </div>
            <button
              type="submit"
              id="button-save"
              className=" text-xs bg-white text-black rounded-sm w-4/5 py-1 font-bold"
            >
              Sign in
            </button>
            <p className=" text-[8px] w-4/5 text-center">
              Don't have an account? <label>Sign up</label>
            </p>
          </div>
        </div>

        <section>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section>
          <div>
            {/* <Image /> */}
            <p>
              All rights reserved. <br />
              2023 CLOAK.
            </p>
          </div>

          <div>
            <p>Stay updated on Cloak news and announcements</p>
            <input type="email" placeholder="example@gmail.com" />
            <icon></icon>
          </div>

          <div>
            <p>Socials</p>
            <div>
              <icon></icon>
              <icon></icon>
              <icon></icon>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default page;
