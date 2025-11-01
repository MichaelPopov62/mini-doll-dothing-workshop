/* Модель Product для колекції продуктів у MongoDB.
   Визначає структуру документів (товарів) у базі даних.
   Забезпечує типізацію полів, валідацію перед збереженням
   і автоматично додає timestamps (createdAt, updatedAt).
*/


import { Schema, model } from 'mongoose';
// import mongoose from "mongoose";

//описую схему моделі продукта
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,//прибирає зайві пробіли
    },
    price:{ type:Number,
      required:true,
      min: 0, // додано базову валідацію
    },
     photo: { // нове поле для зберігання URL фото
      type: String,
      default: null, // якщо фото немає
    },
  },
  {
    timestamps: true, //  автоматично додає createdAt і updatedAt
    versionKey: false, // автоматично прибирає versionKey (__v)тобто версію документа
  },
);
//Створює модель Product, яка зв'язана з колекцією contacts у MongoDB,
export const Product = model('Product', productSchema);
