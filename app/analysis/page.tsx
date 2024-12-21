import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Brain } from "lucide-react";

const colorClasses = [
  "bg-blue-50 border-blue-400",
  "bg-yellow-50 border-yellow-400",
  "bg-green-50 border-green-400",
  "bg-red-50 border-red-400",
  "bg-purple-50 border-purple-400",
  "bg-pink-50 border-pink-400",
  "bg-indigo-50 border-indigo-400",
  "bg-cyan-50 border-cyan-400",
  "bg-amber-50 border-amber-400",
  "bg-lime-50 border-lime-400",
  "bg-emerald-50 border-emerald-400",
  "bg-teal-50 border-teal-400",
  "bg-cyan-50 border-cyan-400",
  "bg-lightBlue-50 border-lightBlue-400",
  "bg-violet-50 border-violet-400",
  "bg-fuchsia-50 border-fuchsia-400",
  "bg-rose-50 border-rose-400",
  "bg-orange-50 border-orange-400",
  "bg-warmGray-50 border-warmGray-400",
  "bg-trueGray-50 border-trueGray-400",
];

const ANALYSIS = {
  tools: [
    {
      id: "1",
      title: "Check Your IQ",
      description:
        "Evaluate your logical and reasoning abilities with fun puzzles and tasks.",
      features: [
        "Pattern recognition tasks",
        "Mathematical problems",
        "Logical puzzles",
      ],
      route: "/analysis/check-iq",
    },
    {
      id: "2",
      title: "Find Your Strengths",
      description: "Identify skills and attributes where you excel.",
      features: [
        "Skill-based assessments",
        "Domain-specific questions",
        "Personality insights",
      ],
      route: "/analysis/find-strengths",
    },
    {
      id: "3",
      title: "Find Your Weaknesses",
      description: "Recognize areas for improvement to focus your efforts.",
      features: [
        "Stress scenarios",
        "Memory-based exercises",
        "Situational judgment tests",
      ],
      route: "/analysis/find-weaknesses",
    },
    {
      id: "4",
      title: "Career Path Matcher",
      description:
        "Get personalized career recommendations based on your preferences.",
      features: [
        "Interest-based survey",
        "Trending career suggestions",
        "Skill mapping",
      ],
      route: "/analysis/career-path-matcher",
    },
    {
      id: "5",
      title: "Emotional Quotient (EQ) Assessment",
      description:
        "Evaluate your emotional intelligence through targeted questions.",
      features: [
        "Empathy evaluation",
        "Self-awareness scoring",
        "Relationship management",
      ],
      route: "/analysis/eq-assessment",
    },
    {
      id: "6",
      title: "Aptitude for Remote Work",
      description:
        "Assess your compatibility with remote working environments.",
      features: [
        "Self-discipline evaluation",
        "Tech skills assessment",
        "Communication ability",
      ],
      route: "/analysis/remote-work-aptitude",
    },
    {
      id: "7",
      title: "Learning Style Identifier",
      description:
        "Discover how you learn best and optimize your study habits.",
      features: [
        "Visual preference test",
        "Auditory analysis",
        "Kinesthetic preference",
      ],
      route: "/analysis/learning-style",
    },
    {
      id: "8",
      title: "Time-Management Efficiency Test",
      description:
        "Determine how effectively you manage time and prioritize tasks.",
      features: [
        "Prioritization scenarios",
        "Habit identification",
        "Delegation strategies",
      ],
      route: "/analysis/time-management",
    },
    {
      id: "9",
      title: "Find Your Ideal Study Method",
      description:
        "Get tailored recommendations for effective study strategies.",
      features: [
        "Current practice analysis",
        "Active recall tips",
        "Focused session planning",
      ],
      route: "/analysis/study-method",
    },
    {
      id: "10",
      title: "Resilience and Stress Management Checker",
      description: "Evaluate your coping mechanisms and build resilience.",
      features: [
        "Daily stressor analysis",
        "Resilience tips",
        "Coping strategy evaluation",
      ],
      route: "/analysis/stress-management",
    },
    {
      id: "11",
      title: "Career Value Alignment",
      description:
        "Understand what you value most in a career and get matched to suitable roles.",
      features: [
        "Work-life balance analysis",
        "Job satisfaction scoring",
        "Value-based career suggestions",
      ],
      route: "/analysis/career-values",
    },
    {
      id: "12",
      title: "Personality-Driven Job Match",
      description: "Discover careers aligned with your personality traits.",
      features: [
        "Myers-Briggs model",
        "Big Five personality model",
        "Career case studies",
      ],
      route: "/analysis/personality-job-match",
    },
    {
      id: "13",
      title: "Subject Interest Analyzer",
      description: "Decide your academic stream based on your interests.",
      features: [
        "Interest-based survey",
        "Stream recommendations",
        "Skill alignment",
      ],
      route: "/analysis/subject-interest",
    },
    {
      id: "14",
      title: "Creative Potential Test",
      description: "Assess your creativity and out-of-the-box thinking skills.",
      features: [
        "Open-ended scenarios",
        "Pattern-completion exercises",
        "Brainstorming activities",
      ],
      route: "/analysis/creative-potential",
    },
    {
      id: "15",
      title: "Study-Work Balance Planner",
      description:
        "Plan and balance your studies with extracurricular activities.",
      features: [
        "Customizable scheduler",
        "Balance tips",
        "Habit-building suggestions",
      ],
      route: "/analysis/study-work-balance",
    },
    {
      id: "16",
      title: "Tech Aptitude Test",
      description:
        "Gauge your technical skills and interest in emerging technologies.",
      features: [
        "Basic coding challenges",
        "Tech-related quizzes",
        "Technology awareness test",
      ],
      route: "/analysis/tech-aptitude",
    },
    {
      id: "17",
      title: "College Readiness Checker",
      description:
        "Evaluate your preparedness for college and higher education.",
      features: [
        "Subject mastery evaluation",
        "Time management skills",
        "Independence assessment",
      ],
      route: "/analysis/college-readiness",
    },
    {
      id: "18",
      title: "Innovation Potential Test",
      description: "Evaluate your ability to innovate and generate new ideas.",
      features: [
        "Problem identification",
        "Creative solution generation",
        "Innovation brainstorming",
      ],
      route: "/analysis/innovation-potential",
    },
    {
      id: "19",
      title: "Public Speaking Confidence Meter",
      description: "Test your communication and presentation skills.",
      features: [
        "Mock speech scenarios",
        "Confidence scoring",
        "Tips for articulation",
      ],
      route: "/analysis/public-speaking",
    },
    {
      id: "20",
      title: "Financial Literacy Quiz",
      description: "Test your understanding of basic finance concepts.",
      features: [
        "Budgeting scenarios",
        "Saving and investment tips",
        "Financial decision-making",
      ],
      route: "/analysis/financial-literacy",
    },
  ],
};

const FeatureCard = ({ data, colorClass }) => {
  return (
    <Link className="block no-underline" href={data.route}>
      <Card
        className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${colorClass} border-t-4`}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl font-semibold text-slate-800">
              {data.title}
            </CardTitle>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </div>
          <CardDescription className="text-sm sm:text-base text-slate-600">
            {data.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {data.features.map((feature: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs sm:text-sm bg-white/50 hover:bg-white/80 transition-colors"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default function Analysis() {
  return (
    <div className="p-4 sm:p-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="flex items-center gap-2 text-3xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-800">
          <Brain className="text-red-600 font-bold" />{" "}
          <span>Analysis Tools</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ANALYSIS.tools.map((card) => {
            const colorIndex = Math.floor(Math.random() * colorClasses.length);
            return (
              <FeatureCard
                key={card.id}
                data={card}
                colorClass={colorClasses[colorIndex]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
