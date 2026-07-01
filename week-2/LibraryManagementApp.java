package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;


public class LibraryManagementApp {

    public static void main(String[] args) {
    ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

       BookService bookService = (BookService) context.getBean("bookService");
    
    System.out.println("Book id with 1 :" + bookService.findBook(1));
    bookService.addBook("Spring framework");
    bookService.addBook("Java programming");
    System.out.println("Book with id 2 :" + bookService.findBook(2));
    System.out.println("Successfully completed");
    }
    
    }