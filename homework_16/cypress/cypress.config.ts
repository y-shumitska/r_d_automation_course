import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 10000
    }
});
