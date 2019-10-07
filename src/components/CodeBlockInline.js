import React from "react";
import Highlight, {defaultProps} from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/duotoneLight";

export default ({className = "", children}) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={lightTheme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <code className={className} style={{...style, padding: "5px"}}>
          {tokens.map((line, i) => (
            <span key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </span>
          ))}
        </code>
      )}
    </Highlight>
  );
};
