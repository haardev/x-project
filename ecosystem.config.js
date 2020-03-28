module.exports = {
    apps : [{
      name: "app",
      watch: ["public", "src"],
      watch_delay: 1000,
      script: "ts-node ./src/index.ts",
      watch_options: {
        "followSymlinks": false
      },
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }