import { objectType } from '@nexus/schema';

export const Entry = objectType({
  name: 'Entry',
  definition(t) {
    t.model.id();
    t.model.done();
  },
});
