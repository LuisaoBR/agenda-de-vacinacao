

.PHONY: dev
dev:
	npx -y concurrently -n backend,frontend -c yellow,cyan '$(MAKE) backend-dev' '$(MAKE) frontend-dev'

.PHONY: backend
backend-dev:
	cd backend && ./mvnw spring-boot:run -Dspring-boot.run.profiles=dev,local

.PHONY: frontend
frontend-dev:
	cd frontend && npm run dev
