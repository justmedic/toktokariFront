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

export default convertToNestedObject;
