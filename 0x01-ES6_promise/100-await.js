import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const queue = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    queue = { photo, user };
  } catch (error) {
    queue = { photo: null, user: null };
  }
  return queue;
}
