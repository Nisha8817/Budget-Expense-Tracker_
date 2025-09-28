# Budget Tracker

A comprehensive personal finance management web application that helps users track income, expenses, set budgets, monitor savings goals, and generate insightful reports with AI-powered financial advice. The app features an intuitive dashboard, interactive charts, and uses browser localStorage for data persistence (no backend required for core functionality). Backend support (Node.js/Express/MongoDB) is optional and can be enabled for cloud-synced data if desired.

## Features

- **Transaction Management**: Add, edit, and delete income/expense transactions with categorization.
- **Budget Tracking**: Set and monitor budgets for different expense categories with progress visualization.
- **Savings Goals**: Create and track progress toward financial goals with deadlines.
- **Reports & Analytics**: 
  - Visual charts for income vs. expenses, category breakdowns, trends over time.
  - Top expenses and category spending summaries.
- **AI Financial Insights**: Personalized advice based on spending patterns, savings rates, and budget predictions.
- **Responsive Design**: Modern UI with dark/light theme toggle, mobile-friendly layout.
- **Data Persistence**: Browser localStorage for offline functionality and data persistence across sessions (no server needed).
- **Filtering & Search**: Filter transactions by type, category, and date range.

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript, Chart.js (for visualizations)
- **Data Storage**: Browser localStorage (primary; backend optional)
- **Optional Backend**: Node.js, Express.js, MongoDB (with Mongoose ODM)
- **Other**: 
  - Font Awesome for icons
  - Chart.js for charts

## Prerequisites

- Web browser (modern browser like Chrome, Firefox, or Edge)
- No server or database required for basic use (localStorage handles everything)

## Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/budget-tracker.git
   cd budget-tracker
   ```

2. **No Dependencies Needed for Frontend-Only Mode**:
   - Simply open `index.html` in your web browser.
   - All data is stored in your browser's localStorage and persists across sessions.

3. **Optional: Set Up Backend for Cloud Persistence** (if Node.js/MongoDB issues persist, skip this):
   - Install Node.js (v14 or higher) from [nodejs.org](https://nodejs.org).
   - Install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community) and start the service (`mongod`).
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file:
     ```
     MONGODB_URI=mongodb://localhost:27017/budgettracker
     PORT=5000
     ```
   - Start the server:
     ```
     npm start
     ```
   - The frontend will automatically use the backend API at `http://localhost:5000` if available.

## Usage

1. Open `index.html` in your browser (double-click the file or use a local server extension like Live Server in VS Code).
2. Navigate through sections: Dashboard, Transactions, Budgets, Reports, Savings Goals.
3. Add transactions via the "+" button in the Transactions section.
4. Set budgets in the Budgets section.
5. Create goals in the Savings Goals section.
6. View insights and charts in the Reports section (uses sample/fallback data if no transactions).
7. Toggle theme with the sun/moon icon.
8. Data is automatically saved to localStorage; refresh the page to verify persistence.

**Note**: Since backend (Node.js/MongoDB) is not required and may not be working, the app runs fully on localStorage. All CRUD operations (Create, Read, Update, Delete) for transactions, budgets, and goals are handled client-side.

## Testing Status

- **Already Tested**:
  - UI navigation between sections (Dashboard, Transactions, Budgets, Reports, Savings Goals).
  - Adding goals via modal and localStorage persistence.
  - Theme toggle and basic chart rendering with fallback data.

- **Remaining Areas** (Thorough testing recommended but optional):
  - Transactions CRUD (add/edit/delete) with filters (type, category, month).
  - Budgets: Setting/updating category budgets and viewing progress bars.
  - Full Reports/Charts: Income/Expense pie, trends line chart, top expenses, category breakdown.
  - AI Insights: Generation of personalized advice and budget predictions.
  - Multiple Goals: Adding/tracking several goals.
  - Edge Cases: No data scenarios, invalid form inputs, data persistence on page reload.

To test remaining areas, interact with the app in your browser. If issues arise, clear localStorage (via DevTools) and retry.

## Screenshots

- **Dashboard**: Overview of balance, income, expenses, and AI insights.
- **Transactions**: Table with filters and add/edit modals.
- **Budgets**: Category progress bars.
- **Reports**: Charts for income/expenses, trends, and breakdowns.
- **Goals**: Progress trackers for savings targets.

(Upload screenshots to the repo's `screenshots/` folder and link them here.)

## Troubleshooting

- **Data Not Persisting**: Check browser console for errors; ensure localStorage is enabled (not in incognito/private mode).
- **Charts Not Loading**: Verify internet connection for Chart.js CDN; download locally if needed.
- **Backend Errors (if attempted)**: Node.js/MongoDB not installed/running—stick to localStorage mode.
- **Invalid Inputs**: Forms include validation; alert messages show errors.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with love for personal finance management.
- Icons from Font Awesome.
- Charts powered by Chart.js.

---

For issues or questions, open a GitHub issue or contact the maintainer.
# Budget-Expense-Tracker_
