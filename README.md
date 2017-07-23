# services example

Demonstrate how microservices combined with their frontend services (reducers, sagas, actions, selectors) can help create highly reusable modules.

# Requirements
- node
- docker

# Local development

```sh
cd example-app
docker-compose up
```

With live-reloading ✨!

# Deploy

```sh
docker-compose up
```

# Docker image building is eating all my disk space!

 - Delete all containers
   ```sh
docker rm $(docker ps -a -q)
```
 - Delete all images
   ```sh
docker rmi $(docker images -q)
```

