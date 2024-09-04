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
      <section className={`default-wrapper-width ${styles.smInner}`}>
        <h2>results for {searchText}...</h2>
        <section className={styles.smResultsWrapper}>
          <div className={styles.smCol}>
            <h3 className={styles.smColTitle}>... in name</h3>
            <div className={styles.smResults}>
              {resultsInName.map((mixFromName) => (
                <div key={mixFromName.name} className={styles.smResult}>
                  {mixFromName.name}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.smCol}>
            <h3 className={styles.smColTitle}>... in tags</h3>
            <div className={styles.smResults}>
              {resultsInTags.map((mixFromTag) => (
                <div key={mixFromTag.name} className={styles.smResult}>
                  {mixFromTag.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SearchModal;
