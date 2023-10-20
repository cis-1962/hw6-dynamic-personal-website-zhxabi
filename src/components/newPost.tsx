import { useState, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import Modal from 'react-modal';
import {addPost, PostObj } from '../features/posts/postsSlice';

export default function NewPost({idCount} : {idCount: number}) {
  const [isSubmitBtn, setSubmitBtn] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [descInput, setDescInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const dispatch = useDispatch();
  // const idCount = useSelector(selectIdCount);
  

  useEffect(() => {
    if(isSubmitBtn){
      const p : PostObj = {
        id: idCount,
        title: titleInput,
        image: imgInput,
        description: descInput
      }
      

      dispatch(addPost(p));
      setDescInput("");
      setImgInput("");
      setTitleInput("");
      setSubmitBtn(false);
      setEditMode(false);
    }
    
  }, [imgInput, descInput, titleInput, isSubmitBtn, isEditMode, dispatch, idCount]);


  return(
    <div>
    { isEditMode ?
    <Modal 
    isOpen={isEditMode} 
    className="modal"
    ariaHideApp={false}
    >
      <div className="mx-auto rounded shadow-lg px-4 py-4">
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
            <textarea
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
            <button 
              type="button" 
              onClick={() => setEditMode(false)} 
              className='text-white font-bold py-1 px-2 rounded bg-gray-400 hover:bg-gray-300'
            >
              Cancel
            </button>
            </div>
        </form>
      </div>
    </Modal>
    :
    <div dir="rtl" className="ms-8">
      <button 
        className='text-white font-bold py-1 px-2 rounded bg-gray-400 hover:bg-gray-300' 
        onClick={() => setEditMode(true)} 
        type="button">
        New Post
      </button>
    </div>
    }
    </div>
    
  )
}