import * as bcrypt from 'bcrypt';

const passwordService = {
  encryptPassword: (password: string):string => {
    const salt = bcrypt.genSaltSync(8);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
  },

  comparePassword: (password: string, hash: string):boolean => {
    const comp = bcrypt.compareSync(password, hash);
    return comp;
  },
};

export default passwordService;
