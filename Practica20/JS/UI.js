const lista = document.getElementById('taskList')


export const render = (tasks) => {
    lista.innerHTML = ''
   
    tasks.forEach(t => {
        const li = document.createElement('li');
        lista.className = `task-item ${t.completed ? 'completed' : ''}`;
        li.dataset.id = t.id;

        li.innerHTML = `
            <span>${t.text}</span>
            <div class="actions">
                <button class="btn-edit">E</button>
                <button class="btn-delete">X</button>
            </div>
        `
        lista.appendChild(li);
    })
}