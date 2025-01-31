import { Project } from "@/app/lib/types";
import SectionHeader from "../section-header";
import ProjectDescription from "./description";
import ProjectImages from "./images";

interface ProjectDetailsProps {
  data: Project;
}

const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  return (
    <div className="w-full h-auto pt-10 sm:pt-20 lg:pt-32">
      <SectionHeader title={data.title} />
      <div className="flex items-start justify-between gap-x-8">
        {data.placement === "normal" ? (
          <>
            <ProjectDescription
              excerpt={data.excerpt}
              description={data.description}
              btnLabel={data.btnLabel}
              url={data.url}
            />
            <ProjectImages />
          </>
        ) : (
          <>
            <ProjectImages />
            <ProjectDescription
              excerpt={data.excerpt}
              description={data.description}
              btnLabel={data.btnLabel}
              url={data.url}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
