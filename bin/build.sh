#!/bin/sh
(cd shell && nvm use 20 && npm ci && npx tailwindcss -i ./src/styles-tailwind.scss -o ./src/output.scss && ng build)