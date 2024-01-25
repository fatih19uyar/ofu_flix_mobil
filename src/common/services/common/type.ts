export interface ErrorResponse {
  status: number;
  message: Message;
}

export type Error = {
  message: Message | string;
  status: number;
};

export interface Message {
  service: string;
  id: string;
  message: string;
}
