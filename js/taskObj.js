var taskObj = {
    
    $this: this,
    
    list: ["task_1", "task_2", "task_3"],
    
    rollCall: function(){
        var items = '';
        for(var i=0; i < this.list.length; i++){
            items += "<li class='inProgress'>" + this.list[i] + "</li>";
        };
        document.getElementById('list').innerHTML = items;
    },
    
    addTask: function(){
        var itemToAdd = document.getElementById('addTask');
        
        if (itemToAdd.value.length === 0){
            return itemToAdd = null;
        }
        else {
            var itemToAdd = document.getElementById('addTask');
            taskObj.list.push(itemToAdd.value);
            itemToAdd.value = "";
            taskObj.rollCall();
        }
    },
    
    delTask: function(){
        var toDelete = document.getElementsByClassName('done');
        for(var i = 0; i < toDelete.length; i++){
            var x = toDelete[i].textContent;
            var getIndex = function(index){
                return taskObj.list.indexOf(index);
            };
            var index = getIndex(x);
            taskObj.list.splice(index, 1)
        }
        taskObj.rollCall();
    }
}