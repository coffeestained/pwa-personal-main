# pwa-spa-main
This is the primary application of the Progressive Web App application. This component is an Angular Architects Webpack Federation Shell Application and this shell component serves Vue.js, React and Angular micro-frontends. While the work on this application is unlicensed and I happily want you to use it in any capacity -- I encourage you to do your own due diligence in inspecting licensing & terms of the various lower level modules, componentry & packages enabling this applications.

# Installation
I am using NGINX server side to provide the shell application, the child applications and API.

Then you can adjust the module federation configuration file at `shell/src/assets/mf.mainfest.json` with the child application endpoints.

# CICD Notes For Above Implementation
I have an example pipeline available in the .github folder.

A simple implementation would be to create the environments you need such as dev, staging, and prod. 

Then configure secrets as an example keys with finite permissions for your target server. 

That said, consider what permissions it may or may not need with Principle of Least Privilege in mind.

- Set secrets:
- - HOST
- - TOKEN
- - USER

- Set vars:
- - CHILDREN should be your `mf.mainfest.json` file.

Stage 1: Set environment, install dependencies, build.
Stage 2: Clean up environment & artifacts of secrets.

