import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from 'src/app/services/core/contactInfo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  // Contact Info Table Data
  contactInfoData;

  ifCreated: boolean;
  ifViewed: boolean;
  ifEdited: boolean;

  // Gender List
  genderList = ['Male', 'Female', 'Transgender'];

  //  Display  Table Columns
  displayedColumns: string[] = ['id', 'name', 'email', 'mobileNumber', 'action'];

  // Create Contact Fields
  name;
  email;
  mobileNumber;
  selectedGender;
  address;

  //view Contact Info
  viewContactInfo;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.ifViewed = true; // Enable View Tab
    this.showData(); // Table Data Called
  }

  // Enable View Tab
  viewBtn() {
    this.ifCreated = false;
    this.ifViewed = true;
    this.ifEdited = false;
    this.showData()
  }

  // Enable Create Tab
  createBtn() {
    this.ifCreated = true;
    this.ifViewed = false;
    this.ifEdited = false;

    // Empty Field Values
    this.name='';
    this.email='';
    this.mobileNumber='';
    this.address='';
    this.selectedGender='';
  }

  // Enable Edit(view detail) Tab
  editBtn() {
    this.ifCreated = false;
    this.ifViewed = false;
    this.ifEdited = true;
  }

  showData() {
    // Get All Contact Info List
    this.contactService.getListOfContactInfo().subscribe((res: any) => {
      if (res) {
        this.contactInfoData = new MatTableDataSource(res);
      }
    });
  }

  // Save Contact Info
  save() {
    this.contactService.saveContactInfo({
      name: this.name,
      email: this.email,
      address: this.address,
      gender: this.selectedGender,
      mobile: this.mobileNumber
    }).subscribe(res => {
      if (res) {
        this.viewBtn();
        Swal.fire({
          title: 'Successfull',
          text: 'Contact Info Saved Successfully',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: '#47A44B'
        });
      }
    });
  }

  // Filter Option for Table
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contactInfoData.filter = filterValue.trim().toLowerCase();
  }

  // Edit Contact Info(View Contact Info) By Id
  editContactInfo(row) {
    this.editBtn();
    this.contactService.getContactInfoById(row.id).subscribe(res => {
      if (res) {
        this.viewContactInfo = res;
      }
    });
  }
}
