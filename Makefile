.PHONY: help install npm clean

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## transiple source for production
	@./node_modules/.bin/webpack --colors --progress --config webpack.config.js --env production

devel: ## transiple source for devel
	@./node_modules/.bin/webpack --colors --progress --config webpack.config.js --env development

lint: ## to check the coding rules
	@./node_modules/.bin/eslint src/*.js

clean: ## remove node_modules and temp files
	@rm -Rf ./dist/ ./npm-debug.log

