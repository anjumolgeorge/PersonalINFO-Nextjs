"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal,setinputVal] = useState("")
  const {push} = useRouter()

  const handleSubmit = (e: FormEvent)=> {
      e.preventDefault();
      push(`/prediction/${inputVal}`)
  }
 

  return (
    <div>
    <div>
        <h1>Enter Your Name</h1>
    </div>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="name..." 
        value={inputVal}
        onChange={(e) => setinputVal(e.target.value)}/>
        <button type="submit">click</button>
    </form>
</div>

  );
}
