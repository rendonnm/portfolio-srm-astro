import type { WorkExperience } from "../types/workExperience";

export const workExperience: WorkExperience[] = [
  {
    company: "Domina Entrega Total S.A.S",
    position: "Desarrollador de Software",
    duration: "Ene. 2026 - Actualidad",
    location: "Medellín, Colombia",
    description: `
Desarrollo interfaces modernas con React y TypeScript dentro de una arquitectura multitenant, permitiendo gestionar múltiples empresas desde una misma plataforma.

Construyo módulos frontend escalables bajo una arquitectura basada en funcionalidades, integrando microfrontends reutilizables y desplegables de forma independiente.

Integro APIs REST y gestiono el estado con Zustand y TanStack Query, asegurando flujos de datos consistentes, sincronización eficiente y UX fluida.

Refactorizo componentes y optimizo rendimiento, garantizando mantenibilidad, reutilización y estandarización visual en toda la aplicación.

Implemento pruebas de componentes y pruebas unitarias para asegurar estabilidad, detectar errores temprano y mejorar la calidad de los despliegues.

Colaboro con equipos backend y de producto para definir alcance técnico, alineando arquitectura, requisitos funcionales y buenas prácticas de desarrollo.
`,
  },
  {
    company: "IGGA S.A.S.",
    position: "Profesional A (Desarrollador de Software)",
    duration: "Jul. 2024 - Dic. 2025",
    location: "Medellín, Colombia",
    description: `
Lideré el primer proyecto de software desarrollado internamente para un cliente, impulsando la creación del área de desarrollo en la empresa.

Construí interfaces accesibles y responsivas con React, TypeScript y Tailwind CSS, integrando APIs REST.

Apliqué una arquitectura orientada a funcionalidades; gestioné el estado global con Zustand, el enrutamiento con React Router y la sincronización del estado del servidor con TanStack Query.

Implementé interfaces a partir de especificaciones de diseño, garantizando consistencia visual, accesibilidad y compatibilidad entre dispositivos y navegadores.

Aseguré la calidad con pruebas end-to-end (Playwright) y pruebas unitarias/de componentes (Jest, React Testing Library).
    `,
  },
  {
    company: "IGGA S.A.S.",
    position: "Profesional A (Analista de Redes)",
    duration: "Nov. 2022 - Jul. 2024",
    location: "Medellín, Colombia",
    description: `
    Desarrollé herramientas internas y funcionalidades de apoyo, utilizando React y TypeScript para optimizar flujos de trabajo geoespaciales y de telecomunicaciones.

Brindé soporte funcional y técnico a la plataforma GE Smallworld GIS para operaciones de telecomunicaciones, garantizando la continuidad del servicio y la calidad de los datos.

Investigué y resolví incidentes técnicos, reduciendo tiempos de resolución y mejorar la confiabilidad del sistema.
    `,
  },
];
