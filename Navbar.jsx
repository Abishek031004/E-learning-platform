import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/courses" style={{ color: 'white' }}>Courses</Link>
    </nav>
  );
}
