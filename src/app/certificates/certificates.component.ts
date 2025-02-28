import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  badges = [
    { image: 'assets/postmanbadge.png' },
    { image: 'assets/cybersecurity.png' },
    { image: 'assets/python.png' },
    { image: 'assets/networking-basics.png' },
    { image: 'assets/it-specialist-java.png' }
  ];
  skills = [
    { name: 'Java', icon: 'assets/java copy.png' },
    { name: 'Hybernate', icon: 'assets/hibernate.png' },
    { name: 'Angular', icon: 'assets/angular.png' },
    { name: 'React', icon: 'assets/react.png' },
    { name: 'JavaScript', icon: 'assets/js.png' },
    { name: 'Git', icon: 'assets/git copy.png' },
    { name: 'Postman', icon: 'assets/post.png' },
    { name: 'MySQL', icon: 'assets/mysql.png' }
  ];
  
}
