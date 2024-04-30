import React, { useState } from "react";
import BasicWrapper from "./BasicWrapper"; // Подключаем компонент оболочки
import Breadcrumbs from "./Breadcrumbs";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Куртка рабочая",
      price: 2500,
      quantity: 2,
      image: "https://example.com/images/jacket.jpg",
    },
    {
      id: 2,
      name: "Брюки рабочие",
      price: 1500,
      quantity: 1,
      image: "https://example.com/images/pants.jpg",
    },
    {
      id: 3,
      name: "Перчатки защитные",
      price: 500,
      quantity: 3,
      image: "https://example.com/images/gloves.jpg",
    },
  ]);

  const removeFromCart = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <BasicWrapper>
      <Breadcrumbs /> {/* Используем компонент оболочки */}
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-8">Корзина</h2>
        {items.length === 0 ? (
          <p className="text-gray-600">Ваша корзина пуста.</p>
        ) : (
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-300 py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/176x256"
                    alt={item.name}
                    className="w-24 h-24"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600">
                      {item.price} руб. x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-20 border border-gray-300 rounded px-2 py-1"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8">
              <p className="font-semibold">Общая стоимость:</p>
              <p className="font-semibold">{totalPrice} руб.</p>
            </div>
            <button className="mt-8 bg-blue-500 text-white py-2 px-6 rounded">
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </BasicWrapper>
  );
};

export default Cart;
