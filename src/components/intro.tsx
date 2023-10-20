import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setImage, setDescription, selectImg, selectDescription } from '../features/intro/introSlice';

export default function Intro() {
  const img = useSelector(selectImg);
  const desc = useSelector(selectDescription);
  const dispatch = useDispatch();
  const [isEditIntro, setEditIntro] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [descInput, setDescInput] = useState('');
  const [imgInput, setImgInput] = useState('');

  useEffect(() => {
    if(submitBtn){
      dispatch(setImage(imgInput));
      dispatch(setDescription(descInput));
      setDescInput("");
      setImgInput("");
      setSubmitBtn(false);
      setEditIntro(false);
    }
  }, [imgInput, descInput, isEditIntro, submitBtn, dispatch]);


  return(
    <div className="container py-4 mx-auto">
      <div className='max-w-md text-3xl font-bold'>
           My Blog
      </div>
      {!isEditIntro ? 
        <div>
          <div dir="rtl" className="ms-8">
            <button 
              className='text-white font-bold py-1 px-2 rounded bg-gray-400 hover:bg-gray-300' 
              onClick={() => setEditIntro(true)} 
              type="button">
              Edit
            </button>
          </div>
          <div className="container mx-auto columns-2">
              {/* <p>{img}</p> */}
              <img className="mx-auto h-96" src={img} alt="profileImg" />
              <div className="max-w-md text-3xl font-bold">
                {desc}
              </div>
            </div>
        </div>
      : 
      <form className="mx-auto">
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
      </div>
      </form>
      }
      
    </div>
    
  )
}