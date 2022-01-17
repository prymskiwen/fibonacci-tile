import React, { useState } from "react";
import Masonry from "react-masonry-css";
import MasonryInfiniteScroller from "react-masonry-infinite";
import Image from "next/image";
import Link from "next/link";
import {
  Bottom,
  Container,
  Details,
  FilterWrapperDesktop,
  FilterWrapperMobile,
  ImageWrapper,
  LinkWrapper,
  LoadMoreWrapper,
  Project,
} from "./styles";
import mockData from "./constants";
import ArrowButton from "@components/common/button/arrowButton";
import Chip from "@components/common/chip";
import Arrow from "@components/common/icons/arrow";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";

import styles from "./styles.module.scss";

interface ProjectListType {
  projects: Array<any>;
  types: Array<string>;
}

const ProjectList = ({ projects, types }: ProjectListType) => {
  const [selectedType, setSelectedType] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState([]);

  const onProjectTypeClick = (type) => {
    const projectList = projects.filter(
      (project) => project.type === type || type === "all"
    );

    setDisplayedProjects(projectList);
    setSelectedType(type);
  };

  return (
    <>
      <FilterWrapperDesktop>
        {types.map((type) => (
          <Chip
            key={type}
            onClick={() => onProjectTypeClick(type)}
            rounded
            active={type === selectedType}
          >
            {type}
          </Chip>
        ))}
      </FilterWrapperDesktop>
      <FilterWrapperMobile>Mobile filter section</FilterWrapperMobile>
      <Container css={css({ pt: 80 })}>
        <Masonry
          breakpointCols={{
            default: 2,
            768: 1,
          }}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {displayedProjects.map((project) => (
            <Project key={project.id}>
              <ImageWrapper>
                <Image
                  src={project.thumbnail}
                  alt={project.slug}
                  layout="responsive" // required
                  width="500"
                  height="300"
                />
              </ImageWrapper>
              <Text
                variant="Body-Small"
                css={css({ gridRow: 2, gridColumn: 1 })}
              >
                {project.date}
              </Text>
              <Details>
                <Text variant="Display-XSmall">{project.title}</Text>
                <Text variant="Display-XSmall" color={theme.colors.concrete}>
                  {project.location}
                </Text>
                <LinkWrapper>
                  <Link href={`/projects/${project.slug}`}>View Project</Link>
                  <Arrow type="short" />
                </LinkWrapper>
              </Details>
            </Project>
          ))}
        </Masonry>
        {displayedProjects.length ? (
          <LoadMoreWrapper>
            <ArrowButton mode="" title="Load more" link="#" />
          </LoadMoreWrapper>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default ProjectList;
