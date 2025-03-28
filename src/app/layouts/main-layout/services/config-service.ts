import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ConfigServices{
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private httpClient : HttpClient){}

    getPosts():Observable<any[]>{
        return this.httpClient.get<any[]>(this.apiUrl)
    }
    addPost(postData:any):Observable<any> {
        return this.httpClient.post<any[]>(this.apiUrl, postData)
    }
}