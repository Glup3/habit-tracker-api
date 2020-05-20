import { queryType } from '@nexus/schema';

export const Query = queryType({
  definition(t) {
    t.crud.user();
    t.crud.users();

    t.crud.habit();
    t.crud.habits();

    t.crud.entry();
    t.crud.entries();
  },
});
