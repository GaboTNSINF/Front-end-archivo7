export interface User {
  _id?: string;
  nombreCompleto: string;
  email: string;
  edad?: number;
  activo?: boolean;
  createdAt?: string;
  updatedAt?: string;
}