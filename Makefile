test:
	npm run test
node:
	rm -rf api && \
	rm -rf model && \
	docker run --rm \
	 -v ${PWD}:/local openapitools/openapi-generator-cli:v7.20.0 generate \
	 -i https://raw.githubusercontent.com/conekta/openapi/main/_build/api.yaml \
	 -g typescript-axios \
	 -o /local \
	 -c /local/config-node.json  \
	 --global-property apiDocs=true  --global-property apiTests=true 
up-mockserver:
	docker run -d -p 3000:3000 mockoon/cli:latest -d https://raw.githubusercontent.com/conekta/openapi/main/mocks/conekta_api.json --port 3000
