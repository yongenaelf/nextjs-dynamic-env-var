# NextJS Dynamic Env Var

This is an example of using dynamic environment variables, so that the same docker image can be promoted through different environments without rebuilding a different image.

## Installation

```bash
pnpm install
```

## Build

```bash
pnpm build
```

## Docker

We can try it out with the sample `compose.yml`:

```bash
docker compose up -d
```

Open http://localhost:3000 in your browser. Notice that the words `i changed this dynamic variable again` appears on the page.

Now, edit the environment variable:

```yml
services:
  fe:
    build: .
    ports:
      - 3000:3000
    environment:
      - DYNAMIC_ENV_VAR=i changed this dynamic variable now
```

```bash
docker compose up -d
```

Notice that the words have changed.