NS = tforrer
REPO = example-api
VERSION ?= 0.1.0

.PHONY: build push release

build:
	docker build -t $(NS)/$(REPO):$(VERSION) .

push:
	docker push $(NS)/$(REPO):$(VERSION)

release: build
	make push -e VERSION=$(VERSION)

default: build