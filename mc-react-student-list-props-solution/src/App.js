import React from "react";
import "./App.css";

function App() {
  const names = [
    "Danyel Maudlin",
    "Ranee Hard",
    "Tyree Kammerer",
    "Cole Tamayo",
    "Kimberly Cogswell",
    "Arline Gildersleeve",
    "Alexandra Bottom",
    "Daphine Domenick",
    "Tracee Tutt",
    "Stephania Umland",
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <form className="add-student-form">
          <label>Student Name:</label>
          {' '}
          <input type="text" />
          <button>Add Student</button>
        </form>
        <StudentList students={names} />
      </main>
      <Footer />
    </div>
  );
}

function StudentList(props) {
  const list = props.students.map((student) => {
    return <li>{student}</li>;
  });

  return <ul className="student-list">{list}</ul>
}


function Hero() {
  return (
    <section className="hero">
      <h1>Students</h1>
    </section>
  );
}

function Header() {
  return (
    <header>
      <h2>Student App</h2>
      <nav>
        <a href="./">Home</a>
        {" | "}
        <a href="./">About</a>
        {" | "}
        <a href="./">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <a href="./">Site Map</a>
      </div>
      <div>Copyright 20xx</div>
    </footer>
  );
}

export default App;
