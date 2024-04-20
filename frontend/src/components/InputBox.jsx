export function InputBox({title , inner , onChange}){

    return(<div className="text-left">
        <div className="py-2 text-sm">{title}

        </div>

       <input onChange={onChange}  className=" border-slate-300 border rounded p-1 text-sm w-full" placeholder={inner}></input>

    </div>)
} 