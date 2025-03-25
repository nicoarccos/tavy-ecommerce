import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// Configuración temporal para usuarios de demostración
const users = [
  {
    id: "1",
    name: "Usuario Demo",
    email: "demo@tavy4x4.com",
    password: "password123",
  },
  {
    id: "2",
    name: "Admin Demo",
    email: "admin@tavy4x4.com",
    password: "admin123",
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // El nombre a mostrar en el botón de inicio de sesión
      name: "Credenciales",
      // `credentials` se utiliza para generar un formulario en la página de inicio de sesión
      credentials: {
        email: { label: "Email", type: "email", placeholder: "tu@email.com" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        // Este es un ejemplo sencillo, en producción, buscarías en la base de datos
        const user = users.find(
          (user) =>
            user.email === credentials?.email &&
            user.password === credentials?.password
        );

        if (user) {
          // Cualquier objeto devuelto se guardará en el token de JWT
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } else {
          // Si devuelves null, se mostrará un error en el formulario
          return null;
        }
      },
    }),
    // Comentados para que no den error al no tener configuración real
    // En producción, descomentarías y agregarías tus credenciales
    /*
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    */
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login", // Error al iniciar sesión
    // newUser: '/register' // Nueva registración
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 