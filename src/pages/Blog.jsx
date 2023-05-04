import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

import ReactToPdf from "react-to-pdf";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
          1. The differences between uncontrolled and controlled components.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>2. How to validate React props using PropTypes</Text>
      </View>
      <View style={styles.section}>
        <Text> 3. The difference between nodejs and express js.</Text>
      </View>
      <View style={styles.section}>
        <Text>
          4.What is a custom hook, and why will you create a custom hook?
        </Text>
      </View>
    </Page>
  </Document>
);

const Blog = () => {
  return (
    <>
      <div className="min-h-[75vh]">
        <h2 className="text-center my-5 text-3xl">Blog</h2>
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
      <ReactToPdf>
        {({ toPdf, targetRef }) => (
          <div
            style={{ width: 500, height: 500, background: "red" }}
            onClick={toPdf}
            ref={targetRef}
          />
        )}
      </ReactToPdf>
    </>
  );
};

ReactPDF.render(<MyDocument />, `/example.pdf`);
export default Blog;
