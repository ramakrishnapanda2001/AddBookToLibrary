//to hold book form data
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

//for all ui related operations
class UI{
    addBook(book){
        //console.log(book+ " in ui addBook()");
        let bookTableBody=document.querySelector("#book-table-body");
        let row=document.createElement("tr");
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='anchorred'>X</a></td>
        `;
        bookTableBody.appendChild(row); 
        this.showMsg("book added");     
        
    }
    deleteBook(e){
        if(e.className=='anchorred'){
            e.parentElement.parentElement.remove();
            this.showMsg("book deleted");
        }
    }
    showMsg(msg){
        let msgLabel=document.querySelector("#msg-label");
        let msgdiv=document.createElement("div");
        msgdiv.innerText=msg;
        msgLabel.appendChild(msgdiv);
        setTimeout(()=>{
            msgdiv.remove();
        }, 3000);

    }
}

document.querySelector("#book-form").addEventListener("submit",function(e){
    let title=document.querySelector("#title").value,
        author=document.querySelector("#author").value,
        isbn=document.querySelector("#isbn").value;
    let book=new Book(title,author,isbn);
    let ui=new UI();
    if(title==="" || author==="" || isbn==="")
    {
        alert("you have to provide all the values");
    }
    else{
        ui.addBook(book);
        document.querySelector("#title").value="";
        document.querySelector("#author").value="";
        document.querySelector("#isbn").value="";
        
    }
    e.preventDefault();
})

document.querySelector("#book-table-body").addEventListener("click",function(e){
    new UI().deleteBook(e.target);
   
    e.preventDefault();
});