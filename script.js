

function Book(id, bookName, issuedTo, issueDate, status){
    this.id= id;
    this.bookName = bookName;
    this.issuedTo = issuedTo;
    this.issueDate = issueDate;
    this.status = status;
}


function Display(){

};


Display.prototype.add = function(book){
    console.log("adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `
                      <tr>
                        <td class="id">${book.id}</td>
                        <td>${book.bookName}</td>
                        <td>${book.issuedTo}</td>
                        <td>${book.issueDate}</td>
                        <td class="status ${book.status === 'Not Returned' ? 'red' : 'green'}">${book.status} <i class="fa fa-pencil btn" id="pencil"></i></td>
                    </tr>
    `;
    tableBody.innerHTML += uiString; 
     
    
    
};




Display.prototype.clear = function(){
    let issueForm = document.getElementById('issueForm');
    issueForm.reset();
};




/* let issueForm = document.getElementById("issueForm");
issueForm.addEventListener('submit', issueFormSubmit);

function issueFormSubmit(e){
    e.preventDefault();
    console.log("You have submitted library form");
} */

document.addEventListener("DOMContentLoaded", function() {
    let issueForm = document.getElementById("issueForm");
    issueForm.addEventListener('submit', issueFormSubmit);
    
    let issuedBooks = [];
    let id= 1;
    function issueFormSubmit(e){
        e.preventDefault();
        console.log("You have submitted library form");
        
        let bookName = document.getElementById('bookName').value;
        let issuedTo = document.getElementById('issuedTo').value;
        let issueDate = new Date();
        let status = "Not Returned"; 
        let book = new Book(id, bookName, issuedTo, issueDate, status);

        console.log(book);
        id++;

        let display = new Display();
        display.add(book);
        display.clear();
        
        issuedBooks.push(book);
        console.log(issuedBooks);
        
        
    }
  });

 
  

  

  

 