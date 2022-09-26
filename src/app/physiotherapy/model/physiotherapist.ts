export interface Physiotherapist {
  id: number,
  first_name: string,
  paternal_surname: string,
  maternal_surname: string,
  specialization: string,
  age: number,
  location: string,
  birthdate: string,
  email: string,
  rating: number,
  consultations_quantity: number,
  consultations_price: number,
  experience_years: number,
  photo: string,
  education: string[]
}
