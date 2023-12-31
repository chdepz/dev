import React from "react";
import ExternalLink from "../svgs/ExternalLink";
import Button from "../common/Button";
import { ProjectType } from "@/types";
import Text from "../common/Text";

type ProjectPropType = {
  project: ProjectType;
};

export default function Project({ project }: ProjectPropType) {
  const { name, description, tags, link } = project;

  return (
    <div className="flex flex-1 flex-col justify-start gap-3 rounded-lg  bg-slate-50 p-6 shadow">
      <h2
        data-animation="text"
        className="mr-1 font-anek-bangla text-xl font-light text-raisin-black md:text-3xl"
      >
        {name}
      </h2>
      <div className="mb-2 flex flex-wrap gap-3 text-black">
        {tags.map((tag) => {
          return (
            <Button key={tag} className="button">
              {tag}
            </Button>
          );
        })}
      </div>
      <Text className="font-anek-bangla text-black">{description}</Text>

      <a
        data-animation="text"
        href={link}
        target="_blank"
        rel="nofollow"
        className="flex gap-1 text-lg text-neutral-600"
      >
        <span className="text-black">Visit Website</span>
        <div className="h-5 w-5 translate-y-1">
          <ExternalLink />
        </div>
      </a>
    </div>
  );
}
