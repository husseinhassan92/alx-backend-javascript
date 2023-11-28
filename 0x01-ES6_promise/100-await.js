import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser(uploadPhoto, createUser ) {
    const queue = {};

    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        queue = {photo, user};
    } catch (error) {
        queue = {photo : null, user : null};
    }
    return queue;
}
