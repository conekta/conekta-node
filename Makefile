test:
	npm run test
node:
	rm -rf api && \
	rm -rf model && \
	docker run --rm \
	 -v ${PWD}:/local openapitools/openapi-generator-cli:v7.14.0 generate \
	 -i https://raw.githubusercontent.com/conekta/openapi/main/_build/api.yaml \
	 -g typescript-axios \
	 -o /local \
	 -c /local/config-node.json  \
	 --global-property apiDocs=true  --global-property apiTests=true 
