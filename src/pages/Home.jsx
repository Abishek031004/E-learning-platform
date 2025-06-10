import CourseList from '../components/CourseList';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to E-Learning!</h2>
      <p>Browse our courses and start learning today.</p>
      <Link to="/courses" className="button">View All Courses</Link>
      <h3 style={{ marginTop: '2rem' }}>Featured Courses</h3>
      <CourseList />
    </div>
  );
}

export default Home;
