import { IField } from '../interfaces';
import { validateEmail, validatePassword } from './regex';

const validateFields = (fields: IField[]): boolean => {
  let validatedFields = 0;
  fields.forEach((f) => {
    switch (f.type) {
    case 'email':
      if (validateEmail(f.value)) {
        validatedFields++;
      }
      break;
    case 'password':
      if (validatePassword(f.value)) {
        validatedFields++;
      }
      break;
    }
  });
  if (validatedFields < fields.length) {
    return false;
  } else {
    return true;
  }
};

export default validateFields;
