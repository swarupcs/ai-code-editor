'use client';

import ProjectTable from './project-table';
import {
  deleteProjectById,
  editProjectById,
  duplicateProjectById,
} from '@/modules/dashboard/actions';
import type { Project } from '../types'; // <-- IMPORT THE TYPE

interface ProjectTableClientProps {
  projects: Project[];
}

export default function ProjectTableClient({
  projects,
}: ProjectTableClientProps) {
  return (
    <ProjectTable
      projects={projects}
      onDeleteProject={deleteProjectById}
      onUpdateProject={editProjectById}
      onDuplicateProject={async (id) => {
        await duplicateProjectById(id); // ensures return type is Promise<void>
      }}
    />
  );
}
