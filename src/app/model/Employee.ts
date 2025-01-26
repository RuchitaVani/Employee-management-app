export class Employee {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: 0;
  password: string;
  gender: string;
  role: string;
  createdDate: Date;

  constructor() {
 this.employeeId = 0;
 this.deptId = 0;
 this.contactNo = '';
 this.emailId = '';
 this.employeeName = '';
 this.gender = '';
 this.password = '';
 this.role = '';
 this.createdDate = new Date();
  }
}
export interface IParentDept{
    departmentId: number;
    departmentName: string;
    departmentLogo: string;

  }
  export interface IChildDept{
    childDeptId: number;
    parentDeptId: string;
    departmentName: string;

  }
export interface IApiResponse {
    message: string;
    result: boolean;
    data: any
}