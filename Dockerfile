FROM recompose-base:latest

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for testing)
RUN npm ci

# Copy source code, tests, and config files
COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./
COPY vite.config.js ./
COPY babel.config.cjs ./
COPY jest.config.js ./
COPY .prettierrc ./

# The base image already has scripts at /scripts/
# Set working directory
WORKDIR /app

# Default command
CMD ["/bin/sh", "/scripts/run-tests.sh"]