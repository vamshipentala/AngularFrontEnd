import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  //private apiUrl = 'http://localhost:20084/api/values'; // Replace with your API URL
  private apiUrl = 'http://localhost:3000/api/data'; // Replace with your API URL
  message: string = ''; // Property to store the message
  messageClass: string = ''; // Property to store the CSS class
  constructor(private http: HttpClient) { }

  getRestApi() {
    console.log('getRestApi called'); 
    this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' }).subscribe(
  response => {
    console.log('API Response:', response); // Log the response which should be plain text

    if (response === 'test') {
      this.message = 'It worked.!';
      this.messageClass = 'success';
    } else {
      this.message = 'Not working';
      this.messageClass = 'error';
    }
  },
  error => {
    console.error('Error occurred:', error);
    this.message = 'Not working';
    this.messageClass = 'error';
  }
);
  }
}
