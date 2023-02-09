import { Storage } from "../intarfaces/storage";
import StorageModel from "../models/storage.model";


const registerUpload = async ({ fileName, idUser, path }: Storage) => {
    const responseItem = await StorageModel.create({ fileName, idUser, path });
    return responseItem;
};

export { registerUpload };
