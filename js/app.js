showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
      let addTxt = document.getElementById('addTxt');
      let addTitle = document.getElementById('addTitle');
      let notes = localStorage.getItem('notes');
      let notesObj;
      if(notes == null){
           notesObj = [];
      }
      else{
          notesObj = JSON.parse(notes);      
    }

// console.log(notesObj);
// console.log('================notesobj=========================');

let myobj ={
      title:addTitle.value,
      text:addTxt.value
}
// console.log(myobj);
// console.log('===================myobj======================');

    notesObj.push(myobj);
    addTxt.value="";
    addTitle.value="";
    // localStorage.clear();
    localStorage.setItem('notes',JSON.stringify(notesObj));
    // console.log(localStorage);
    // console.log('================local storage=========================');
    showNotes();
    
});

function showNotes(){
    let notes=localStorage.getItem('notes');
    let notesObj;
     if(notes == null)
     notesObj=[];
     else
      notesObj = JSON.parse(notes);
      
    let html="";
    notesObj.forEach(function(element , index) {
            html+=`            
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${index,element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
            </div>
            `
        });
        // console.log(html);
        // console.log('=========================================');
        // console.log(notes);
        // console.log('==================Local storage Show notes=======================');
        let yourNotes = document.getElementById('yourNotes');
        // console.log(yourNotes);
        // console.log('==================Previous HTML notes=======================');
        if(notesObj.length != 0 ){
         yourNotes.innerHTML = html;
        }
        else
          yourNotes.innerHTML = `<p> Nothing to show</p>`;

};
function deleteNote(index){
    let notes=localStorage.getItem('notes');
    let notesObj;
     if(notes == null)
     notesObj=[];
     else
      notesObj = JSON.parse(notes);
      
      notesObj.splice(index,1);
      localStorage.setItem('notes',JSON.stringify(notesObj));

      showNotes();

          
};

let searchTxt = document.getElementById('searchTxt');

searchTxt.addEventListener('input',function(){
       let inputStr = searchTxt.value;
       let noteCard = document.getElementsByClassName('noteCard');
       Array.from(noteCard).forEach(function(element){
               let str = element.getElementsByTagName('p')[0].innerText;
               if(str.includes(inputStr)){
                     element.style.display ="block";
               }
               else{
                  element.style.display = "none";
               }
       });
})

