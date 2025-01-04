"use client";
import Link from "next/link";
import React, { FormEventHandler } from "react";

const DATA = {
  questions: [
    {
      id: 1,
      question: "What is the next number in the series: 2, 4, 8, 16, ?",
      options: ["24", "32", "18", "20"],
      answer: "32",
    },
    {
      id: 2,
      question: "Which shape is different from the others?",
      options: ["Circle", "Square", "Triangle", "Sphere"],
      answer: "Sphere",
    },
    {
      id: 3,
      question:
        "If all roses are flowers, and some flowers fade quickly, what can we conclude?",
      options: [
        "All roses fade quickly",
        "Some flowers fade quickly",
        "All flowers fade quickly",
        "No roses fade quickly",
      ],
      answer: "Some flowers fade quickly",
    },
    {
      id: 4,
      question: "What is 15% of 200?",
      options: ["30", "25", "35", "40"],
      answer: "30",
    },
    {
      id: 5,
      question: "Which word does not belong to the group?",
      options: ["Dog", "Cat", "Carrot", "Bird"],
      answer: "Carrot",
    },
    {
      id: 6,
      question:
        "If you rearrange the letters 'CIFAIPC', you would get the name of a:",
      options: ["City", "Animal", "Ocean", "Plant"],
      answer: "Ocean",
    },
    {
      id: 7,
      question: "What comes next in the series: J, F, M, A, M, F, ?",
      options: ["A", "S", "J", "O"],
      answer: "J",
    },
    {
      id: 8,
      question:
        "A clock shows the time as 3:15. What angle is formed between the hour and minute hands?",
      options: ["0°", "7.5°", "22.5°", "15°"],
      answer: "7.5°",
    },
    {
      id: 9,
      question: "Complete the analogy: Book is to Read as Pen is to ?",
      options: ["Draw", "Write", "Ink", "Paper"],
      answer: "Write",
    },
    {
      id: 10,
      question: "Which number is a prime number?",
      options: ["9", "15", "17", "21"],
      answer: "17",
    },
  ],
};

export default function CheckIQ() {
  const [data, setData] = React.useState(
    DATA.questions.map((question) => ({
      ...question,
      userAnswer: "",
    }))
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const correctAnswers = data.filter(
      (question) => question.userAnswer === question.answer
    );
    alert(
      `You scored ${correctAnswers.length} out of ${data.length} questions.`
    );
  };

  return (
    <form className="bg-gray-100 min-h-screen p-4" onSubmit={handleSubmit}>
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl text-center font-bold mb-4">Check Your IQ</h1>
        <Link href={{ pathname: "/analysis", query: { id: "tools" } }}>
          <h2
            className="text-center text-blue-500 cursor-pointer"
            style={{ textDecoration: "underline" }}
          >
            Back to Tools
          </h2>
        </Link>
        <div>
          {data.map((question) => (
            <div key={question.id} className="mb-4">
              <h2 className="text-lg font-semibold">{question.question}</h2>
              <div className="mt-2">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      id={`question-${question.id}-${index}`}
                      value={option}
                      onChange={(e) => {
                        setData((prev) =>
                          prev.map((q) =>
                            q.id === question.id
                              ? { ...q, userAnswer: e.target.value }
                              : q
                          )
                        );
                      }}
                    />
                    <label
                      htmlFor={`question-${question.id}-${index}`}
                      className="ml-2"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            disabled={data.some((question) => question.userAnswer === "")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
