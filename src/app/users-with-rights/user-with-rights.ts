import { User } from '../users/user';
import { Right } from '../rights/right';

export interface UserWithRights {
  user: User;
  rights: Right[];
}
