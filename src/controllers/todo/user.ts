import { response } from "express"
import { request } from "http"
import { getRepository, getTreeRepository } from "typeorm"
import { User } from "@models/entity/users"

export const postUser = async (request, response) => {
  const postRepository = getRepository(User)
  const userSaved = await postRepository.save(request.body)
  return response.json(userSaved)
}
export const getUser = async (request, response) => {
  const getUserRepository = getRepository(User);
  const users = await getUserRepository
    .createQueryBuilder('user')
    .orderBy('user.createdAt', 'DESC') // Ordena pela data de criação em ordem ascendente
    .getMany();

    console.log(users)    
    return response.json(users);
};

export const getUserId = async (request, response) => {
  const getIdRepository = getRepository(User)
  const userFind = await getIdRepository.findOne(request.params.id)
  return response.json(userFind)
}

export const deleteUser = async (request, response) => {
  const lastDate = new Date
  const deleteRepository = getRepository(User)
  const userDelete = await deleteRepository.delete(request.params.id)
  return response.json({userDelete, lastDate})
}

export const putUser = async (request, response) => {
  const putRepository = getRepository(User)
  const userEdit = await putRepository.update(request.params.id, request.body)
  return response.json(userEdit)
}


