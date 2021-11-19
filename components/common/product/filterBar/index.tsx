import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classnames from "classnames";
import Text from "@components/common/typography";
import Logo from "public/assets/brandmarks/symbol-primary.svg";
import SearchIcon from "@components/icons/search";
import ArrowDownIcon from "@components/icons/arrowDown";
import GridIcon from "@components/icons/grid";
import ListIcon from "@components/icons/list";
import CollectionIcon from "@components/icons/collection";
import ProductFilter from "./ProductFilter";
import SortByFilter from "./SortByFilter";
import SearchFilter from "./SearchFilter";
import ColourSchemeFilter from "./ColourSchemeFilter";
import styles from "./styles.module.scss";

export default function ProductFilters({}) {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeDisplayMode, setActiveDisplayMode] = useState("grid");
  const changeDisplayMode = (mode) => {
    setActiveDisplayMode(mode);
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a>
              <Image src={Logo} width="158" height="40" alt="Fibonacci" />
            </a>
          </Link>
        </div>
        <div className={styles.filters}>
          <div
            className={classnames(styles.searchItem, {
              [styles.activeFilter]: activeFilter === "search",
            })}
            onClick={() => {
              setActiveFilter("search");
            }}
          >
            <Text variant="Body-Small" mr="10px">
              Search
            </Text>
            <SearchIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.productItem, {
              [styles.activeFilter]: activeFilter === "products",
            })}
            onClick={() => {
              setActiveFilter("products");
            }}
          >
            <Text variant="Body-Small">Products</Text>
            <ArrowDownIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.colourSchemeItem, {
              [styles.activeFilter]: activeFilter === "colour-schemes",
            })}
            onClick={() => {
              setActiveFilter("colour-schemes");
            }}
          >
            <Text variant="Body-Small">Colour Schemes</Text>
            <ArrowDownIcon />
          </div>
          <div
            className={classnames(styles.filterItem, styles.sortByItem, {
              [styles.activeFilter]: activeFilter === "sort-by",
            })}
            onClick={() => {
              setActiveFilter("sort-by");
            }}
          >
            <Text variant="Body-Small">Sort by</Text>
            <ArrowDownIcon />
          </div>
        </div>
        <div className={styles.displayOptionsContainer}>
          <div className={styles.displayOptions}>
            <div
              className={classnames(styles.iconContainer, {
                [styles.active]: activeDisplayMode === "grid",
              })}
              onClick={() => {
                changeDisplayMode("grid");
              }}
            >
              <GridIcon className={styles.displayIcon} />
            </div>
            <div
              className={classnames(styles.iconContainer, {
                [styles.active]: activeDisplayMode === "list",
              })}
              onClick={() => {
                changeDisplayMode("list");
              }}
            >
              <ListIcon className={styles.displayIcon} />
            </div>
            <div
              className={classnames(styles.iconContainer, {
                [styles.active]: activeDisplayMode === "collection",
              })}
              onClick={() => {
                changeDisplayMode("collection");
              }}
            >
              <CollectionIcon className={styles.displayIcon} />
            </div>
          </div>
        </div>
        <div className={styles.selections}>
          <Text variant="Body-Small">Selections</Text>{" "}
          <span className={styles.selectionCount}>88</span>
        </div>
      </section>
      {activeFilter && (
        <section className={styles.filterContainer}>
          {activeFilter === "search" && <SearchFilter />}
          {activeFilter === "products" && <ProductFilter />}
          {activeFilter === "sort-by" && <SortByFilter />}
          {activeFilter === "colour-schemes" && <ColourSchemeFilter />}
        </section>
      )}
    </>
  );
}
