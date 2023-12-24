import { createClient } from "@/prismicio";

const prismicio = createClient();

const prismic = {
  async getItem({ type = "page", uid }) {
    return await prismicio.getByUID(type, uid);
  },

  async getSingleton(type) {
    return await prismicio.getSingle(type);
  }
};

export default prismic;
