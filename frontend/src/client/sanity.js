import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'TU_ID_AQUÍ', // Lo encuentras en tu panel de Sanity o en sanity.config.js
  dataset: 'production',
  useCdn: true, // Esto hace que la respuesta sea súper rápida
  apiVersion: '2026-01-24', // Usa la fecha de hoy
})