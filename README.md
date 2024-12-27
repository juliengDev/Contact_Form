# Contact Form Component

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)


## Overview

This project is an accessible contact form component that allows users to submit their inquiries while providing real-time validation feedback. It was developed with a strong focus on accessibility, keyboard navigation, and responsive design, following modern front-end development best practices.

### The Challenge
Users should be able to:
- Complete the form and see a success toast message upon submission
- Receive clear validation messages for:
  - Missing required fields
  - Incorrectly formatted email addresses
- Navigate and complete the form using keyboard only
- Experience full screen reader support for inputs, error messages, and success notifications
- View the optimal layout across different device screen sizes
- See hover and focus states for all interactive elements

### Links
Live Demo : [Contact Form Component]()

## My Process

### Built With
- TypeScript for enhanced type safety
- Semantic HTML5 markup
- SCSS for advanced styling
- Mobile-first workflow
- ARIA attributes for accessibility
- Real-time form validation
- Toast notification system

### What I Learned
This project enhanced my understanding of building accessible and user-friendly forms. Key takeaways include:

1. Implementing comprehensive form validation with TypeScript
2. Creating accessible form elements with proper ARIA attributes
3. Developing a reusable toast notification system
4. Managing form state and error handling
5. Ensuring keyboard navigation accessibility
6. Building responsive layouts for form elements

Code examples:
```typescript
// Form validation with regular expressions
const NAME_REGEX = /^[A-ZÀ-Ÿ][a-zà-ÿ' -]{1,49}$/;

<!-- Accessible form elements -->
<input
  type="email"
  id="email"
  aria-required="true"
  aria-describedby="email-error"
/>
```

### Continued Development

Future improvements I plan to work on:
	•	Adding more sophisticated validation patterns
	•	Implementing form auto-save functionality
	•	Enhancing animation transitions
	•	Adding support for file uploads
	•	Implementing form analytics

### Useful Resources	
	
  - [	MDN Forms Guide ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) - Comprehensive guide for building web forms
  - [WAI-ARIA Practices](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) -  Essential patterns for accessible web components.
  - [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) - Provides guidelines and best practices for creating accessible web content.

## Author

- Website - [Julien Gilbert Portfolio](https://juliengdev.github.io/julien-gilbert-portfolio/)
- Frontend Mentor - [@juliengDev](https://www.frontendmentor.io/profile/juliengDev)
- LinkedIn - [Julien Gilbert](https://www.linkedin.com/in/julien-gilbert-reactjs/)

Feel free to reach out if you have any questions or feedback about this project!