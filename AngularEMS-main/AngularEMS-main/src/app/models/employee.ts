import { Department } from "./department";
import { Gender } from "./gender";

export class Employee {
    id!: number;
    name!: string;
    dateOfBirth!: Date;
    gender!: Gender;
    email!: string;
    mobileNo!: number;
    departmentId!: number;
    department!: Department;
}
