FROM mcr.microsoft.com/playwright:v1.52.0-jammy

WORKDIR /final_project

COPY . .

RUN npm install

EXPOSE 8080

CMD sh -c "npx playwright test --workers=1; npx serve ./playwright-report -l 8080"

#CMD ["npx", "playwright", "test", "--workers=1"]
