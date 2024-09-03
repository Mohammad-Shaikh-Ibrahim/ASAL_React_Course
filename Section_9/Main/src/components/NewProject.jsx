import{useRef} from 'react'
import Input from "./Input"
export default function NewProject({onAdd}){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    function handelSave(){
        const enteredTitle= title.target.value;
        const entereDescription= description.target.value;
        const enteredDueDate= dueDate.target.value;

        //validtion...
        onAdd({
            title:enteredTitle,
            description:entereDescription,
            dueDate:enteredDueDate
        })
    }

   

    return <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950 ">Cancel</button>
            </li>
            <li>
                <button 
                onClick={handelSave}
                className="bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md text-stone-50 ">
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
}