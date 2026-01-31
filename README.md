# ITPM Assignment 01 - IT23181410

## Singlish to Sinhala Translator - Playwright Test Suite

This project contains automated test cases for testing the Singlish to Sinhala translator at [Swift Translator](https://www.swifttranslator.com/).

## Project Structure

```
IT23181410/
├── IT23181410_GitHub_Link.txt    # GitHub repository link
├── IT23181410_TestCases.xlsx     # Excel file with test cases
├── README.md                      # This file
├── package.json                   # Root dependencies
├── singlish-playwright/           # Playwright project
│   ├── .github/workflows/         # GitHub Actions
│   ├── tests/
│   │   ├── IT23181410_positive_functional.spec.ts
│   │   ├── IT23181410_negative_functional.spec.ts
│   │   └── IT23181410_positive_ui.spec.ts
│   ├── playwright.config.js
│   └── package.json
└── test-results/                  # Test execution results
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/ITPM-Assignment-01-IT23181410.git
cd ITPM-Assignment-01-IT23181410
```

2. Install dependencies:
```bash
cd singlish-playwright
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

### Run all tests:
```bash
cd singlish-playwright
npx playwright test
```

### Run specific test files:
```bash
npx playwright test IT23181410_positive_functional.spec.ts
npx playwright test IT23181410_negative_functional.spec.ts
npx playwright test IT23181410_positive_ui.spec.ts
```

### Run tests with UI:
```bash
npx playwright test --ui
```

### View test report:
```bash
npx playwright show-report
```

## Test Cases Summary

| Category | File | Count |
|----------|------|-------|
| Positive Functional | IT23181410_positive_functional.spec.ts | 24 |
| Negative Functional | IT23181410_negative_functional.spec.ts | 10 |
| Positive UI | IT23181410_positive_ui.spec.ts | 1 |
| **Total** | | **35** |

### Expected Test Results

- **25 Positive tests pass** - These verify correct translator behavior
- **10 Negative tests fail** - These are intentional failures demonstrating edge cases the translator cannot handle (e.g., joined words, slang, special characters)

## Author

- Registration Number: IT23181410

## License

This project is for educational purposes only.
