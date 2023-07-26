import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Image />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button>Sign up</button>
      </div>

      <div>
        <Image />
        <div>
          <p>Sign in</p>
          <p>Username/Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <label>Forgot password?</label>
          <div>
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <button>Sign in</button>
          <p>
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
          <Image />
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
  );
};

export default page;
