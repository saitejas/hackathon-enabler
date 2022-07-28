import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  readTextFile(file: any, callback: any) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

  getEmployees() {
    return this.httpClient.get('assets/js/employees.js', { responseType: 'json' })
    .pipe(map(res => res));
  }

}
