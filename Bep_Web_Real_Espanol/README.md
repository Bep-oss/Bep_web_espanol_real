# Bep Web - Español

Esta es la versión funcional del sistema web Bep, con inicio de sesión integrado con Firebase y redirección al panel del usuario.

## Instrucciones para subir a Vercel

1. Descomprime este archivo ZIP.
2. Abre la carpeta `Bep_Web_Real_Espanol` en Visual Studio Code.
3. Crea una cuenta en [https://vercel.com](https://vercel.com) si no tienes una.
4. Haz clic en "Add New Project" y selecciona esta carpeta.
5. Asegúrate de que el directorio raíz del proyecto tenga el archivo `vercel.json`.
6. Sube y espera que Vercel genere el enlace público.

## Estructura

- `public/login.html`: Formulario de inicio de sesión
- `public/login.js`: Lógica de autenticación con Firebase
- `public/dashboard.html`: Panel de usuario tras login
