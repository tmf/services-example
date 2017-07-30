# services example

[Demo](http://services-external-1mlixwq6c5yo4-196035142.eu-central-1.elb.amazonaws.com/)

![architecture](https://docs.google.com/drawings/d/1_FSdF3uUWhf-c5ww5YlPhq6uFXQjPu2JZ4491tKqq00/pub?w=1671&h=835)

Demonstrate how microservices combined with their frontend services (reducers, sagas, actions, initial state) can help create highly reusable modules.

On a higher level, it proposes to introduce boundaries in the redux state: not everything is necessarily UI state. Let API-data related reducers manage their own state!

The idea is that you just need to connect the microservice's iniital state, reducer and saga to the redux state and then be able to use containers provided by the "connector".
This is possible in this example, however [example-app/src/components/TodoList](https://github.com/tmf/services-example/blob/master/example-app/src/components/TodoList) and related components could be packaged into a ready-to-use container (and components) in [example-api/connector](https://github.com/tmf/services-example/blob/master/example-api/connector). These containers would already be "connected" to the state, regarding API-related state data.

Of course, this will only truly scale with multiple microservices and frontends.

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

### Publishing docker images

```sh
cd example-app
make release VERSION=0.3.2 BUILD_ENV=production
```

### Deploying stack

I didn't figure out how to scale example-api: each instance has it's own data.json.
Sharing (with volumes?) didn't work yet (I am doing something wrong).
This is why, right now, example-api has only one instance (replica)... And is therefore a single point of failure. But I suppose a real API service would manage to share some kind of distributed database.

1. Connect to your docker swarm
   ```sh
   docker run --rm -ti -v /var/run/docker.sock:/var/run/docker.sock -e DOCKER_HOST dockercloud/client username/swarm
   # ...
   # Use your Docker ID credentials to authenticate:
   # Username: username
   # Password:
   ```
2. Define docker host
   ```sh
   export DOCKER_HOST=tcp://127.0.0.1:32768
   ```
3. deploy
   ```sh
   # in services-example
   docker stack deploy -c docker-compose.yml services-example
   ```
3. inspect
   ```sh
   # in services-example
   docker stack ps services-example
   ```
3. shutdown
   ```sh
   # in services-example
   docker stack rm services-example
   ```