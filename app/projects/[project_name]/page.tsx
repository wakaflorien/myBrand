import Link from "next/link";
import { projects } from "../../../data/projects";
import ProjectPageClient from "./ProjectPageClient";

export async function generateMetadata({ params }: { params: Promise<{ project_name: string }> }) {
    const { project_name } = await params;
    const project = projects.find((item) => item.title === decodeURIComponent(project_name));
    if (!project) return { title: "Project not found" };
    return {
        title: `${project.title} | Florien Niyongabo`,
        description: project.summary,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ project_name: string }> }) {
    const { project_name } = await params;
    return <ProjectPageClient projectName={project_name} />;
}
