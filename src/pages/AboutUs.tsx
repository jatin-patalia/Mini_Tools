// const teamMembers = [
//   {
//     name: "Jatin Soni",
//     role: "Creator & Developer",
//     avatar:
//       "https://ui-avatars.com/api/?name=Jatin+Soni&background=0D8ABC&color=fff",
//     bio: "Full-stack developer passionate about building simple, useful web tools with great UX.",
//   },
//   // Add more team members here if needed
// ];
const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Welcome to <strong>Mini Tools</strong> — your all-in-one solution for
          quick, easy-to-use utilities. Whether you're a developer, student,
          creator, or just someone who wants to get things done faster, this
          platform provides a growing collection of everyday tools to boost your
          productivity.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          From formatting JSON, compressing images, and generating secure
          passwords to converting units, calculating age, and more — our tools
          are designed to work fast, stay accessible, and require no
          installation or signup.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This project is crafted with ❤️ using <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, with
          the goal of delivering a lightweight, responsive, and beautiful user
          experience across devices.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          New tools are added regularly based on user feedback and demand. If
          there's a feature you'd love to see, feel free to reach out!
        </p>
      </div>
    </section>
    // <section className="max-w-6xl mx-auto p-3">
    //   <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
    //     <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
    //     <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
    //       Welcome to <strong>Mini Tools</strong> — your all-in-one solution for
    //       quick, easy-to-use utilities. From developers to casual users, we make
    //       tools for everyone.
    //     </p>
    //     <p className="text-gray-700 dark:text-gray-300 mb-6">
    //       Built using React, TypeScript, and Tailwind CSS — lightweight,
    //       responsive, and open for future ideas.
    //     </p>

    //     <h2 className="text-2xl font-semibold text-primary mb-4">Our Team</h2>
    //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //       {teamMembers.map((member, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md"
    //         >
    //           <img
    //             src={member.avatar}
    //             alt={member.name}
    //             className="w-24 h-24 rounded-full mb-4 border-4 border-primary"
    //           />
    //           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
    //             {member.name}
    //           </h3>
    //           <p className="text-sm text-primary font-medium mb-2">
    //             {member.role}
    //           </p>
    //           <p className="text-sm text-gray-600 dark:text-gray-300">
    //             {member.bio}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default AboutUs;
