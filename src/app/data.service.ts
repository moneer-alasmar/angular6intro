import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  serviceGetUsers() {
    console.log("Service - GetUsers");
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  serviceGetSingleUser(userId) {
    console.log("Service - GetSingleUser");
    return this.http.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
  }
  serviceGetPosts() {
    console.log("Service - GetPosts");
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
