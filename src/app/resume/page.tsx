import { notFound, redirect } from 'next/navigation';

import { getResume } from '@/repositories/resume';

const ResumePage = async () => {
  const resumeResponse = await getResume();
  const resume = resumeResponse.data.resume;

  if (resume === null) {
    notFound();
  }

  redirect(resume.url, 'push');
};

export default ResumePage;
