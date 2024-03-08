function convertToNestedObject(categories) {
  const categoryMap = {};
  const topLevelCategories = [];

  // Создание хэш-карты категорий для быстрого доступа по id
  categories.forEach((category) => {
    categoryMap[category.id] = {
      id: category.id,
      name: category.name,
      slug: category.slug,
      url: category.url,
      children: [],
    };
  });

  // Строим вложенные категории
  categories.forEach((category) => {
    if (category.parent === null) {
      topLevelCategories.push(categoryMap[category.id]);
    } else {
      categoryMap[category.parent].children.push(categoryMap[category.id]);
    }
  });

  return topLevelCategories;
}

const categories = [
  {
    id: 3,
    name: "Категория 1",
    slug: "cat1",
    parent: null,
    url: "http://localhost:8001/shop/categories/3/",
  },
  {
    id: 4,
    name: "Категория 2",
    slug: "cat2",
    parent: null,
    url: "http://localhost:8001/shop/categories/4/",
  },
  {
    id: 5,
    name: "Категория 3",
    slug: "cat3",
    parent: null,
    url: "http://localhost:8001/shop/categories/5/",
  },
  {
    id: 6,
    name: "Категория1Суб1",
    slug: "cat1s1",
    parent: 3,
    url: "http://localhost:8001/shop/categories/6/",
  },
  {
    id: 7,
    name: "Категория1Суб1Суб1",
    slug: "cat1s1s1",
    parent: 6,
    url: "http://localhost:8001/shop/categories/7/",
  },
];

const nestedCategories = convertToNestedObject(categories);
console.log(nestedCategories);
