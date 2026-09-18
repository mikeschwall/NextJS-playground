import axios from "axios"

interface Todo {
    id:number;
    title:string;
    completed: boolean;
}

export default async function Todos() {

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");

    return (
        <div style={{marginTop:"20px", marginBottom:"20px"}}>
            <h2>Todos</h2>
            {data?.map((item:Todo) => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}