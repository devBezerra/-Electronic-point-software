import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: String,
  contact: String,
  valid: Boolean,
  acquirements: Array,
});
