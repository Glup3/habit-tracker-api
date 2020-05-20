import * as NexusSchema from '@nexus/schema';
import { nexusPrismaPlugin } from 'nexus-prisma';
import * as path from 'path';

import * as User from './User';
import * as Query from './Query';
import * as Mutation from './Mutation';

export default NexusSchema.makeSchema({
  types: [Query, Mutation, User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(__dirname, '../../node_modules/@types/nexus-typegen/index.d.ts'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '.prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('../context'),
        alias: 'Context',
      },
    ],
  },
});
