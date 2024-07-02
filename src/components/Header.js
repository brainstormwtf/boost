// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">BOOST</div>
      <div className="login-buttons">
        <button>Login with Telegram</button>
        <button>Login with TON Wallet</button>
      </div>
    </header>
  );
};

export default Header;
