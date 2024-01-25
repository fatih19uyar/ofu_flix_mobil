export interface LoginRequest {
    username: string;
    password: string;
    remember: boolean;
  }
  
  export interface LoginResponse {
    accessToken: string;
  }
  
  export interface Details {
    currencyCode: string
    fullName: string
  }
  
  export interface User {
    userId: string;
    sessionInfo: SessionInfo;
    iat: number;
    exp: number;
  }
  
  export interface SessionInfo {
    sessionID: string;
    details: Details
    username: string;
  }
