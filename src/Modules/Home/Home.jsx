import React from "react";
import { H1, Div } from "./style";
import Layout from "../../Layout";

const Profile = () => {
  // useEffect(() => {
  //   const title = document.querySelector("h1").innerText;
  //   const xx = title.split("");

  //   xx.map((string, index) => {
  //     console.log("iteam", string);
  //     return <>{string}</>;
  //   });
  // });

  return (
    <>
      <Layout>
        <Div>
          <strong>Hello, There</strong>
          <H1>I'm Devendra Kushwaha</H1>
          <h2>I am a Full-stack developer</h2>
          <div className="download-cv">
            <a href="/#" className="button">
              Download cv
            </a>
          </div>
          <div className="mt-5">
            <h3> 2021 plan </h3>
            <ul>
              <li>React native</li>
            </ul>
          </div>
        </Div>
      </Layout>
    </>
  );
};
export default Profile;
