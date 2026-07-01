package com.library.repository;

public class BookRepository{

public String getBookById(int id){
    return "Book-" + id;
}

public void saveBook(String bookName){
System.out.println("Book saved: "+bookName);
}
}
