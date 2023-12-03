import groupBy from "lodash/groupBy";

const service = {
  parseRichText(data){
    let { text: string, spans: tags } = data

    tags.sort((a, b) => b.start - a.start)
      .forEach(tag => {
        const { start, end, type } = tag
        const openTag = `<${type}>`
        const closeTag = `</${type}>`
        
        string = string.slice(0, start) + openTag + string.slice(start)
        string = string.slice(0, end + openTag.length) + closeTag + string.slice(end + openTag.length)
        string = string.replace('\n', '<br>')
      });

    return string
  },
  
  formatPage(item) {
    item.data.slices = groupBy(item.data.slices, "slice_type");
    for (let key in item.data.slices) {
      item.data.slices[key] = item.data.slices[key].length === 1
        ? item.data.slices[key][0]
        : item.data.slices[key];
    }
    return item;
  },
};

export default service;
