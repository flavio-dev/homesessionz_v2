"use client";
import { useContext, useEffect, useState } from "react";

import { MixesContext } from "@/contexts/mixesContext";

import styles from "./SearchModal.module.css";

export const SearchModal = ({ searchText }: ISearchModalProps) => {
  const [resultsInTags, setResultsInTags] = useState([] as IMix[]);
  const [resultsInName, setResultsInName] = useState([] as IMix[]);
  const { mixes } = useContext(MixesContext);

  useEffect(() => {
    const localResultsInTags = [];
    const localResultsInName = [];
    const searchTextLower = searchText.toLowerCase();

    for (const mix of mixes) {
      const nameOfTheShow = mix.name.toLowerCase();
      const listOfTags = mix.tags;

      // is the typed text in the name:
      if (nameOfTheShow.includes(searchTextLower)) {
        localResultsInName.push(mix);
      }

      for (const tag of listOfTags) {
        const tagName = tag.name.toLowerCase();
        // is the typed text is in one of the tags:
        if (tagName.includes(searchTextLower)) {
          localResultsInTags.push(mix);
          break;
        }
      }
    }

    setResultsInTags(localResultsInTags);
    setResultsInName(localResultsInName);
  }, [searchText, mixes, setResultsInName, setResultsInTags]);

  return (
    <div
      className={
        searchText.length ? `${styles.sm} ${styles.smVisible}` : styles.sm
      }
    >
      <p>searchText - {searchText}</p>
      <p>
        results for the resultsInTags ={" "}
        {resultsInTags.map((mixFromTag) => mixFromTag.name)}
      </p>
      <p>
        results for the resultsInName ={" "}
        {resultsInName.map((mixFromName) => mixFromName.name)}
      </p>
    </div>
  );
};

export default SearchModal;
