# Module Federation React Router Framework Reprex

Reproducible example for issues adapting React Router v7 Framework apps as host and remote applications in a micro-frontend architecture with Module Federation.

## Install

```
pnpm -r install
```

## Run

Running both host and remote applications in a single command. Output may be collapsed.

```
pnpm -r dev
```

Start each application in a separate terminal, run `npm run dev` in each application subdirectory.

Open the host and remote applications using the following links:

* Host App - http://localhost:5001
* Remote App - http://localhost:5002

## Issue Description

After starting the applications and navigating to each in the browser, we encounter the following errors on each application:

Error on remote app:
```
require is not defined
  at eval (/Users/myuser/module-federation-react-router-framework-reprex/react-router-framework-remote/node_modules/__mf__virtual/remote__loadShare__react_mf_2_router__loadShare__.js:8:25)
  at instantiateModule (file:///Users/myuser/module-federation-react-router-framework-reprex/react-router-framework-remote/node_modules/.pnpm/vite@5.4.17_@types+node@20.17.30_lightningcss@1.29.2/node_modules/vite/dist/node/chunks/dep-Dyl6b77n.js:52981:11)
```

Error on host app:
```
require is not defined
  at eval (/Users/myuser/module-federation-react-router-framework-reprex/react-router-framework-host/node_modules/__mf__virtual/host__loadShare__react_mf_2_router__loadShare__.js:8:25)
  at instantiateModule (file:///Users/myuser/module-federation-react-router-framework-reprex/react-router-framework-host/node_modules/.pnpm/vite@5.4.17_@types+node@20.17.30_lightningcss@1.29.2/node_modules/vite/dist/node/chunks/dep-Dyl6b77n.js:52981:11)
```

The expected behavior is the remote application [Home](react-router-framework-remote/app/routes/home.tsx) component is rendered in the host application home index page.
