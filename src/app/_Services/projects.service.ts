import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: project[] = [
    {id: 0, name: "Weather Tracker", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], projectLink: "https://github.com/RaghuRamaRaju7/weatherTracker-solo-project-", summary: "Weather tracker app developed using HTML, CSS, and JavaScript.", description: "This project allows users to track the current weather in various locations. The app fetches data from an external API and displays it in a user-friendly interface.", tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]},
    {id: 1, name: "Portfolio", pictures: ["../../assets/portfolio3.png","../../assets/portfolio2.png","../../assets/portfolio1.png"], projectLink: "//www.github.com", summary: "Portfolio website developed using Angular.", description: "This portfolio showcases a collection of projects and skills, built using Angular to demonstrate a dynamic and responsive design. It highlights various achievements, including web development and API integration.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 2, name: "Coffee Website", pictures: ["../../assets/c1.png","../../assets/c2.png","../../assets/c3.png"], projectLink: "https://github.com/RaghuRamaRaju7/Coffewebsite", summary: "Login page developed using HTML and CSS.", description: "A simple login page that allows users to sign in to a web application. The page is built with HTML and CSS, featuring a clean and responsive design.", tags: [Tag.HTML, Tag.CSS]},
    {id: 3, name: "REST API for Employee Managementt", pictures: ["../../assets/restapi1.png","../../assets/restapi2.png","../../assets/restapi3.png"], projectLink: "//www.github.com/RaghuRamaRaju7/REST-API-Project-using-Spring-Bo", summary: "REST API for Employee Management Using Java", description: "I have successfully built a REST API for Employee Management using Spring Boot and Spring Tool Suite 4. This project includes CRUD operations to add, read, update, and delete employees, along with the ability to fetch employee details by email and ID. It integrates Spring Data JPA with MySQL for efficient data management and uses Jakarta validation for enforcing constraints on email and password fields. The API has been thoroughly tested using Postman. The tech stack includes Spring Boot, Spring Data JPA, Spring REST, MySQL, and Postman for API testing.", tags: [Tag.JAVA]},
    {id: 4, name: "JSP & Servlets Web Application Development", pictures: ["../../assets/jsp1.png","../../assets/jsp2.png","../../assets/jsp3.png"], projectLink: "//www.github.com/RaghuRamaRaju7/JSP-Servlets-Web-Application-Development ", summary: "JSP & Servlets Web Application Development Using Java", description: "I have developed a web application using JSP, Servlets, and MySQL, enhancing my backend development skills and understanding of database integration. The project includes user authentication with login and registration functionality, CRUD operations for inserting, updating, deleting, and fetching data, and a Bootstrap-based UI for a clean and interactive design. Secure MySQL integration with optimized queries ensures efficient database management. The tech stack includes Java (JSP, Servlets), MySQL, HTML, CSS, Bootstrap, and Apache Tomcat.", tags: [Tag.JAVA]},
    {id: 5, name: "To Do List", pictures: ["../../assets/todo1.png","../../assets/todo2.png","../../assets/todo3.png"], projectLink: "//www.github.com/RaghuRamaRaju7/ToDoList", summary: "ToDo List Using React", description: "I created a To-Do List App using React, where users can add, edit, and delete tasks with a clean UI. This project helped me improve my React and CSS skills.", tags: [Tag.JAVASCRIPT]}
  ];
  
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) :  project{
    let project=this.projects.find(project => project.id === id)
  
  if (project === undefined){
    throw new TypeError('there is no project that matches the id'+ id);

  }
  return project;
 }

 GetProjectsByFilter(filterTags:Tag[]){
   let filteredProjects:project[]=[];

   this.projects.forEach(function (project){
    let foundAll = true;
    filterTags.forEach(function (filterTag){
      if(project.tags.includes(filterTag)==false){
            foundAll =false;

      }

    });
    if(foundAll){
      filteredProjects.push(project);
    }

   });
   return filteredProjects;
 }
}


