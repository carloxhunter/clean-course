import { PostService } from './05-dependency-b';
import { JsonDatabaseService } from './05-dependency-c';


// Main
(async () => {

  const provider = new JsonDatabaseService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts })


})();