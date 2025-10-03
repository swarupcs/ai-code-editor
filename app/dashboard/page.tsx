import {
  deleteProjectById,
  duplicateProjectById,
  editProjectById,
  getAllPlaygroundForUser,
} from '@/modules/dashboard/actions';
import AddNewButton from '@/modules/dashboard/components/add-new';
import AddRepo from '@/modules/dashboard/components/add-repo';
import EmptyState from '@/modules/dashboard/components/empty-state';
import ProjectTable from '@/modules/dashboard/components/project-table';
import React from 'react';

const Page = async () => {
  const playgrounds = await getAllPlaygroundForUser();

  console.log('Playgrounds:', playgrounds);

  // Normalize Prisma result so description is always a string
  const normalizedPlaygrounds = (playgrounds || []).map((p) => ({
    ...p,
    description: p.description ?? '', // fallback if null
  }));

  console.log('Playgrounds:', normalizedPlaygrounds);
  return (
    <div className='flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        <AddNewButton />
        <AddRepo />
      </div>

      <div className='mt-10 flex flex-col justify-center items-center w-full'>
        {playgrounds && playgrounds.length === 0 ? (
          <EmptyState />
        ) : (
          <ProjectTable
            projects={normalizedPlaygrounds}
            onDeleteProject={deleteProjectById}
            onUpdateProject={editProjectById}
            onDuplicateProject={async (id) => {
              await duplicateProjectById(id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
