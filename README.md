# Contact Form Component

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

## Overview

This project is an **accessible contact form component** that allows users to submit their inquiries while providing **real-time validation feedback**. It was developed with a strong focus on **accessibility**, **keyboard navigation**, and **responsive design**, following modern front-end development best practices.

---

### Key Features

- **Live form validation** for missing fields and incorrect email formats  
- **Toast notifications** upon successful submission  
- **Full keyboard navigation support**  
- **Screen reader compatibility** for error messages and success notifications  
- **Responsive layout** that adapts to all screen sizes  
- **Hover and focus states** for all interactive elements  

---

## ♿️ Accessibility Focus

Ensuring an inclusive and accessible experience:
- **Semantic HTML5 Elements** for better structure and readability  
- **ARIA Attributes** for improved screen reader support  
  - `aria-required` and `aria-describedby` for input validation feedback  
  - `role="alert"` for toast notifications  
- **Keyboard Navigation** for seamless form completion  
- **Screen Reader Support** with proper labeling and dynamic error messages  

---

## 📋 Form Validation & User Experience

1. **Real-time validation**  
   - Required fields prompt instant error messages  
   - Invalid email formats are detected immediately  

2. **Dynamic error handling**  
   - Error messages update in real-time as users type  
   - Clear visual feedback using color contrast and icons  

3. **Toast notifications**  
   - Success message appears upon valid submission  
   - Designed to be **non-intrusive** and **accessible**  

---

### Code Examples

#### TypeScript - Form Validation
```typescript
const NAME_REGEX = /^[A-ZÀ-Ÿ][a-zà-ÿ' -]{1,49}$/;

const validateName = (name: string): boolean => {
  return NAME_REGEX.test(name);
};
```

### Accessible Form Element
```html
<input
  type="email"
  id="email"
  aria-required="true"
  aria-describedby="email-error"
/>
```

---

## 🚀 Live Demo

[Contact Form Component](https://juliengdev-contact-form.netlify.app/)

---

## 🛠 Built With

- **TypeScript** for strong typing and maintainability
- **Semantic HTML5** for structured content
- **SCSS (BEM methodology)** for organized styling
- **Mobile-first Workflow** for optimal responsiveness
- **ARIA Attributes** for enhanced accessibility
- **Real-time Form Validation** for a better user experience
- **Toast Notification System** for instant feedback

---

## ✨ Continued Development

Future improvements planned:
- Enhanced validation patterns (phone numbers, strong passwords)
- Form auto-save functionality
- Improved animation transitions for smoother UI interactions
- File upload support for attachments
- Form analytics tracking to understand user behavior

---

## 📦 Installation

To set up the project locally, follow these steps:

1. **Clone the repository**
```bash
git clone https://github.com/juliengDev/contact-form-component.git
cd contact-form-component
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview the production build**
```bash
npm run preview
```

---

## 📚 Useful Resources

- [GitHub Repository: Contact Form Component](https://github.com/juliengDev/Contact_Form)
- [MDN Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms) - Comprehensive guide for building web forms
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/) - Essential patterns for accessible web components
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) - Best practices for creating accessible web content

---

## 👨‍💻 Author

- **Portfolio** - [Julien Gilbert](https://juliengilbert.com/)
- **GitHub** - [@juliengDev](https://github.com/juliengDev)
- **LinkedIn** - [Julien Gilbert](https://www.linkedin.com/in/julien-gilbert-reactjs/)

*Feel free to reach out if you have any feedback or questions!* 🚀
