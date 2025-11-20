import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Dbservice } from '../../dbservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personaldetalssearch',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personaldetalssearch.html',
  styleUrl: './personaldetalssearch.scss',
})
export class Personaldetalssearch {
  fulldata:any[]=[];
  reportdetails: any[] = [];
  reportformgroup!: FormGroup;
  typeArray: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: Dbservice,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.reportformgroup = this.fb.group({
      startdate: [''],
      enddate: [''],
      typeid: [''],
      gender: [''],
      category: [''],
    });

    // Load designation dropdown
    this.db.designationview().then((data: any) => {
      this.typeArray = data;
    });

    this.db.getalldata().then((data:any)=>{
      this.fulldata=data;
      this.cdr.detectChanges();
    });
  }

  // Triggered when designation changes
  // onchange(event: any): void {
  //   const typeid = this.reportformgroup.value.typeid;
  //   if (typeid) {
  //     this.db.getdpersonaldetailsbyid({ typeid }).then((data: any) => {
  //       this.reportdetails = data;
  //       this.cdr.detectChanges();
  //     });
  //   } else {
  //     this.reportdetails = [];
  //   }
  // }
  // Advanced search: Date + Designation + Gender + Category
  OnSubmit(): void {
    const filters = this.reportformgroup.value;
    console.log('Search Filters:', filters);
    this.db.advancedReportSearch(filters).then((data: any) => {
      this.reportdetails = data;
      console.log('Search Results:', this.reportdetails);
      this.cdr.detectChanges();
    });
  }
}