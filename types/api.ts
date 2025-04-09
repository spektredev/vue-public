export enum ApiStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ApiResponse<T> {
  status: string;
  data?: T;
  error?: ErrorResponse;
}

export interface ErrorResponse {
  description: string;
  code: number;
}
