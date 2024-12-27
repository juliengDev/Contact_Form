import {showSuccessMessage} from './toast';


// Constants for validation
const VALIDATION = {
  NAME_REGEX: /^[A-ZÀ-Ÿ][a-zà-ÿ' -]{1,49}$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_MESSAGE_LENGTH: 1
};

const getRequiredElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id) as T;
  if (!element) throw new Error(`Element ${id} not found`);
  return element;
};

const handleFieldError = (
  inputEl: HTMLElement, 
  errorEl: HTMLElement, 
  isValid: boolean
): boolean => {
  if (!isValid) {
    inputEl.classList.add('error-input');
    errorEl.classList.remove('hidden');
    errorEl.setAttribute('aria-hidden', 'false');
  } else {
    inputEl.classList.remove('error-input');
    errorEl.classList.add('hidden');
    errorEl.setAttribute('aria-hidden', 'true');
  }
  return isValid;
};



const formEl = getRequiredElement<HTMLFormElement>('form');

if (formEl) {
  const firstNameEl = getRequiredElement<HTMLInputElement>('first-name');
  const firstNameErrorEl = getRequiredElement<HTMLSpanElement>('firstname-error');
  const lastNameEl = getRequiredElement<HTMLInputElement>('last-name');
  const lastNameErrorEl = getRequiredElement<HTMLSpanElement>('lastname-error');
  const emailEl = getRequiredElement<HTMLInputElement>('email');
  const emailErrorEl = getRequiredElement<HTMLSpanElement>('email-error');
  const messageEl = getRequiredElement<HTMLTextAreaElement>('message');
  const messageErrorEl = getRequiredElement<HTMLSpanElement>('message-error');
  const consentCheckbox = getRequiredElement<HTMLInputElement>('consent');
  const consentErrorEl = getRequiredElement<HTMLSpanElement>('consent-error');
  const submitButton = formEl.querySelector('button[type="submit"]') as HTMLButtonElement;

  const validateField = (
    element: HTMLInputElement | HTMLTextAreaElement,
    errorElement: HTMLSpanElement,
    validationFn: (value: string) => boolean
  ): boolean => {
    const isValid = validationFn(element.value.trim());
    return handleFieldError(element, errorElement, isValid);
  };

  const fields = [
    {
      element: firstNameEl,
      errorElement: firstNameErrorEl,
      validationFn: (value: string) => VALIDATION.NAME_REGEX.test(value)
    },
    {
      element: lastNameEl,
      errorElement: lastNameErrorEl,
      validationFn: (value: string) => VALIDATION.NAME_REGEX.test(value)
    },
    {
      element: emailEl,
      errorElement: emailErrorEl,
      validationFn: (value: string) => VALIDATION.EMAIL_REGEX.test(value)
    },
    {
      element: messageEl,
      errorElement: messageErrorEl,
      validationFn: (value: string) => value.length >= VALIDATION.MIN_MESSAGE_LENGTH
    }
  ];

  fields.forEach(field => {
    field.element.addEventListener('input', () => {
      validateField(field.element, field.errorElement, field.validationFn);
    });
  });

  formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    submitButton.disabled = true;

    try {
      let isValid = true;

      fields.forEach(field => {
        if (!validateField(field.element, field.errorElement, field.validationFn)) {
          isValid = false;
        }
      });

      const queryRadios = document.querySelectorAll<HTMLInputElement>('input[name="query-type"]');
      const queryErrorEl = getRequiredElement<HTMLSpanElement>('query-error');
      const isQuerySelected = Array.from(queryRadios).some(radio => radio.checked);
      
      if (!handleFieldError(queryRadios[0], queryErrorEl, isQuerySelected)) {
        isValid = false;
      }

      if (!handleFieldError(consentCheckbox, consentErrorEl, consentCheckbox.checked)) {
        isValid = false;
      }

      if (isValid) {
        this.reset();
        showSuccessMessage(formEl);
      }
    } catch (error) {
      console.error('Error when validating the form:', error);
    } finally {
      submitButton.disabled = false;
    }
  });
}