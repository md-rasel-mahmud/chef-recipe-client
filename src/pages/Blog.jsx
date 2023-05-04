import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFFile from "../components/PdfFile";
import { FaCloudDownloadAlt } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <div className="min-h-[75vh]">
        <h2 className="text-center my-5 text-3xl">Blog</h2>
        <PDFDownloadLink className="flex flex-col justify-start my-10" document={<PDFFile />} filename="document">
          <button className="btn btn-primary w-fit mx-auto">
            Download PDF <FaCloudDownloadAlt className="text-xl ml-2 " />
          </button>
        </PDFDownloadLink>
        <div className="flex flex-col gap-4 max-w-screen-lg mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              1. The differences between uncontrolled and controlled components.
            </div>
            <div className="collapse-content">
              <p>
                In a controlled component, the component's state is managed by
                React, while in an uncontrolled component, the component's state
                is managed by the DOM. Controlled components are typically
                preferred because they offer more control and predictability
                over the behavior of the component, while uncontrolled
                components can be more convenient for simple use cases where
                state management is not as critical.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              2. How to validate React props using PropTypes
            </div>
            <div className="collapse-content">
              <p>
                Props are important for passing read-only attributes to React
                components, but if not used correctly, components may not behave
                as expected. Prop validation helps avoid future bugs and
                improves readability by ensuring the correct usage of
                components. PropTypes can catch bugs by validating data types
                passed through props, but defining components with propTypes is
                optional. Using propTypes can help avoid unexpected bugs.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              3. The difference between nodejs and express js.
            </div>
            <div className="collapse-content">
              <p>
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
                engine. It allows developers to run JavaScript code outside of a
                web browser, making it possible to use JavaScript for
                server-side programming.
              </p>
              <p>
                Express.js is a web framework built on top of Node.js that
                simplifies the process of building web applications and APIs.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              4.What is a custom hook, and why will you create a custom hook?
            </div>
            <div className="collapse-content">
              <p>
                A custom hook is a reusable function in React that encapsulates
                some specific functionality using built-in hooks. You create a
                custom hook to make your code more modular, abstract away
                complex logic, and improve comparability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
