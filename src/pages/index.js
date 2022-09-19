import React from "react";
import BlankLayout from "src/@core/layouts/BlankLayout";
import Image1 from "src/assets/images/bg_1.jpg";
import Image2 from "src/assets/images/main-logo.jpeg";
import { useRouter } from "next/router";

const Demo = () => {
  const router = useRouter();
  return (
    <div class="d-lg-flex half">
      <div
        class="bg order-1 order-md-2"
        style={{ backgroundImage: `url(${Image1.src})` }}
      ></div>
      <div class="contents order-2 order-md-1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <a href="#">
                <img id="logo" src={Image2.src} />
              </a>

              <input
                type="submit"
                onClick={() => router.push("/register")}
                value="Register for Event"
                class="btn btn-block btn-primary"
              />
              <input
                type="submit"
                onClick={() => router.push("/auth/login")}
                value="Log In"
                class="btn btn-block btn-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Demo.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default Demo;
