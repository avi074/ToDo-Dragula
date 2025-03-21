// ✅ Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || []

// ✅ Select elements
const pendingTasks = document.getElementById("pendingTasks")
const doneTasks = document.getElementById("doneTasks")
const taskInput = document.getElementById("taskInput")
const taskForm = document.getElementById("taskForm")

// ✅ Render tasks
function renderTasks() {
  pendingTasks.innerHTML = ""
  doneTasks.innerHTML = ""

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div")
    taskDiv.dataset.id = task.id
    taskDiv.className =
      "p-2 bg-white border rounded flex items-center justify-between cursor-move"

    // Drag Handle
    const dragIcon = document.createElement("i")
    dragIcon.setAttribute("data-lucide", "grip-vertical")
    dragIcon.className = "cursor-grab mr-2 text-gray-500"

    // Task Name
    const taskText = document.createElement("span")
    taskText.textContent = task.name
    taskText.className = `flex-grow ${task.status === 'done' ? 'line-through' : 'font-medium'}`

    // Delete Button
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "text-red-500 hover:text-red-700"
    deleteBtn.innerHTML = '<i data-lucide="trash-2"></i>'
    deleteBtn.onclick = () => deleteTask(task.id)

    taskDiv.appendChild(dragIcon)
    taskDiv.appendChild(taskText)
    taskDiv.appendChild(deleteBtn)

    if (task.status === "pending") {
      pendingTasks.appendChild(taskDiv)
    } else {
      doneTasks.appendChild(taskDiv)
    }
  })

  localStorage.setItem("tasks", JSON.stringify(tasks))
  lucide.createIcons() // Refresh Lucide Icons
}

// ✅ Add new tasks
taskForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!taskInput.value.trim()) return

  tasks.push({
    id: Date.now().toString(),
    name: taskInput.value.trim(),
    status: "pending",
  })

  taskInput.value = ""
  renderTasks()
})

// ✅ Delete task
function deleteTask(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId)
  if (index !== -1) {
    tasks.splice(index, 1)
    renderTasks()
  }
}

// ✅ Drag & Drop with Dragula
const drake = dragula([pendingTasks, doneTasks])

drake.on("drag", (el) => {
  el.classList.add("dragging")
})

drake.on("drop", (el, target) => {
  el.classList.remove("dragging")

  const taskId = el.dataset.id
  const newStatus = target.id === "doneTasks" ? "done" : "pending"

  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.status = newStatus
    }
  })

  localStorage.setItem("tasks", JSON.stringify(tasks))
  renderTasks()
})

drake.on("over", (el, container) => {
  container.classList.add("bg-blue-100")
})

drake.on("out", (el, container) => {
  container.classList.remove("bg-blue-100")
})

// ✅ Initialize UI
renderTasks()
