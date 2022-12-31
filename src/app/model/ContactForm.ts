export interface ContactForm {
  name: string;
  email: string;
  message: string | null;
}

export enum FormState {
  notSent = 'not-sent',
  loading = 'loading',
  result = 'result'
}
