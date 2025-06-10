import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

const initialCourses = [
  { id: 1, title: "React Basics", description: "Learn the basics of React.", progress: 0 },
  { id: 2, title: "JavaScript ES6", description: "Master ES6 features.", progress: 0 },
  { id: 3, title: "HTML & CSS", description: "Build stunning web pages.", progress: 0 },
  { id: 4, title: "Node.js Fundamentals", description: "Backend development with Node.js.", progress: 0 },
  { id: 5, title: "MongoDB Essentials", description: "Learn how to use MongoDB.", progress: 0 },
  { id: 6, title: "Git & GitHub", description: "Version control basics and collaboration.", progress: 0 },
  { id: 7, title: "TypeScript Introduction", description: "Strongly typed JavaScript with TypeScript.", progress: 0 },
  { id: 8, title: "Tailwind CSS", description: "Rapidly build modern websites.", progress: 0 }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [courses, setCourses] = useState(() => {
    const stored = localStorage.getItem('courses');
    return stored ? JSON.parse(stored) : initialCourses;
  });

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const updateProgress = (id, amount = 10) => {
    setCourses(prev => prev.map(course => course.id === id
      ? { ...course, progress: Math.min(course.progress + amount, 100) }
      : course
    ));
  };

  return (
    <Router>
      <div className={darkMode ? "font-sans dark-theme" : "font-sans light-theme"}>
        <nav className="navbar">
          <h1 className="navbar-title">E-Learning</h1>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/dashboard">Dashboard</Link>
            <button className="button" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home courses={courses} />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route path="/course/:id" element={<CourseDetail courses={courses} updateProgress={updateProgress} />} />
          <Route path="/dashboard" element={<Dashboard courses={courses} updateProgress={updateProgress} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ courses }) {
  return (
    <div className="container">
      <h2 className="heading">Welcome to E-Learning!</h2>
      <p className="text">Browse our courses and start learning today.</p>
      <Link to="/courses" className="button">View Courses</Link>
      <h3 className="subheading">Featured Courses</h3>
      <CourseList courses={courses} />
    </div>
  );
}

function Courses({ courses }) {
  const [search, setSearch] = useState('');
  const filtered = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <h2 className="heading">Courses</h2>
      <input
        type="text"
        placeholder="Search courses..."
        className="search-box"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <CourseList courses={filtered} />
    </div>
  );
}

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <h4 className="course-title">{course.title}</h4>
          <p className="course-description">{course.description}</p>
          <Link to={`/course/${course.id}`} className="button">Start</Link>
        </div>
      ))}
    </div>
  );
}

function CourseDetail({ courses, updateProgress }) {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  return (
    <div className="container">
      <h2 className="heading">{course.title}</h2>
      <div className="video-container">
        <iframe className="video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Course Video" allowFullScreen></iframe>
      </div>
      <p className="text">{course.description}</p>
      <div>
        <h4 className="text">Progress</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
        </div>
        <p className="text">{course.progress}%</p>
        <button className="button" onClick={() => updateProgress(course.id)}>Mark +10%</button>
      </div>
    </div>
  );
}

function Dashboard({ courses, updateProgress }) {
  const completed = courses.filter(c => c.progress === 100).length;

  return (
    <div className="container">
      <h2 className="heading">Dashboard</h2>
      <p className="text">Courses Completed: {completed} / {courses.length}</p>
      <h3 className="subheading">Your Courses</h3>
      <div className="dashboard-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h4 className="course-title">{course.title}</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p className="text">{course.progress}% completed</p>
            <button className="button" onClick={() => updateProgress(course.id)}>+10%</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
