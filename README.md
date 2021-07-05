# About the Application

# Step by Step Assembly of the Application

1. General Scaffolding (Non-Platform Dependant) fd9055e
    a. Initialize package.json
    b. Initialize git package and GitIgnore

    Checkpoint: None

2. Configure the TypeScript Compiler and Compile first File 709a575
    a. Install...
        typescript@4.2.4
    b. reate tsconfig.json
    c. Create src/index.ts
    d. Create npm build script: tsc
    
    Checkpoint: Compilation Should Work

3. Compile the application for browsers a9261a7
    a. Install...
        webpack@5.37.1
        webpack-cli@4.7.0
        webpack-dev-server@3.11.2
        ts-loader@9.2.2
        http-server@^0.12.3

    b. Create webpack.config
    c. Create npm webpack script
    d. Create public/index.html
    e. Create second TypeScript file for import

    Checkpoint: Serve should work with console log combined from two files

4. Implement debugging
    a. Create .vscode/launch.json
    b. Install debugger for chrome (only needs to be done once per workstation, no change to source code)

    Checkpoint: Add breapoint and run the debugging script. Source maps and breakpoints should be functioning correctly.

5. Implement ESLint