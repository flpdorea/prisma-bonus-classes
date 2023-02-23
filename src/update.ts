import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: { id: "fea3604c-d0fa-4d0d-9ed0-843962112c1a" },
    data: { duration: 200 }
  })

  console.log(result)
}

main()
