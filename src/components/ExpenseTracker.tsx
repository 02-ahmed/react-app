import React from 'react';
import '../App.css';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';


const schema = z.object({
  description: z.string().min(3, {message:'This field is required'}),
  amount: z.number({invalid_type_error:'Enter an amount'}).min(1),
  category: z.enum(['all-categories', 'groceries', 'utilities', 'entertainment'], {message: 'A category should be selected'})
});

type FormData = z.infer<typeof schema>

const ExpenseTracker = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <>
      <div className='container-fluid expense-tracker'>
        <form action="submit" onSubmit={handleSubmit(onSubmit)}>
        <div className='row g-3'>
        <div className='col-12'>
          <label htmlFor="description">Description</label>
          <input {...register('description')} type="text" className='form-control' id="description"/>
          {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className='col-12 '>
          <label htmlFor="amount">Amount</label>
          <input {...register('amount', {valueAsNumber: true})} type="number" className='form-control' id="amount"/>
          {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className='col-12 '>
          <label htmlFor="category">Category</label>
          <select {...register('category')} name="category" id="category" className='form-select'>
            <option value=""></option>
            <option value="all-categories">All Categories</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
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