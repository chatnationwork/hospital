export const DEPARTMENTS = [
  { id: 'gp', name: 'General Medicine', icon: '🩺' },
  { id: 'cardio', name: 'Cardiology', icon: '❤️' },
  { id: 'peds', name: 'Pediatrics', icon: '👶' },
  { id: 'ortho', name: 'Orthopedics', icon: '🦴' },
  { id: 'ent', name: 'ENT', icon: '👂' },
];

export const DOCTORS: Record<string, Array<{ id: string; name: string; title: string; image?: string }>> = {
  gp: [
    { id: 'dr_smith', name: 'Dr. John Smith', title: 'Senior GP' },
    { id: 'dr_doe', name: 'Dr. Jane Doe', title: 'Resident GP' },
  ],
  cardio: [
    { id: 'dr_heart', name: 'Dr. Sarah Heart', title: 'Chief Cardiologist' },
  ],
  peds: [
     { id: 'dr_kid', name: 'Dr. Billy Kid', title: 'Pediatrician' },
  ],
  ortho: [
      { id: 'dr_bone', name: 'Dr. Bones', title: 'Ortho Surgeon' },
  ],
  ent: [
      { id: 'dr_nose', name: 'Dr. Nose', title: 'ENT Specialist' },
  ]
};
