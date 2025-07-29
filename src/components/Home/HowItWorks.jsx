import {motion} from "framer-motion";

const HowItWorks = () => {
    const steps = [
  {
    id: 1,
    title: "Create an Account",
    desc: "Sign up using your email or Google to get started.",
  },
  {
    id: 2,
    title: "Track Job Applications",
    desc: "Easily add, update, and monitor your job applications.",
  },
  {
    id: 3,
    title: "Stay Organized",
    desc: "Use filters and categories to manage your job hunt efficiently.",
  },
];
    return (
        <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Understand how Job Tracker helps you land your dream job step by step.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-gray-300 rounded-2xl shadow-md p-6 border border-blue-300 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="text-indigo-500 font-bold text-4xl mb-2">{step.id}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;