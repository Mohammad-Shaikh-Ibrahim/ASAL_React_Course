import{useRef} from 'react'
import Input from "./Input"
import Modal from './Modal.jsx';
export default function NewProject({onAdd,onCanel}){
    const modal= useRef();
    const title= useRef();
    const description= useRef();
    const dueDate= useRef();

    function handelSave(){
        const enteredTitle= title.current.value;
        const entereDescription= description.current.value;
        const enteredDueDate= dueDate.current.value;

        if(enteredTitle.trim() === ''|| 
            entereDescription.trim() === '' ||
            enteredDueDate.trim() === '')
            {
                modal.current.open();
                return;
        }
        onAdd({
            title:enteredTitle,
            description:entereDescription,
            dueDate:enteredDueDate
        })
    }

   

    return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops... Looks Like You Forget to Enter a Value. </p>
        <p className='text-stone-600 mb-4'>Please Make Sure You Provide a Valid Value For Every Input Field. </p>
    </Modal>
    <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950 "
                onClick={onCanel}
                >
                    Cancel
                </button>
            </li>
            <li>
                <button 
                className="bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md text-stone-50 "
                onClick={handelSave}
                >
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Titel"  />
            <Input ref={description} label="Description" textarea/>
            <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
    </div>
    </>
    );
}