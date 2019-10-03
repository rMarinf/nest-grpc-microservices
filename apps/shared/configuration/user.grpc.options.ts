import { join } from 'path';

export const UserMicroserviceOptions = {
  url: '0.0.0.0:5000',
  package: 'user',
  protoPath: join(__dirname, '../../..', 'protos/user.proto'),
  loader: {
    includeDirs: [
      join(__dirname, '../../..', 'protos'),
    ],
  },
};
