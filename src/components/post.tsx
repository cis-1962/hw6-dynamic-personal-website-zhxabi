import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost, deletePost, PostObj } from '../features/posts/postsSlice';


export default function Post({post} : {post: PostObj}) {
  const [isEditPost, setEditPost] = useState(false);
  const {id, title, description, image} = post;

  const [isDelPost, setDelPost] = useState(false);
  const [isSubmitBtn, setSubmitBtn] = useState(false);
  const [descInput, setDescInput] = useState(description);
  const [imgInput, setImgInput] = useState(image);
  const [titleInput, setTitleInput] = useState(title);
  const dispatch = useDispatch();


  useEffect(() => {
    if(isSubmitBtn){
      // post.description = descInput;
      // post.image = imgInput;
      // post.title = titleInput;
      const p : PostObj = {
        id,
        title: titleInput,
        image: imgInput,
        description: descInput
      }

      dispatch(updatePost(p));
      setDescInput("");
      setImgInput("");
      setTitleInput("");
      setSubmitBtn(false);
      setEditPost(false);
      setDelPost(false)
    }
    if(isDelPost){
      dispatch(deletePost(id));
      setDescInput("");
      setImgInput("");
      setTitleInput("");
      setSubmitBtn(false);
      setEditPost(false);
      setDelPost(false)
    }
  }, [imgInput, descInput, titleInput, isEditPost, isSubmitBtn, isDelPost, dispatch, id]);


  return(
    <div className="max-w-sm flex-auto rounded shadow-lg px-4 py-4">
      {!isEditPost ? 
        <div>
          <div className="container mx-auto">
              <div className="max-w-md font-bold text-3xl">
                {title}
              </div>
              <img className="mx-auto h-96" src={image} alt="profileImg" />
              <div className="max-w-md">
                {description}
              </div>
            </div>
            <div dir="rtl" className="ms-8">
            <button 
              className='text-white font-bold py-1 px-2 rounded bg-red-400 hover:bg-red-300' 
              onClick={() => setDelPost(true)} 
              type="button">
              Delete
            </button>
            <button 
              className='text-white font-bold py-1 px-2 rounded bg-gray-400 hover:bg-gray-300' 
              onClick={() => setEditPost(true)} 
              type="button">
              Edit
            </button>
          </div>
        </div>
      : 
      <form className="mx-auto">
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Title"
          className='w-full py-1 my-1'
        />
        <input
          type="text"
          value={imgInput}
          onChange={(e) => setImgInput(e.target.value)}
          placeholder="Image Link"
          className='w-full py-1 my-1'
        />
        <input
          value={descInput}
          onChange={(e) => setDescInput(e.target.value)}
          placeholder="Description"
          className='w-full py-1 my-2'
        />
        <div className="d-flex flex-row">
        <button 
          type="button" 
          onClick={() => setSubmitBtn(true)} 
          className='text-white font-bold py-1 px-2 rounded bg-gray-400 hover:bg-gray-300'
        >
          Submit
        </button>
        </div>
      </form>
      }
      
    </div>
    
  )
}