taskObj.rollCall();

var addButton = document.getElementById('addTaskBtn');
var delButton = document.getElementById('delTaskBtn');

addButton.addEventListener('click', taskObj.addTask);
delButton.addEventListener('click', taskObj.delTask);

var ul_ = document.getElementsByTagName('ul')[0];
 
ul_.addEventListener('click', function(e){
    
    var target = e.target;
    
    if (target.className == "inProgress"){
        target.className = "done";
    } 
    else {
        target.className = "inProgress";
    } 
});