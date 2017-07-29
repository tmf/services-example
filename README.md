# services example

Demonstrate how microservices combined with their frontend services (reducers, sagas, actions, selectors) can help create highly reusable modules.

## Requirements
- node
- docker

## Local development

The [`example-app/docker-compose.yml`](https://github.com/tmf/services-example/blob/master/example-app/docker-compose.yml) configuration references a development image that can be used as a starting point.
Under this configuration, when running the container, it's example-app directory will be swapped out with the local example-app directory: this enables live-reloading.
```sh
cd example-app
docker-compose pull
docker-compose up

open http://localhost
```

When updating the [`example-api/connector`](https://github.com/tmf/services-example/blob/master/example-api/connector), while running this configuration, run the following commands:
```sh
# in directory example-api/connector
yarn run dev

# (only because default create-react-app doesn't watch stuff inside node_modules without ejecting)
# in directory example-app
docker-compose up -d --force-recreate example-app
```

Stopping everything (including cleaning up networks and images) can be done by running:
```sh
# in directory example-app:
docker-compose down
```
## Deployment

### Locally
```sh
docker-compose pull
docker-compose up

open http://localhost
```

### Using docker swarm

Still figuring this out...