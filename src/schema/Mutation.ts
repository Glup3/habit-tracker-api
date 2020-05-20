import { mutationType } from '@nexus/schema';

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.deleteOneUser();

    t.crud.createOneHabit();
    t.crud.updateOneHabit();
    t.crud.deleteOneHabit();

    t.crud.createOneEntry();
    t.crud.updateOneEntry();
    t.crud.deleteOneEntry();
  },
});
