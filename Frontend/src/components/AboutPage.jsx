import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="bg-blue-500 p-6">
          <h2 className="text-3xl font-bold text-white">About Us</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
            <p className="text-gray-700 mt-2">
              Artistry Reads is a startup founded in 2024 by a group of
              passionate book enthusiasts led by CEO Athul Gopal K and company
              Manager Pranav Raj V. Our mission is to connect readers with the
              books that will inspire, inform, and entertain them. We believe in
              the transformative power of literature and are committed to
              helping both authors and readers find their next great adventure.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">What We Do</h3>
            <p className="text-gray-700 mt-2">
              At Artistry Reads, we provide a platform for authors to share
              their work and for readers to discover new and exciting titles.
              Our services include book publishing, marketing, and distribution,
              as well as a vibrant community where book lovers can connect and
              share their experiences.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-700 mt-2">
              We envision a world where every story finds its audience, and
              every reader finds a story that resonates with them. Our goal is
              to create a global community of book lovers who support and
              inspire one another.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
            <p className="text-gray-700 mt-2">
              Our team is composed of dedicated professionals with a shared love
              for literature and a commitment to excellence. From editors and
              marketers to customer support, each member of our team plays a
              vital role in making Artistry Reads a success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
