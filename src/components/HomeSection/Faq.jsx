import React from "react";

const Faq = () => {
  return (
    <div className="max-w-screen-lg mx-5 md:mx-auto flex flex-col gap-2 py-10">
      <div className="divider"></div>
      <h2 className="text-center my-10 text-3xl text-primary underline underline-offset-8">
        FAQ
      </h2>
      <div
        tabIndex={0}
        className={`collapse cursor-pointer collapse-arrow focus:outline-none shadow-lg bg-base-100 rounded-box`}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q1: What is a chef recipe?
        </div>
        <div className="collapse-content cursor-text">
          <p>
            A1: A chef recipe is a set of instructions written by a professional
            chef, detailing the ingredients, measurements, and step-by-step
            procedures required to prepare a specific dish or meal.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className={`collapse cursor-pointer collapse-arrow focus:outline-none shadow-lg bg-base-100 rounded-box`}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q2: How can I find chef recipes?
        </div>
        <div className="collapse-content cursor-text">
          <p>
            A2: There are several ways to find chef recipes. You can search for
            them online on cooking websites, blogs, or recipe databases.
            Additionally, you can explore cookbooks authored by renowned chefs
            or even attend cooking classes where chefs share their recipes.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className={`collapse cursor-pointer collapse-arrow focus:outline-none shadow-lg bg-base-100 rounded-box`}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q3: Are chef recipes suitable for beginners?
        </div>
        <div className="collapse-content cursor-text">
          <p>
            A3: Chef recipes can vary in complexity, but many chefs provide
            recipes suitable for beginners. Look for recipes labeled as "easy"
            or "beginner-friendly." These recipes typically have detailed
            instructions and simpler techniques to help beginners follow along
            and achieve delicious results.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className={`collapse cursor-pointer collapse-arrow focus:outline-none shadow-lg bg-base-100 rounded-box`}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q4: Can I modify a chef recipe to suit my dietary restrictions?
        </div>
        <div className="collapse-content cursor-text">
          <p>
            A4: Absolutely! Chef recipes are often adaptable to accommodate
            various dietary restrictions. You can make substitutions or omit
            certain ingredients to align with your needs. However, it's
            advisable to understand the purpose of each ingredient in the recipe
            to ensure any modifications don't compromise the overall flavor and
            texture.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className={`collapse cursor-pointer collapse-arrow focus:outline-none shadow-lg bg-base-100 rounded-box`}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q5: How can I ensure success when using a chef recipe?
        </div>
        <div className="collapse-content cursor-text">
          <p>
            A5: To increase your chances of success, read the recipe thoroughly
            before starting. Gather and prepare all the necessary ingredients
            and equipment in advance. Follow the instructions closely, paying
            attention to cooking times and techniques. Additionally, trust your
            instincts and taste along the way, adjusting seasoning or other
            elements to suit your preferences. Practice and experience will also
            improve your ability to execute chef recipes effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
