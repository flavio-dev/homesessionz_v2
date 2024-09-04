"use client";
import { useState, useRef } from "react";

import CrossIcon from "@/components/atoms/CrossIcon";
import SearchIcon from "@/components/atoms/SearchIcon";
import SearchModal from "@/components/molecules/SearchModal";

import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setSearchText("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const focusOnInput = () => {
    if (!isFocused && input && input.current) {
      input.current.focus();
      setIsFocused(true);
    }
  };

  const blurOnInput = () => {
    if (isFocused && !searchText.length) {
      setIsFocused(false);
    }
  };

  return (
    <>
      <SearchModal searchText={searchText} />
      <div
        className={
          isFocused ? `${styles.search} ${styles.searchFocused}` : styles.search
        }
      >
        <div
          className={
            searchText.length
              ? `${styles.searchClearIcon} ${styles.searchHasText}`
              : styles.searchClearIcon
          }
          onClick={clearInput}
        >
          <CrossIcon />
        </div>
        <div className={styles.searchIcon} onClick={focusOnInput}>
          <SearchIcon />
        </div>
        <input
          ref={input}
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={handleChangeInput}
          onFocus={focusOnInput}
          onBlur={blurOnInput}
        />
      </div>
    </>
  );
};

export default SearchBar;
