import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h1>E-Learning</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
