import React from "react";
import BlankLayout from "src/@core/layouts/BlankLayout";
import Image1 from "src/assets/images/bg_1.jpg";
import Image2 from "src/assets/images/main-logo.jpeg";
import { useRouter } from "next/router";

const Demo = () => {
  const router = useRouter();
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: `url(${Image1.src})` }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7u">
              <a href="#">
                <img id="logo" src={Image2.src} />
              </a>

              <input
                type="submit"
                style={{ backgroundColor: "#2c8c45", border: "none" }}
                onClick={() => router.push("/register")}
                value="Register for Event"
                className="btn btn-block btn-primary"
              />
              <input
                type="submit"
                style={{ backgroundColor: "#2c8c45", border: "none" }}
                onClick={() => router.push("/auth/login")}
                value="Log In"
                className="btn btn-block btn-primary"
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
