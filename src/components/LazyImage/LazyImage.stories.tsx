import { Meta, Story } from "@storybook/react";
import React from "react";

import avif1x from "../../images/man-bear-pig-avif-1x.avif";
import avif2x from "../../images/man-bear-pig-avif-2x.avif";
import avif3x from "../../images/man-bear-pig-avif-3x.avif";
import jpg1x from "../../images/man-bear-pig-jpg-1x.jpg";
import webp1x from "../../images/man-bear-pig-webp-1x.webp";
import webp2x from "../../images/man-bear-pig-webp-2x.webp";
import webp3x from "../../images/man-bear-pig-webp-3x.webp";

import { LazyImage } from "./LazyImage";
import { LazyImageProps } from "./LazyImage.type";
import css from "./Story.module.scss";

export default {
  title: "COMPONENTS/LazyImage",
  component: LazyImage,
  parameters: {
    componentSubtitle: "Subtitle goes here",
  },
} as Meta;

const Template: Story<LazyImageProps> = (args) => (
  <div className={css.Story}>
    <div className={css.def}>
      <LazyImage {...args} />
    </div>
  </div>
);

const MultipleTemplate: Story<LazyImageProps> = () => (
  <div className={css.Story}>
    <div className={css.grid}>
      <LazyImage src="https://picsum.photos/id/237/300/200" />
      <LazyImage src="https://picsum.photos/id/238/300/200" />
      <LazyImage src="https://picsum.photos/id/239/300/200" />
      <LazyImage src="https://picsum.photos/id/240/300/200" />
      <LazyImage src="https://picsum.photos/id/241/300/200" />
      <LazyImage src="https://picsum.photos/id/242/300/200" />
      <LazyImage src="https://picsum.photos/id/243/300/200" />
      <LazyImage src="https://picsum.photos/id/244/300/200" />
      <LazyImage src="https://picsum.photos/id/245/300/200" />
      <LazyImage src="https://picsum.photos/id/246/300/200" />
      <LazyImage src="https://picsum.photos/id/247/300/200" />
      <LazyImage src="https://picsum.photos/id/248/300/200" />
      <LazyImage src="https://picsum.photos/id/249/300/200" />
    </div>
  </div>
);

const SourceTemplate: Story<LazyImageProps> = () => (
  <div className={css.Story}>
    <div className={css.grid}>
      <LazyImage src={jpg1x}>
        <source
          srcSet={`${avif3x} 3x, ${avif2x} 2x, ${avif1x} 1x`}
          type="image/avif"
        />
        <source
          srcSet={`${webp3x} 3x, ${webp2x} 2x, ${webp1x} 1x`}
          type="image/webp"
        />
      </LazyImage>
    </div>
  </div>
);

const Default = Template.bind({});
const Multiple = MultipleTemplate.bind({});
const Source = SourceTemplate.bind({});

Default.args = {
  src: "https://picsum.photos/150/200",
  srcSet:
    "https://picsum.photos/id/249/150/200 1x, https://picsum.photos/id/239/150/200 2x, https://picsum.photos/id/237/150/200 3x",
};

Default.parameters = {
  docs: {
    storyDescription: "Story description",
  },
};

export { Default, Multiple, Source };
