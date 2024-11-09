import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTranslation } from 'react-i18next';
import './../../i18n';
import i18n from '../../i18n';

// Example of a component that uses the useTranslation hook
const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <nav>
        <ul>
          <li>{t('header.menu')}</li>
          <li>{t('header.login')}</li>
          <li>{t('header.contact')}</li>
        </ul>
      </nav>
    </header>
  );
};

// test onlu in header component no need to test on other components
// bc it is just need to test if the translations are working
describe("i18next translation tests", () => {
  it("renders the Header component in Portuguese", () => {
    render(<Header />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it("renders the Header component in English", () => {
    // changing the language to English
    
    i18n.changeLanguage("en-US");

    render(<Header />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
