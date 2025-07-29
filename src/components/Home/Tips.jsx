import { useState } from "react";
import { motion } from "framer-motion";

const Tips = () => {
    const tips = [
        {
    id: 1,
    title: "Top 5 Interview Questions",
    summary: "Prepare yourself with these commonly asked interview questions.",
    details: [
      "Tell me about yourself.",
      "What are your strengths and weaknesses?",
      "Why should we hire you?",
      "Where do you see yourself in 5 years?",
      "Do you have any questions for us?",
    ],
        },
        {
    id: 2,
    title: "How to Write a Professional CV",
    summary: "Craft an attractive and job-winning CV with these tips.",
    details: [
      "Use a clean and modern layout.",
      "Highlight key achievements.",
      "Tailor your CV for each job.",
      "Use action words like 'developed', 'led', 'achieved'.",
      "Keep it concise and error-free.",
    ],
        },
        {
    id: 3,
    title: "Remote Job Preparation Tips",
    summary: "Succeed in remote job interviews and daily workflow.",
    details: [
      "Ensure a stable internet connection.",
      "Create a quiet workspace.",
      "Be familiar with Zoom/Google Meet tools.",
      "Be punctual and dress professionally.",
      "Practice communication clearly and confidently.",
    ],
        }];
    const [selected, setSelected] = useState(null);
    const toggleDetails = (id) => {
    setSelected(selected === id ? null : id);
};
    return (
        <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Career Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{tip.title}</h3>
              <p className="text-gray-700 mb-4">{tip.summary}</p>
              <button
                onClick={() => toggleDetails(tip.id)}
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                {selected === tip.id ? "Hide Tips" : "See Tips"}
              </button>
              {selected === tip.id && (
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1">
                  {tip.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Tips;