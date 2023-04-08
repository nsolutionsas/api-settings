import * as bcrypt from 'bcrypt';

export class HashService {
  static hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  static comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
