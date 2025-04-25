export default function Contact() {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Interested in working together? Reach out to me!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shaun-kean-54aba71a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SKeana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="skean2000@outlook.com"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    );
  }