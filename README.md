# Web CV - MD Sadique Inam

A modern, modular CV/Resume website built with Nuxt.js, featuring reusable components and centralized data management.

## 🚀 Features

- **Modular Architecture**: Built with reusable Vue components
- **Centralized Data Management**: All CV data stored in a single `data.js` file
- **Modern Stack**: Nuxt.js 4 with Vue 3 composition API
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Print-Friendly**: Optimized CSS for printing
- **Easy to Maintain**: Update CV content by editing `data.js`

## 📁 Project Structure

```
web-cv/
├── app.vue                 # Main app component with global styles
├── data.js                 # Centralized CV data
├── pages/
│   └── index.vue          # Home page using all components
├── components/
│   ├── CVHeader.vue       # Header with name and title
│   ├── ContactInfo.vue    # Contact information and links
│   ├── SkillsSection.vue  # Skills with color-coded tags
│   ├── SummarySection.vue # Professional summary
│   ├── ExperienceSection.vue # Work experience timeline
│   ├── ProjectsSection.vue   # Key projects grid
│   └── EducationSection.vue  # Education timeline
├── public/                # Static assets
├── nuxt.config.ts        # Nuxt configuration
└── package.json          # Dependencies
```

## 🛠️ Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mdsadiqueinam/web-cv.git
cd web-cv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Updating Your CV

All CV content is managed through the `data.js` file. Simply edit this file to update:

- Personal information (name, title)
- Contact details (phone, email, location, social links)
- Skills (with color categories)
- Professional summary
- Work experience
- Projects
- Education

### Example: Adding a New Skill

```javascript
// In data.js
skills: [
  // ... existing skills
  { name: 'React', color: 'blue' },
]
```

### Example: Adding a New Project

```javascript
// In data.js
projects: [
  // ... existing projects
  {
    name: 'New Project',
    period: 'Jan 2025 - Present',
    description: 'Project description here...',
  },
]
```

## 🏗️ Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🖨️ Print Support

The CV is optimized for printing. Simply use your browser's print function (Ctrl/Cmd + P) to generate a PDF version.

## 🎨 Styling

The project uses Tailwind CSS (loaded via CDN) for styling. Custom styles are defined in `app.vue` and include:

- Inter font family from Google Fonts
- Custom print styles
- Color scheme with blue accents
- Responsive breakpoints

## 🧩 Components

### CVHeader
Displays the name and professional title.

### ContactInfo
Shows contact information with icons (phone, email, location, GitHub, LinkedIn).

### SkillsSection
Displays skills as color-coded badges (blue for languages/frameworks, green for databases, gray for tools).

### SummarySection
Professional summary section.

### ExperienceSection
Timeline view of work experience with responsibilities.

### ProjectsSection
Grid layout of key projects with descriptions.

### EducationSection
Timeline view of educational background.

## 📦 Dependencies

- **Nuxt.js**: Vue.js framework for production-ready applications
- **Vue 3**: Progressive JavaScript framework
- **Tailwind CSS**: Utility-first CSS framework (via CDN)

## 🔄 Migration from Static HTML

This project was converted from a static `index.html` to a Nuxt.js application to:

- Enable component reusability
- Centralize data management
- Improve maintainability
- Prepare for future enhancements
- Follow modern web development best practices

The original `index.html` has been preserved as `index-backup.html` for reference.

## 📄 License

This is a personal CV website. Feel free to use the structure as inspiration for your own CV.

## 👤 Author

**MD Sadique Inam**
- GitHub: [@mdsadiqueinam](https://github.com/mdsadiqueinam)
- LinkedIn: [md32](https://www.linkedin.com/in/md32/)
- Email: md.sadique32@gmail.com

## 🤝 Contributing

This is a personal CV website, but if you notice any bugs or have suggestions for improvements, feel free to open an issue.
