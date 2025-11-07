export interface LoginResponseModel {
  status: {
    code: number;
    message: string;
    success: boolean;
  };
  data: {
    token_type: string;
    token: string;
    expire_at: number;
    refresh_token: string;
  };
}