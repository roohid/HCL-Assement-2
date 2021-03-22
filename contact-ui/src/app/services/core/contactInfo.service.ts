import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpService) {

  }

  // Get All Contact Info List
  getListOfContactInfo() {
    return this.http.getApi("/contactinfo/getAllContactInfo");
  }

  // Save Contact Info
  saveContactInfo(obj) {
    return this.http.postApi("/contactinfo/create", obj);
  }

  // Get Contact Info By Id
  getContactInfoById(id) {
    return this.http.getApi("/contactinfo/getContactInfoById/"+id);
  }
}