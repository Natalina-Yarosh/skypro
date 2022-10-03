let json = JSON.parse(JSON.stringify(api));

const container = document.querySelector(".wrap");

function photoEngineTemplate(photo) {
  return {
    tag: "article",
    cls: "wrap__item",
    content: [
      {
        tag: "div",
        cls: "wrap__block",
        content: [
          {
            tag: "img",
            cls: "wrap__img",
            attrs: {
              src: photo.image_url,
            },
          },
        ],
      },
      {
        tag: "h3",
        cls: "wrap__title",
        content: photo.tagline,
      },
      {
        tag: "p",
        cls: "wrap__text",
        content: `Крепость: ${photo.abv}`,
      },
    ],
  };
}

container.appendChild(templateEngine(json.map(photoEngineTemplate)));

console.log(json[0].tagline);
console.log(json[0].image_url);
console.log(json[0].abv);
