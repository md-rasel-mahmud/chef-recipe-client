import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "left",
    color: "black",
    textDecoration: "underline",
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    textAlign: "justify",
    color: "grey",
    lineHeight: 1.5,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Text style={styles.title}>Blog</Text>
        <Text style={styles.subtitle}>
          1. The differences between uncontrolled and controlled components.
        </Text>
        <Text style={styles.paragraph}>
          In a controlled component, the component's state is managed by React,
          while in an uncontrolled component, the component's state is managed
          by the DOM. Controlled components are typically preferred because they
          offer more control and predictability over the behavior of the
          component, while uncontrolled components can be more convenient for
          simple use cases where state management is not as critical.
        </Text>
        <Text style={styles.subtitle}>
          2. How to validate React props using PropTypes
        </Text>
        <Text style={styles.paragraph}>
          Props are important for passing read-only attributes to React
          components, but if not used correctly, components may not behave as
          expected. Prop validation helps avoid future bugs and improves
          readability by ensuring the correct usage of components. PropTypes can
          catch bugs by validating data types passed through props, but defining
          components with propTypes is optional. Using propTypes can help avoid
          unexpected bugs.
        </Text>
        <Text style={styles.subtitle}>
          {" "}
          3. The difference between nodejs and express js.
        </Text>
        <Text style={styles.paragraph}>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
          engine. It allows developers to run JavaScript code outside of a web
          browser, making it possible to use JavaScript for server-side
          programming. Express.js is a web framework built on top of Node.js
          that simplifies the process of building web applications and APIs.
        </Text>
        <Text style={styles.subtitle}>
          {" "}
          4.What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text style={styles.paragraph}>
          A custom hook is a reusable function in React that encapsulates some
          specific functionality using built-in hooks. You create a custom hook
          to make your code more modular, abstract away complex logic, and
          improve comparability. and over again.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
