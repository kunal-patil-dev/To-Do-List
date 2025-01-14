// just select whatever we are getting input
const taskInput= document.querySelector(".todo-input");
// where we will give input
const taskList = document.querySelector(".todo-list");
const addBtn= document.querySelector(".add-btn");

addBtn.addEventListener("click", addTask);
// creating function to add task
function addTask(){
    // 1.we will create new element as user is inputing task
    const listItem = document.createElement("li");
    // adding class(style) to listItem
    listItem.className="todo-item";
    // 2.now we will add content in it (li element)
    listItem.textContent=taskInput.value;
    // 3. now append it in tasklist: - we have appended listItem in taskList
    taskList.appendChild(listItem);
    // 4. after appending we have to set taskInput empty
    taskInput.value="";


}

// creating funtion to delete task, for that we will add one more event lister on taskList
taskList.addEventListener("click", deleteTask);
function deleteTask(event){// even is a parameter
    // when we click on task which want to be deleted, we will log that value with the help of event
    // console.log(event.target.value);
    // console.log(event.target);
    
    // whenever user click on task to delete, then delted task will be stoed in var itemToDelete for reference only
    //eg. sir ne jiski taraf finger kiya vo out like that
    const itemToDelete = event.target;
    itemToDelete.remove();
}