Setup a postgres instance running:

```
docker pull postgres

docker run --name prisma-classes -p 5455:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=test -d postgres
```