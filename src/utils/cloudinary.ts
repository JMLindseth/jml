const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;

// Bygger en Cloudinary-URL med automatisk kvalitet og format
export const bildUrl = (publicId: string, bredde?: number): string => {
  const transformasjoner = ["q_auto", "f_auto", ...(bredde ? [`w_${bredde}`] : [])].join(",");
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformasjoner}/${publicId}`;
};
