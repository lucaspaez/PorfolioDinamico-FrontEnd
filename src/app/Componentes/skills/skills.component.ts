import { Component, OnInit } from '@angular/core';

declare let TagCloud: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const TagCloud = require('TagCloud');
    const container = '.tagcloud';

    const text = [
      'JavaScript', 'CSS', 'HTML',
      'C', 'C++', 'Angular',
      'Python', 'TypeScript', 'Git',
      'Java', 'Nodejs', 'Cisco',
      'Mikrotik', 'MySQL', 'Linux',
      'DevOps', 'Networking', '3DPrinter',
      'Bootstrap', 'Wordpress', 'Fusion360',
    ];
    
    const Tag_Cloud = TagCloud(container, text,{
                                                  // radius in px
                                                  radius: 170,
                                                
                                                  // animation speed
                                                  // slow, normal, fast
                                                  maxSpeed: 'fast',
                                                  initSpeed: 'normal',
                                                
                                                  // 0 = top
                                                  // 90 = left
                                                  // 135 = right-bottom
                                                  direction: 135,
                                                
                                                  // interact with cursor move on mouse out
                                                  keep: true
    });

  }

  
}