# Threads Unfollow Automation Script

## **Description**
This script, developed using [Playwright](https://playwright.dev/), automates the process of unfollowing multiple users on Threads. It navigates to the website, logs in with the provided credentials, accesses the user's following list, and performs mass unfollowing.

---

## **Prerequisites**
1. **Node.js**: Ensure you have Node.js installed on your machine. [Download here](https://nodejs.org/).
2. **Playwright**: Install Playwright by running:
   ```bash
   npm install @playwright/test
   ```
3. **Browser Setup:**: Make sure the browsers supported by Playwright are installed. You can do so by running:
  ```bash
    npx playwright install
  ```
## **Script Configuration**
**Credentials:**

- Replace the user and password variables in the script with the username and password of your Threads account.
>Important: Storing credentials directly in the script is not secure. Consider using environment variables for better security.
  
**Target**: The script is configured to navigate to the user's profile and unfollow all the followed accounts.

## **How to Run**
1. Clone or download this repository to your local machine.
2. Navigate to the script's directory:
  ```bash
    cd path/to/script
  ```
3. Run the script using Playwright:
  ```bash
    npx playwright test --grep @unfollow
  ```

## **Important Notes**
**Responsible Usage:**
- Ensure you use this script ethically and in compliance with Threads' terms of service.
**Automation Risks:**
- Automating actions on online platforms may lead to account suspension or banning. Use at your own risk.

## **Contributing**
- If you'd like to improve this script or add new features, feel free to submit pull requests or open issues.
