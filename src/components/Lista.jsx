// import React, { useState } from "react";

// function Lista() {
//     let [tarefa, setTarefas] = useState(0);
//     let [novaTarefa, setNovaTarefas] = useState('');
    
//     const adicionarTarefa = () => {
//         if (novaTarefa.trim() !== '') {
//             setTarefas([...setTarefas, novaTarefa]);
//             setNovaTarefas('');
//         }
//     };

//     return(
//         <>
//             <input type="text" value={novaTrefa} onChange={(e) => setNovaTarefas(e.target.value)} placeholder="Digite uma nova tarefa" />
//             <button onClick={adicionarTarefa}>
//                 AdicionarTarefa
//             </button>
//             <ul>
//                 {tarefa.map((tarefa,index) => (<li key={index>{tarefa}}></li>))}
//             </ul>
//         </> //mesma coisa que uma div
        
//     );
// }

// export default Lista;