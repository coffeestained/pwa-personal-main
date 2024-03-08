# pwa-spa-main
This is the primary application of the Progressive Web App application. This component is an Angular Architects Webpack Federation Shell Application and this shell component serves Vue.js, React and Angular micro-frontends. While the work on this application is unlicensed and I happily want you to use it in any capacity -- I encourage you to do your own due diligence in inspecting licensing & terms of the various lower level modules, componentry & packages enabling this applications.

# CICD Notes
A simple implementation would be to create the environments you need such as dev, staging, and prod. 
Configure secrets as an example keys with finite permissions for your target server. 
Consider what permissions it may or may not need with Principle of Least Privilege in mind.

- Set secret to build vars.
- - HOST
- - TOKEN
- - USER
- Stage 1: Set environment, install dependencies, build.
- Stage 2: Clean up environment & artifacts of secrets.