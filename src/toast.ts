const toastStyles = `
  .toast-container {
    position: fixed;
    margin: 2.4rem auto;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    width: 100%;
    max-width: 90%;
    background-color: var(--grey-900);
    color: #fff;
    padding: 2.4rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: flex-start;
    gap: 1.6rem;
    animation: slideIn 0.3s ease-out;
    opacity: 1;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  } 
    
  .toast-container.toast-hide {
    opacity: 0;
    transform: translate(-50%, -100%);
  }

  @media (min-width: 768px) {
    .toast-container {
      max-width: 45rem; 
    }
  }

  @media (min-width: 1024px) {
    .toast-container {
      max-width: 45rem; 
    }
  }

  .toast-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  .toast-content {
    flex-grow: 1;
  }

  .toast-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.5;
  }

  .toast-message {
    font-size: 1.4rem;
    margin: 0.4rem 0 0;
    line-height: 1.5;
    opacity: 0.9;
  }

  @keyframes slideIn {
    from {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);


export const showSuccessMessage = (parentElement: HTMLElement = document.body): void => {
  const toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';

  const iconSvg = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
      <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  const content = document.createElement('div');
  content.className = 'toast-content';

  const title = document.createElement('h3');
  title.className = 'toast-title';
  title.textContent = 'Message sent!';

  const message = document.createElement('p');
  message.className = 'toast-message';
  message.textContent = "Thanks for completing the form. We'll be in touch soon!";

  content.appendChild(title);
  content.appendChild(message);
  toastContainer.innerHTML = iconSvg;
  toastContainer.appendChild(content);

  parentElement.appendChild(toastContainer);
  setTimeout(() => {
    toastContainer.classList.add('toast-hide');
    
    setTimeout(() => {
      if (parentElement.contains(toastContainer)) {
        parentElement.removeChild(toastContainer);
      }
    }, 300); 
  }, 3000);
};