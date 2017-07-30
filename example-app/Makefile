NS = tforrer
REPO = example-app
VERSION ?= 0.3.2
BUILD_ENV ?= production

ifeq ($(BUILD_ENV), development)
BRANCH ?= -dev
endif


.PHONY: build push release

build:
	docker build -t $(NS)/$(REPO):$(VERSION)$(BRANCH) --build-arg BUILD_ENV=$(BUILD_ENV) .

push:
	docker push $(NS)/$(REPO):$(VERSION)$(BRANCH)

release: build
	make push -e VERSION=$(VERSION) BUILD_ENV=$(BUILD_ENV)

default: build