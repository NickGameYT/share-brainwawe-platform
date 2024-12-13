import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('nehuesos', 10);
  
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      name: 'Админ',
      email: 'admin@gmail.com',
      password: hashedPassword,
      role: 'ADMIN', // Устанавливаем роль администратора
    },
  });

  console.log('Админ успешно создан');
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
