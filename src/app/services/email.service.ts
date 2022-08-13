import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class EmailService {
// action="https://formspree.io/f/xpznzrpp" method="POST"

  constructor(private http: HttpClient) {}

  sendEmail(email){
    return this.http.post("https://formspree.io/f/xpznzrpp", email);
  }
}
