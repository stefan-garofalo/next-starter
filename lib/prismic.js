import { createClient } from "@/prismicio";
import prismicUtil from "@/utils/prismic";

const prismicio = createClient();

const prismic = {
  async getPage(uid){
    const data = await prismicio.getByUID("page", uid)
    return prismicUtil.formatPage(data)
  }
}

export default prismic;