export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    userId: string | null;
  }