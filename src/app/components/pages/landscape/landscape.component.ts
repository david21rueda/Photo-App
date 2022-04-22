import { Component, OnInit } from '@angular/core';
import { Pic } from '@app/shared/interface/pic.interface';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.css']
})
export class LandscapeComponent implements OnInit {
  data: Pic[] = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '3',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1608592077365-c6399182e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '4',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '5',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '6',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1515961896317-adf9e14bdcc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '7',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '8',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1612981453053-184fd648b66b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
      imageAlt: '9',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '10',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1614450770504-8fe221e74881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '11',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1612541414481-7ba931f4681e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      imageAlt: '12',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1618232397405-90bb514c6658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      imageAlt: '13',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
