import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Algorithms and data structures.',
      description: 'First steps to success!',
      duration: 100
    }
  })

  console.log(result)
}

main()
