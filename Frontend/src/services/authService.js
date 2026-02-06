// BACKEND SIMULADO (mientras no tengas el real)
const MOCK_USERS = [
  {
    email: 'admin@netadmin.com',
    password: 'admin123',
    user: {
      id: 1,
      nombre: 'Administrador',
      email: 'admin@netadmin.com',
      role: 'administrador'
    }
  },
  {
    email: 'gestor@netadmin.com',
    password: 'gestor123',
    user: {
      id: 2,
      nombre: 'Gestor',
      email: 'gestor@netadmin.com',
      role: 'gestor'
    }
  },
  {
    email: 'lector@netadmin.com',
    password: 'lector123',
    user: {
      id: 3,
      nombre: 'Lector',
      email: 'lector@netadmin.com',
      role: 'lector'
    }
  }
];

const authService = {
  // Login (simulado)
  login: async (email, password) => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 800));

    const userCredentials = MOCK_USERS.find(u => u.email === email);

    if (!userCredentials) {
      throw new Error('Usuario no encontrado');
    }

    if (userCredentials.password !== password) {
      throw new Error('Contraseña incorrecta');
    }

    // Generar token fake
    const token = 'mock_token_' + btoa(JSON.stringify(userCredentials.user));

    // Guardar en localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userCredentials.user));

    return { token, user: userCredentials.user };
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Obtener usuario actual
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Verificar si está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

export default authService;