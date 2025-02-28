import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_Services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit{

  projects = {} as project[];

  isCollapsed:boolean=true;
  Java:boolean=false;
  Html:boolean=false;
  Angular:boolean=false;
  Css:boolean=false;
  Javascript:boolean=false;
  Typescript:boolean=false;
  Python:boolean=false;
  React:boolean=false;
  filtering:boolean=false;

  constructor(private titleService: Title, private projectService: ProjectsService){
      this.titleService.setTitle('Raghu - Portfolio');
    }
  ngOnInit(): void {
    this.projects=this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[]=[];

    if(this.Java){
      filterTags.push(Tag.JAVA);
    }
    if(this.Html){
      filterTags.push(Tag.HTML);
    }
    if(this.Angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.Css){
      filterTags.push(Tag.CSS);
    }
    if(this.Javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.Typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.Python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.React){
      filterTags.push(Tag.REACT);
    }
    if(this.Java || this.Html ||this.Css || this.Python ||this.Javascript || this.Typescript || this.Angular ||this.React){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }

    this.projects=this.projectService.GetProjectsByFilter(filterTags);
  }
  ResetFilters(){
    this.Java=false;
    this.Python=false;
    this.Html=false;
    this.Css=false;
    this.Javascript=false;
    this.Typescript=false;
    this.Angular=false;
    this.React=false;
    this.filtering=false;

    this.projects=this.projectService.GetProjects();


  }
}
