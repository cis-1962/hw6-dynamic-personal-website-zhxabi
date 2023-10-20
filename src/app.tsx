import { useSelector } from 'react-redux';
import Intro from './components/intro';
import PostList from './components/postList';
import NewPost from './components/newPost';
import { selectIdCount } from './features/posts/postsSlice';


export default function App() {
  const idCount = useSelector(selectIdCount);

  return (
  <div className="container py-4 mx-auto rows-3">

    <Intro />
    
    <NewPost idCount={idCount}/>
    
    <PostList />
  </div>
  );

}
