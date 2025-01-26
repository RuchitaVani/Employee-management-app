import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IParentDept } from '../../model/Employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
parentDeptList : IParentDept[] = [];

masterService = inject(MasterService);
ngOnInit(): void {
  console.log(this.masterService);
  this.getParentDeptList();

}
getParentDeptList(){
  this.masterService.getParentDept().subscribe((res:IApiResponse)=>{
this.parentDeptList =  res.data;
  })
}
}