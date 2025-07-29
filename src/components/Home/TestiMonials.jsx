import { motion } from "framer-motion";

const TestiMonials = () => {
   const testimonials = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    photo: "https://i.ibb.co/SnwKfQH/user1.jpg",
    company: "Google",
    feedback:
      "I found my dream job through JobTrack. The interface is amazing and very user-friendly.",
  },
  {
    id: 2,
    name: "Mehjabin Sultana",
    photo: "https://i.ibb.co/p0fS1zT/user2.jpg",
    company: "Meta",
    feedback:
      "This site helped me a lot in finding a remote job. Highly recommended!",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    photo: "https://i.ibb.co/Ny0Ft4h/user3.jpg",
    company: "Pathao",
    feedback:
      "I also got jobs in local companies through JobTrack. Big thanks to the team!",
  },
];
    return (
        <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((user, index) => (
            <motion.div
              key={user.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{user.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default TestiMonials;