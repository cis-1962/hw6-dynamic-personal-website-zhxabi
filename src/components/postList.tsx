import { useSelector } from 'react-redux';
import { selectPostList } from '../features/posts/postsSlice';
import Post from './post';

export default function PostList() {
  const postsList = useSelector(selectPostList);

  return(
    <div className="flex py-4 mx-auto">
      {postsList.map((p) => (
            !Number.isNaN(p.id) ? 
              <Post
              post={p} key={p.id}            
              /> 
              : <div/>
        ))
      }
    </div>
    
  )
}