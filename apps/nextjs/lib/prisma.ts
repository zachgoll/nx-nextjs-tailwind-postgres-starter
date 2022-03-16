import { PrismaClient } from '@prisma/client';

// https://stackoverflow.com/a/68328402
declare global {
  var prisma: PrismaClient; // eslint-disable-line
}

// Prevent multiple instances of Prisma Client in development
// https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prevent-hot-reloading-from-creating-new-instances-of-prismaclient
// https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/instantiate-prisma-client#the-number-of-prismaclient-instances-matters
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;
