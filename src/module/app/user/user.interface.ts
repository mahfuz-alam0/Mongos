export interface IUser {
    id: string;
    role: "teacher" | "student";
    password: string;
    name: {
        first: string;
        middle?: string;
        last: string;
    };
    dataOfBirth?: string;
    gender: "male" | "female" | "other";
    email?: string;
    phone?: string;
    emargencyContact?: string;
    presentAddress?: string;
    permanentAddress?: string;
}