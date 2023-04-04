
       // const savedTodos = JSON.parse(localStorage.getItem('todos'));
      // Check if it's an array
    //   if (Array.isArray(savedTodos)) {
    //     todos = savedTodos;
    //   } else {
        const todoList = [{
            name: "Wash Car",
            dueDate: "2023-4-28"
        }, {
            name: "Get Groceries",
            dueDate: "2023-4-30"
        }, {
            name: "Learn Javascript",
            dueDate: "2023-5-20"
        }];
      renderTodoList();
    //     saveTodos()
    //     function saveTodos() {
    //     localStorage.setItem('todos', JSON.stringify(todoList));
    //   }
        function renderTodoList() {
            let todoListHTML = "";
            for (let i = 0; i < todoList.length; i++) {
                const todoObject = todoList[i]
                // const name = todoObject.name;
                // const dueDate = todoObject.dueDate;
                const {name, dueDate} = todoObject;
                const html = `<p>
                    ${name} ${dueDate}
                    <button
                    onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList()";
                    " class="delete-todo-button">Delete</button></p>`;
                todoListHTML += html;
                console.log(todoListHTML)
            }
            document.querySelector("#todo-list")
            .innerHTML = todoListHTML;
        }
        
        function addTodo(){
            
            const inputElement = document.querySelector("#text-box");
            const name = inputElement.value;
            
            const dateInputElement = document.querySelector("#due-date");
            const dueDate = dateInputElement.value;
            todoList.push({
                name,
                dueDate
            });
           
            inputElement.value = "";
            //localStorage.setItem('todos', JSON.stringify(todos)); I need to store in local storage
            renderTodoList();
            // saveTodos()
            
           
            
        }