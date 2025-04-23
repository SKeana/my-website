function Projects() {
    const projects = [
      {
        title: 'Recipe Website',
        description: 'A web app to browse, save, and share recipes. Built with React and Tailwind CSS.',
        github: 'https://github.com/yourusername/recipe-website',
      },
      {
        title: 'Task Management App',
        description: 'A Trello-like app for organizing tasks with drag-and-drop. Built with React and Node.js.',
        github: 'https://github.com/yourusername/task-manager',
      },
      {
        title: 'Personal Finance Tracker',
        description: 'An app to track income, expenses, and budgets. Built with React and MongoDB.',
        github: 'https://github.com/yourusername/finance-tracker',
      },
    ];
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;