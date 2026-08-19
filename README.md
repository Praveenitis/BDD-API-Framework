# BDD API & UI Automation Framework

An advanced automation framework built using **JavaScript, Cucumber BDD, Playwright, and REST API automation**, with reusable service-layer architecture, dynamic test data, centralized configuration, logging, reporting, and GitHub Actions CI/CD integration.

The framework is designed to support scalable **API automation and future UI + API hybrid testing**.

---

## 🚀 Key Features

- BDD-based API automation using Cucumber
- Reusable API client abstraction
- Service-layer architecture
- Authentication and token management
- Centralized authentication context
- Dynamic booking test data generation
- Availability-aware booking creation
- Complete booking CRUD lifecycle
- Request and response time logging
- Environment-based configuration using `.env`
- Cucumber Hooks for scenario setup
- Smoke and API test tagging
- HTML and JSON test reports
- GitHub Actions CI/CD integration
- Automated report artifact upload
- Playwright configured for UI automation
- Hybrid UI + API test execution structure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Node.js | Runtime environment |
| Cucumber | BDD framework |
| Playwright | UI automation |
| REST API | API automation |
| dotenv | Environment configuration |
| Git | Version control |
| GitHub Actions | CI/CD |
| npm | Dependency management |

---

## 🏗️ Framework Architecture

```text
                     Feature Files
                          │
                          ▼
                  Step Definitions
                          │
                          ▼
                    Service Layer
                  ┌───────┴────────┐
                  │                │
            AuthService      BookingService
                  │                │
                  └───────┬────────┘
                          ▼
                       ApiClient
                          │
                          ▼
                       REST API


Supporting Components
─────────────────────────────────────────
AuthContext
TokenManager
TestDataFactory
AvailabilityHelper
Logger
Environment Configuration
Cucumber Hooks


CI/CD
─────────────────────────────────────────
Git Push / Pull Request
          │
          ▼
    GitHub Actions
          │
          ▼
     Node.js 22
          │
          ▼
       npm ci
          │
          ▼
   Cucumber API Tests
          │
          ▼
   Cucumber Reports
          │
          ▼
   GitHub Artifacts
```

---

## 📁 Project Structure

```text
BDD-API-Framework/
│
├── .github/
│   └── workflows/
│       ├── api-tests.yml
│       └── playwright.yml
│
├── api/
│   ├── apiClient.js
│   ├── authContext.js
│   ├── authService.js
│   ├── bookingService.js
│   ├── roomService.js
│   └── tokenManager.js
│
├── config/
│   └── environment.js
│
├── features/
│   ├── auth.feature
│   ├── booking.feature
│   └── createBooking.feature
│
├── hooks/
│   └── hooks.js
│
├── reports/
│   ├── cucumber-report.html
│   └── cucumber-report.json
│
├── step-definitions/
│   ├── auth.steps.js
│   ├── booking.steps.js
│   ├── common.steps.js
│   └── createBooking.steps.js
│
├── tests/
│   └── # Playwright UI tests
│
├── utils/
│   ├── availabilityHelper.js
│   ├── logger.js
│   └── testDataFactory.js
│
├── .env
├── .env.example
├── .gitignore
├── cucumber.js
├── package.json
├── package-lock.json
└── playwright.config.js
```

> Generated reports are excluded from source control and uploaded as GitHub Actions artifacts.

---

# 🔐 Environment Configuration

The framework uses `dotenv` to keep environment-specific configuration outside the source code.

Create a `.env` file in the project root:

```env
BASE_URL=https://automationintesting.online/api
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
ROOM_ID=1
```

The `.env` file is intentionally excluded from Git using `.gitignore`.

A `.env.example` file is provided as a template for required environment variables.

---

# 🧪 API Test Coverage

The current API automation covers the complete booking lifecycle.

### Authentication

```text
POST /auth/login
```

Validates:

- Admin authentication
- HTTP status
- Authentication token generation
- Token storage

---

### Booking Retrieval

```text
GET /booking/
```

Validates:

- Authenticated requests
- Booking retrieval
- HTTP status
- Response structure
- Booking information

---

### Booking Creation

```text
POST /booking/
```

Validates:

- Dynamic test data
- Availability handling
- Booking creation
- HTTP `201 Created`
- Generated booking ID

---

### Booking Retrieval by ID

```text
GET /booking/{bookingId}
```

Validates:

- Dynamic booking ID chaining
- Created booking retrieval
- Response data

---

### Booking Update

```text
PUT /booking/{bookingId}
```

Validates:

- Updating an existing booking
- Updated booking information
- Response status
- Data verification

---

### Booking Deletion

```text
DELETE /booking/{bookingId}
```

Validates:

- Booking deletion
- Successful `202 Accepted` response
- Post-deletion verification

The framework subsequently verifies that the deleted booking can no longer be retrieved.

---

# 🔄 Dynamic Test Data

The framework uses `TestDataFactory` to generate booking data dynamically.

Example:

```javascript
const booking = TestDataFactory.generateBookingData();
```

Dynamic values help prevent conflicts between repeated test executions.

The framework also uses `AvailabilityHelper` to identify suitable booking dates before creating bookings.

---

# 🔑 Authentication Architecture

Authentication is separated into reusable components.

```text
AuthService
     │
     ├── TokenManager
     │
     └── AuthContext
             │
             ▼
      Authentication Headers
```

`TokenManager` handles token lifecycle operations while `AuthContext` provides authentication state and request headers.

This prevents authentication logic from being duplicated across step definitions and services.

---

# 🌐 API Client

All HTTP communication is centralized through `ApiClient`.

Supported methods:

```text
GET
POST
PUT
PATCH
DELETE
```

The API client provides:

- Common request handling
- Default headers
- Custom headers
- Query parameters
- Request body serialization
- JSON response parsing
- Response-time measurement
- Centralized API logging

Example:

```javascript
await apiClient.post(endpoint, {
    headers,
    body
});
```

---

# 📝 Logging

The framework includes a centralized logger:

```text
utils/logger.js
```

API requests are automatically logged through the API client.

Example:

```text
[INFO] POST /auth/login
[INFO] POST /auth/login → 200 (482ms)
```

This provides useful visibility into:

- HTTP method
- Endpoint
- Response status
- Response time

---

# 🧩 Cucumber Hooks

Common framework setup is handled through Cucumber Hooks.

The `Before` hook initializes reusable services for each scenario:

```text
Scenario
   │
   ▼
Before Hook
   │
   ├── AuthService
   └── BookingService
   │
   ▼
Scenario Steps
```

This avoids repeatedly creating the same services inside individual step definitions.

---

# 🏷️ Test Tags

The framework supports selective test execution using Cucumber tags.

### Run the complete suite

```bash
npm test
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run API tests

```bash
npm run test:api
```

### Run hybrid tests

```bash
npm run test:hybrid
```

The `@hybrid` execution path is reserved for the UI + API scenarios that will be added to the framework.

---

# 📊 Test Reporting

Cucumber generates:

```text
reports/
├── cucumber-report.html
└── cucumber-report.json
```

### HTML Report

Provides a human-readable execution report containing:

- Features
- Scenarios
- Steps
- Execution status
- Failures

### JSON Report

Provides machine-readable execution data that can be consumed by CI/CD and reporting tools.

---

# ⚙️ CI/CD — GitHub Actions

The framework is integrated with GitHub Actions.

The API workflow executes automatically on:

- Push to `main`
- Pull requests targeting `main`
- Manual workflow execution

Pipeline:

```text
Git Push / Pull Request
          │
          ▼
   Checkout Repository
          │
          ▼
      Node.js 22
          │
          ▼
        npm ci
          │
          ▼
   Cucumber API Tests
          │
          ▼
 Generate Cucumber Reports
          │
          ▼
 Upload Reports as Artifact
```

This ensures that API automation is continuously validated through CI/CD.

---

# ▶️ Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>

cd BDD-API-Framework

npm install
```

Create the `.env` file using `.env.example` as a reference.

---

# ▶️ Running Tests Locally

### Full API/BDD suite

```bash
npm test
```

### Smoke tests

```bash
npm run test:smoke
```

### API tests

```bash
npm run test:api
```

### Hybrid tests

```bash
npm run test:hybrid
```

---

# 🧪 Test Execution Result

The current API automation suite validates:

```text
Authentication
     ↓
Booking Availability
     ↓
Create Booking
     ↓
Retrieve Booking
     ↓
Update Booking
     ↓
Verify Update
     ↓
Delete Booking
     ↓
Verify Deletion
```

The complete API suite is integrated with GitHub Actions for automated execution.

---

# 🎯 Framework Design Principles

The framework follows several automation engineering principles:

- Separation of concerns
- Reusable components
- Service-layer abstraction
- Centralized API communication
- Dynamic test data
- Environment-based configuration
- Scenario isolation
- Reusable authentication
- Centralized logging
- CI/CD integration
- Maintainable BDD structure

---

# 🔮 Future Enhancements

Planned improvements include:

- UI automation scenarios using Playwright
- UI + API hybrid workflows
- Cross-browser execution
- Parallel test execution
- Enhanced reporting
- Failure screenshots and traces
- Environment-specific CI pipelines
- Expanded API coverage
- Negative API testing
- Schema validation
- Contract testing

---

# 👨‍💻 Author

**Praveen**

SDET / Automation Testing Enthusiast

---

## ⭐ Project Highlights

This project demonstrates practical experience with:

**API Automation • BDD • Cucumber • Playwright • JavaScript • REST APIs • Service Layer Architecture • Authentication • Dynamic Test Data • Logging • Reporting • GitHub Actions • CI/CD**