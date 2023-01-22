import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/Singlepost.js';
import './single.css';

export default function Single() {
  return (
    <div className='single'>
      <SinglePost />
      <Sidebar />
    </div>
  );
}
