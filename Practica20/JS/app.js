import * as state from "./state.js";
import * as ui from "./UI.js"

document.addEventListener('DOMContentLoaded', async () => {
    const input = document.querySelector('input')
    const addBtn = document.querySelector('.btn-add')

    const tasks = await state.fetchTask();
    ui.render(tasks)

    addBtn.addEventListener('click', async ()=>{
        if (input.value.trim()=== '') return;
        
        await state.addTask(input.value)

        input.value = '';

        ui.render(state.task)
    })

    input.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') addBtn.click();
    })

})



