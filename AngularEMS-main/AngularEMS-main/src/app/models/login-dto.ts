import { Role } from "./role";

export class LoginDto {
    username!: string;
    role!: Role;
    token!: string;
}
