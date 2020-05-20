import { objectType } from '@nexus/schema';

export const Habit = objectType({
  name: 'Habit',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.startDate();
  },
});
