import { z } from "zod"; // Importamos zod para validar los datos

export const createUsuarioSchema = z.object({
  // Esquema para registrar un usuario
  firstname: z
    .string({
      // Tipo de dato
      required_error: "firstname is required", // Mensaje de error si no se proporciona el firstname
    })
    .min(8), // El nombre de usuario debe tener al menos 8 caracteres
  // Apellido
  lastname: z
    .string({
      // Tipo de dato
      required_error: "lastname is required", // Mensaje de error si no se proporciona el lastname
    })
    .min(8), // El lastname debe tener al menos 8 caracteres
  // Email
  email: z
    .string({
      // Tipo de dato
      required_error: "email is required", // Mensaje de error si no se proporciona el email
    })
    .min(10), // El email debe tener al menos 10 caracteres
  // password
  password: z
  .string({
    // Tipo de dato
    required_error: "password is required", // Mensaje de error si no se proporciona el password
  })
  .min(10), // El password debe tener al menos 10 caracteres

});
