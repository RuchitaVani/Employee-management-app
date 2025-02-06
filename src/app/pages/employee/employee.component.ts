import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import {
  Employee,
  IApiResponse,
  IChildDept,
  IParentDept,
} from '../../model/Employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  parentDeptList: IParentDept[] = [];
  childDeptList: IChildDept[] = [];
  deptId: number = 0;

  employeeObj: Employee = new Employee();
  employeeList : Employee[] = [];

  masterService = inject(MasterService);
  empService = inject(EmployeeService);
  ngOnInit(): void {
    console.log(this.masterService);
    this.getParentDeptList();
    this.getEmployees();
  }
  getEmployees() {
    this.empService.getEmployes().subscribe((res:Employee[]) => {
      this.employeeList = res;
    })
  }
  onDelete(id: number) {
    const result = confirm('Are you sure you want to delete this employee?');
    if (result) {
    this.empService.deleteEmpById(id).subscribe(
      (res: Employee) => {
        alert('Employee deleted success');
        this.getEmployees();
      },error => {
        alert('error From Api')
      }
    )
  }
  }
  getParentDeptList() {
    this.masterService.getParentDept().subscribe((res: IApiResponse) => {
      this.parentDeptList = res.data;
    });
  }
  OnDeptChange() {
    this.masterService
      .getChildDeptByParentId(this.deptId)
      .subscribe((res: IApiResponse) => {
        this.childDeptList = res.data;
      });
  }

  onSaveEmp() {
    debugger;
    this.empService.creatNewEmployee(this.employeeObj).subscribe(
      (res: Employee) => {
        alert('Employee creation success');
      },error => {
        alert('error From Api')
      }
    )
  }
}
