const API_URL = "http://localhost:8080/api/task"

export let task = []

export const fetchTask = async () => {
    const response = await fetch(API_URL)
    task = await response.json()
    return task
}

export const addTask = async (text) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text, completed: false })
    })

    const newTask = await response.json()
    task.push(newTask)
    return task
}
