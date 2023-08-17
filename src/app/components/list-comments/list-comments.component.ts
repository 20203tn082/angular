import { Component } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {
  listComments : Comment[] = [
    {
      title : 'Test1',
      author : 'Nathaly Escalona',
      description : '..........',
      createdAt : new Date()
    },
    {
      title : 'Test2',
      author : 'Nathaly Escalona',
      description : '..........',
      createdAt : new Date()
    },
    {
      title : 'Test3',
      author : 'Nathaly Escalona',
      description : '..........',
      createdAt : new Date()
    },
    {
      title : 'Test4',
      author : 'Nathaly Escalona',
      description : '..........',
      createdAt : new Date()
    },
    {
      title : 'Test5',
      author : 'Nathaly Escalona',
      description : '..........',
      createdAt : new Date()
    },

  ]
}
