const htmlConverter = (html: string) => {
  const result = html
    .replace(/<h2/g, `<h2 style="margin-top: 8px"`)
    .replace(/<h3/g, `<h3 style="margin-top: 4px"`);

  return result;
};

const module = { htmlConverter };

export default module;
