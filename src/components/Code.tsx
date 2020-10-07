import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';
import {
  a11yDark,
  a11yLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeProps {
  htmlString: string;
  javascriptString: string;
}
export const Code: React.FC<CodeProps> = ({
  htmlString,
  javascriptString,
}): JSX.Element => {
  const [currentLang, setCurrentLang] = useState('html');
  return (
    <>
      <LanguageSwitcher
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
      <SyntaxHighlighter
        language={currentLang}
        style={currentLang === 'html' ? a11yLight : a11yDark}
      >
        {currentLang === 'html' ? htmlString : javascriptString}
      </SyntaxHighlighter>
    </>
  );
};

const LanguageSwitcherStyles = styled.div`
  display: flex;
  justify-content: end;
  button {
    font-weight: bold;
  }
  .isActive {
    color: var(--red);
  }
`;
const LanguageSwitcher = ({ currentLang, setCurrentLang }) => {
  return (
    <LanguageSwitcherStyles>
      <button
        className={currentLang === 'html' ? 'isActive' : null}
        onClick={() => setCurrentLang('html')}
      >
        HTML
      </button>
      <button
        className={currentLang === 'jsx' ? 'isActive' : null}
        onClick={() => setCurrentLang('jsx')}
      >
        JSX
      </button>
    </LanguageSwitcherStyles>
  );
};
