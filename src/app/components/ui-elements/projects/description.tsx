import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import CtaButton from "../cta-button";
import CtaLink from "../cta-link";

interface ProjectDescriptionProps {
  excerpt: string;
  description: string;
  btnLabel: string;
  url: string;
}

const ProjectDescription = ({
  excerpt,
  description,
  btnLabel,
  url,
}: ProjectDescriptionProps) => {
  return (
    <div className="w-1/2 space-y-3">
      <h2 className="text-2xl text-headings">{excerpt}</h2>
      <p className="text-par leading-relaxed first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-btn-bg first-letter:mr-3 first-letter:float-left">
        {description}
      </p>
      <div className="w-fit pt-4">
        {btnLabel === "VISIT WEBSITE" ? (
          <CtaLink label={btnLabel} icon={BiChevronRight} url={url} />
        ) : (
          <CtaButton label={btnLabel} icon={BiChevronDown} onClick={() => {}} />
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
