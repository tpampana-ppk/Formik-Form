interface CompanyAdminTypes {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  _id: string;
  username: string;
  role: string;
  createdAt: string;
  selectedOption:{id:string,name:string},
  acceptTerms:boolean
}

export type AdminFormData = Pick<
  CompanyAdminTypes,
  | 'firstname'
  | 'lastname'
  | 'email'
  | 'selectedOption'
  | 'acceptTerms'
  | 'password'
>;
export type FormErrors = Pick<
  CompanyAdminTypes,
  | 'firstname'
  | 'middlename'
  | 'lastname'
  | 'email'
  | 'password'
  | 'confirmPassword'
>;
export type AdminEditData = Pick<
  CompanyAdminTypes,
  | '_id'
  | 'username'
  | 'firstname'
  | 'middlename'
  | 'lastname'
  | 'email'
  | 'selectedOption'
  |'acceptTerms'
  | 'password'
  | 'confirmPassword'
>;
export type AdminData = Pick<
  CompanyAdminTypes,
  '_id' | 'username' | 'email' | 'role' | 'createdAt'
>;

export interface PasswordVisibleState {
  password: boolean;
  confirmPassword: boolean;
}
export const adminTablePayload = {
  columns: [
    {
      data: 'username',
      name: '',
      searchable: true,
      orderable: true,
      search: { value: '', regex: false },
    },
    {
      data: 'role',
      name: '',
      searchable: true,
      orderable: true,
      search: { value: '', regex: false },
    },
    {
      data: 'email',
      name: '',
      searchable: true,
      orderable: true,
      search: { value: '', regex: false },
    },
    {
      data: 'createdAt',
      name: '',
      searchable: false,
      orderable: true,
      search: { value: '', regex: false },
    },
  ],
  draw: 1,
  length: 10,
  order: [{ column: 0, dir: 'asc' }],
  search: { value: '', regex: false },
  start: 0,
};
