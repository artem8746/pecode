import { Post } from "@prisma/client";
import { StatusCode } from "../enums/StatusCode";
import * as postsService from "../services/posts.service";

export const getAll = async (req, res) => {
  try {
    const posts = await postsService.getAll();

    res.status(StatusCode.OK);
    res.send(posts);
  } catch (ex) {
    res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
  }
}

export const create = async (req, res) => {
  const post = req.body as Partial<Post>;

  post.createdById = req.user.id;

  try {
    const createdPost = await postsService.create(post as Post);

    res.status(StatusCode.CREATED);
    res.send(createdPost);
  } catch (ex) {
    res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
  }
}