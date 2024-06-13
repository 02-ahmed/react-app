import React from 'react';
import '../ExpenseTracker.css'
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import categories from '../categories';


const schema = z.object({
  description: z.string().min(3, {message:'Description should be at least 3 characters'}).max(100, {message: 'max allowed chars is 100'}),
  amount: z.number({invalid_type_error:'Enter an amount'}).min(1).max(1000, {message: 'You have exceeded highest amount'}),
  category: z.enum(categories, {message: 'A category should be selected'})
});

type FormData = z.infer<typeof schema>

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseTracker = ({onSubmit}:Props) => {
  const {register, reset, handleSubmit, formState:{errors}} = useForm<FormData>({resolver: zodResolver(schema)});

  return (
    <>
      <div className='container-fluid expense-tracker'>
        <form onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}>
        <div className='row g-3'>
        <div className='col-12'>
          <label htmlFor="description" className='form-label'>Description</label>
          <input {...register('description')} type="text" className='form-control' id="description"/>
          {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className='col-12 '>
          <label htmlFor="amount" className='form-label'>Amount</label>
          <input {...register('amount', {valueAsNumber: true})} type="number" className='form-control' id="amount"/>
          {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className='col-12'>
          <label htmlFor="category" className='form-label'>Category</label>
          <select {...register('category')} name="category" id="category" className='form-select'>
            <option value=""></option>
            {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
          </select>
          {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <div className='col-12'>
        <button className='btn btn-primary' type='submit'>Submit</button>
        </div>
        </div>
        </form>
        
      </div>
    </>
  )
}

export default ExpenseTracker