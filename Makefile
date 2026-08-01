.PHONY: install dev build test format clean

install:
	pnpm install

dev:
	pnpm start

build:
	CI=true pnpm build

test:
	CI=true pnpm exec react-scripts test --passWithNoTests

format:
	pnpm run format

clean:
	rm -rf node_modules build
