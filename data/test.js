export const TEST_DATA = {
  testName: "Huvieo Psychometric Test",
  description:
    "A comprehensive test to evaluate cognitive abilities, personality traits, and career preferences for Indian students.",
  sections: [
    {
      sectionName: "Cognitive Abilities Assessment",
      questions: [
        {
          questionId: "q1",
          text: "If Ramesh’s rank is 8th from the top in a class of 40, what is his rank from the bottom?",
          type: "multipleChoice",
          options: ["33rd", "32nd", "34th", "31st"],
          correctAnswer: "33rd",
        },
        {
          questionId: "q2",
          text: "A train runs at a speed of 60 km/h for 2 hours. How far does it travel?",
          type: "multipleChoice",
          options: ["120 km", "180 km", "60 km", "90 km"],
          correctAnswer: "120 km",
        },
        {
          questionId: "q3",
          text: "Find the missing shape in the pattern: ◻︎ ◻︎ ▲ ◻︎ ◻︎ ▲?",
          type: "visualInput",
          options: ["◻︎", "▲", "●", "★"],
          correctAnswer: "◻︎",
        },
      ],
    },
    {
      sectionName: "Personality and Behavioral Analysis",
      questions: [
        {
          questionId: "q4",
          text: "Which of the following careers excites you the most?",
          type: "multipleChoice",
          options: ["Engineering", "Arts & Literature", "Medicine", "Business"],
        },
        {
          questionId: "q5",
          text: "On a scale of 1 to 5, how comfortable are you working in teams?",
          type: "scale",
          scaleRange: [1, 5],
        },
      ],
    },
    {
      sectionName: "Emotional and Social Intelligence",
      questions: [
        {
          questionId: "q6",
          text: "You missed a crucial deadline. What would you do?",
          type: "situationalJudgment",
          options: [
            "Apologize and plan better.",
            "Blame external factors.",
            "Ignore it and move on.",
          ],
        },
        {
          questionId: "q7",
          text: "A classmate is struggling with studies. What do you do?",
          type: "situationalJudgment",
          options: [
            "Offer help.",
            "Suggest they seek guidance.",
            "Ignore them.",
          ],
        },
      ],
    },
    {
      sectionName: "Aptitude Assessment",
      questions: [
        {
          questionId: "q8",
          text: "Which of these is the correct formula for calculating the area of a triangle?",
          type: "multipleChoice",
          options: ["1/2 * base * height", "base + height", "base * height"],
          correctAnswer: "1/2 * base * height",
        },
        {
          questionId: "q9",
          text: "Rearrange the following to form a meaningful sentence: is / name / my / Rohan.",
          type: "rearrange",
          correctAnswer: "My name is Rohan.",
        },
      ],
    },
    {
      sectionName: "General Knowledge",
      questions: [
        {
          questionId: "q10",
          text: "Who is known as the Missile Man of India?",
          type: "multipleChoice",
          options: [
            "Dr. A.P.J. Abdul Kalam",
            "Dr. Homi Bhabha",
            "Dr. Vikram Sarabhai",
          ],
          correctAnswer: "Dr. A.P.J. Abdul Kalam",
        },
        {
          questionId: "q11",
          text: "Who is the current Prime Minister of India (2024)?",
          type: "shortAnswer",
        },
      ],
    },
    {
      sectionName: "Stress and Coping Mechanisms",
      questions: [
        {
          questionId: "q12",
          text: "Rate your stress level during exams on a scale of 1 to 5.",
          type: "scale",
          scaleRange: [1, 5],
        },
        {
          questionId: "q13",
          text: "When stressed, I usually...",
          type: "multipleChoice",
          options: [
            "Talk to friends or family.",
            "Distract myself with activities.",
            "Procrastinate.",
          ],
        },
      ],
    },
  ],
};
