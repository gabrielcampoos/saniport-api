declare namespace Express {
  interface Request {
    user: {
      id: string;
      name: string;
      cpf: string;
      phone: string;
    };
  }
}
