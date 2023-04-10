export interface userRegister{
  firstName: string
  lastName: string
  email: string
  password: string
  passwordHash: string
  picture: string
  age: number
}

export interface userLogin {
  email: string
  password: string
}