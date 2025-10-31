import { z } from 'zod';

export const envSchema = z.object({
  port: z.coerce.number({
    error: (iss) =>
      iss.code === 'invalid_type'
        ? `Parámetro PORT no definido en las variables de entorno`
        : `Error desconocido`,
  }),
});
// Exporta el tipo inferido para usar en tu app
export type EnvConfig = z.infer<typeof envSchema>;

export function validateEnvs(config: Record<string, unknown>): EnvConfig {
  const envs = envSchema.safeParse(config);

  if (!envs.success) {
    console.error('❌ Error en las variables de entorno:');
    console.error(envs.error.message);
    throw new Error('Configuración de variables de entorno inválida');
  }

  return envs.data;
}
