import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: #222;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => {
  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      {/* Logo */}
      <NavLink to="/" fontWeight="bold">
        NIRMAL JAIN
      </NavLink>
      {/* Navigation*/}
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
