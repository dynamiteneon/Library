const AddBk = document.getElementById("addbook");
const AddCncl = document.getElementById("canceladdbook");
const AddFrm = document.getElementById("addform");
const NewBk = document.getElementById("newbookadd");

const Wrapper = document.querySelector(".libwrapper");


let myLibrary = [];

function Book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages= pages;
    this.read= read;

}


AddBk.addEventListener("click", displayAddBook);
AddCncl.addEventListener("click", hideAddBook);
NewBk.addEventListener("click",addBookToLibrary);

function displayAddBook(){
 AddFrm.style.display="grid";  
}

function hideAddBook(){
 AddFrm.style.display="none";
}

function addBookToLibrary(){
    let bookTitle = document.getElementById("booktitle").value;
    let bookAuthor = document.getElementById("bookauthor").value;
    let bookPages = document.getElementById("bookpages").value;
    let bookRead = true;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

    myLibrary.push(newBook);

    generateList();

    hideAddBook();

}

function generateList(){
    let Books = myLibrary.length;

    for (let i =0;i<Books;i++){

        let BookID = "book" + i;
        let ReadID = "read" + i
        let BookExists = document.getElementById(BookID);
        
        if(BookExists==null){

        let BookItem = document.createElement('div');

        let Title = document.createElement('div');
        let TitleLabel = document.createElement('div');

        TitleLabel.textContent = "Title:";
        Title.textContent = myLibrary[i].title

        let Author = document.createElement('div');
        let AuthorLabel = document.createElement('div');

        AuthorLabel.textContent = "Author:"
        Author.textContent = myLibrary[i].author;

        let Pages = document.createElement('div');
        let PagesLabel = document.createElement('div');

        PagesLabel.textContent = "Pages:"
        Pages.textContent = myLibrary[i].pages;

        let Read = document.createElement('div');
        let ReadLabel = document.createElement('div');

        Read.id = ReadID;

        let ReadButton = document.createElement('button');
        ReadButton.textContent = "Read/Unread"
        ReadButton.addEventListener("click",()=> {

            if(readToggle.textContent=="Yes"){
                readToggle.textContent="No";
            }

            else if(readToggle.textContent=="No"){
                readToggle.textContent = "Yes";
            }
        })

        ReadLabel.textContent = "Read:"
        
        if(myLibrary[i].read==true){
            Read.textContent="Yes";
        }

        else if(myLibrary[i].read==false){
            Read.textContent="No";
        }

        console.log(BookID);

        BookItem.id = BookID;
        BookItem.classList.add('bookitem');

        BookItem.appendChild(TitleLabel);
        BookItem.appendChild(Title);
        BookItem.appendChild(AuthorLabel);
        BookItem.appendChild(Author);
        BookItem.appendChild(PagesLabel);
        BookItem.appendChild(Pages);
        BookItem.appendChild(ReadLabel);
        BookItem.appendChild(Read);
        BookItem.appendChild(ReadButton);

        Wrapper.appendChild(BookItem);

        let readToggle = document.getElementById(ReadID);
    
    }



    }
}



