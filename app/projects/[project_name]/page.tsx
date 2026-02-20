import { projects } from "../../../data/projects";
import ProjectPageClient from "./ProjectPageClient";

function decodeParam(value: string): string {
    try {
        return decodeURIComponent(value);
    } catch {
        return value;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ project_name: string }> }) {
    const { project_name } = await params;
    const decodedName = decodeParam(project_name);
    const project = projects.find((item) => item.title === decodedName);
    if (!project) return { title: "Project not found" };
    return {
        title: `${project.title} | Florien Niyongabo`,
        description: project.summary,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ project_name: string }> }) {
    const { project_name } = await params;
    const decodedName = decodeParam(project_name);
    return <ProjectPageClient projectName={decodedName} />;
}
