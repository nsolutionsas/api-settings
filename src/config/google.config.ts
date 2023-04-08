import { registerAs } from '@nestjs/config';

export default registerAs('google', () => ({
  private_key: process.env.GC_PRIVATE_KEY,
  client_email: process.env.GC_CLIENT_EMAIL,
}));
