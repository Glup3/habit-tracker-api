import { objectType } from '@nexus/schema';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.username();
    t.model.firstname();
    t.model.lastname();
    t.model.createdAt();
  },
});
