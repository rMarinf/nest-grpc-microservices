import { join } from 'path';

export const UserMicroserviceOptions = {
  package: 'user',
  protoPath: join(__dirname, '../../..', 'protos/user.proto'),
  loader: {
    includeDirs: [
      join(__dirname, '../../..', 'protos'),
    ],
  },
};
