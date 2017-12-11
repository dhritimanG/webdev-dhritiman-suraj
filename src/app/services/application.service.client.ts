import {SharedService} from "./shared.service.client";
import {Http, Response } from "@angular/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class ApplicationService {
    constructor(private sharedService: SharedService, private http: Http, private router: Router) {
    }
    baseUrl = environment.baseUrl;

    findAllAplications(){
        const url = this.baseUrl +'/api/application';
        return this.http.get(url)
            .map((response: Response) => {
                return response.json();
            });
    }
}