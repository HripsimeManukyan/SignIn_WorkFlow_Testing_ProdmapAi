
# 🔐 SignIn_WorkFlow_Testing_ProdmapAi

![GitHub repo size](https://img.shields.io/github/repo-size/HripsimeManukyan/SignIn_WorkFlow_Testing_ProdmapAi)
![GitHub last commit](https://img.shields.io/github/last-commit/HripsimeManukyan/SignIn_WorkFlow_Testing_ProdmapAi)
![GitHub package.json dependency version (Cypress)](https://img.shields.io/github/package-json/dependency-version/HripsimeManukyan/SignIn_WorkFlow_Testing_ProdmapAi/cypress)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-3e8ddd.svg)
![License](https://img.shields.io/badge/license-MIT-green)

This repository contains **automated Cypress test cases** to validate the **Sign-In workflow** and related **report functionality** of the [ProdMap AI](https://prodmap.ai) platform.


## 📁 Project Structure

```
SignIn_WorkFlow_Testing_ProdmapAi/
├── cypress/
│   ├── e2e/
│   │   └── Tests/
│   │       ├── SignIn.cy.js     # Test cases for user sign-in flow
│   │       └── Reports.cy.js    # Test cases for report-related actions
├── cypress.config.js            # Cypress configuration file
├── .gitlab-ci.yml               # GitLab CI/CD pipeline configuration
├── .gitignore                   # Git ignored files
├── package.json                 # Project dependencies and scripts
└── package-lock.json            # Dependency lock file
```

---

## ✅ Test Coverage

- **SignIn.cy.js**
  - Verifies correct login behavior with valid credentials.
  - Checks error handling with invalid credentials.
  - Validates required field errors.
  
- **Reports.cy.js**
  - Validates accessibility and visibility of report sections.
  - Ensures report generation functionality works as expected.
  - Tests user interactions with reports (e.g., filters, downloads).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Cypress](https://www.cypress.io/) installed (`npm install cypress`)
- GitLab runner if using CI/CD with `.gitlab-ci.yml`

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/SignIn_WorkFlow_Testing_ProdmapAi.git
cd SignIn_WorkFlow_Testing_ProdmapAi
npm install
```

### Run Tests

```bash
npx cypress open   # For interactive mode
npx cypress run    # For headless mode
```

---

## 🔄 CI/CD Integration

This project uses **GitLab CI/CD** for automated test execution. The `.gitlab-ci.yml` is already set up to trigger Cypress tests on push/merge.

---

## ✍️ Author

- **Hripsime Manukyan**  
  *Automated QA Engineer | Cypress*

---

## 📌 License

This project is licensed for educational and internal testing use. Please refer to the license file if added.
```

