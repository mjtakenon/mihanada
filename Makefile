build: 
	docker compose build
up: 
	docker compose up -d
down: 
	docker compose down
setup: 
	make build
	make up
	make yarn-install
	make yarn-run-dev
start:
	make up
	make yarn-install
	make yarn-run-dev
logs:
	docker compose logs
logs-watch:
	docker compose logs -f --tail 100

exec-frontend: 
	docker compose exec frontend bash
yarn-install:
	docker compose exec frontend bash -c "yarn install --frozen-lockfile"
	# docker compose exec frontend bash -c "chown node:node /app/node_modules -R"
	# docker compose cp frontend:/app/node_modules ./app
yarn-run-dev:
	docker compose exec frontend bash -c "yarn run dev"
