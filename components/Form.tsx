import React from 'react'
import { useNewEmail } from '../features/hooks/useNewEmail'

const Form: React.FC = () => {
  const {
    formRef,
    form: {
      register,
      handleSubmit,
      formState: { errors },
    },
  } = useNewEmail()

  return (
    <div className=" container relative mx-auto mt-36 rounded-lg bg-gray-600 p-5 text-white shadow-lg">
      <div className="dummy absolute -top-28" id="contact"></div>
      <h3 className="text-center text-2xl">Skontaktuj się ze mną!</h3>
      <form onSubmit={handleSubmit} ref={formRef} className=" form-control">
        <div className="w-full max-w-4xl lg:mx-auto">
          <label className="label">
            <span className="label-text ">Twoje imię</span>
          </label>
          <input
            type="text"
            {...register('name')}
            placeholder="Twoje imię"
            className="input-bordered input w-full"
          />
          <div className="text-sm text-red-500">
            {errors.name?.type === 'too_small' && 'Wymagane minimum 3 litery'}
            {errors.name?.type === 'too_big' && 'Maksymalnie 30 znaków'}
          </div>
        </div>

        <div className="w-full max-w-4xl lg:mx-auto">
          <label className="label">
            <span className="label-text">Twój email</span>
          </label>
          <input
            type="text"
            {...register('email')}
            placeholder="Twój email"
            className="input-bordered input w-full "
          />
          <div className="text-sm text-red-500">
            {errors.email && 'Niepoprawny email'}
          </div>
        </div>

        <div className="w-full max-w-4xl lg:mx-auto">
          <label className="label">
            <span className="label-text ">Temat</span>
          </label>
          <input
            type="text"
            placeholder="Temat"
            {...register('topic')}
            className="input-bordered input w-full "
          />
          <div className="text-sm text-red-500">
            {errors.topic?.type === 'too_small' && 'Wymagane minimum 3 litery'}
            {errors.topic?.type === 'too_big' && 'Maksymalnie 30 znaków'}
          </div>
        </div>

        <textarea
          id="emailText"
          {...register('emailText')}
          cols={10}
          rows={5}
          className="mt-8 w-full max-w-4xl rounded-lg p-3 text-black lg:mx-auto"
          placeholder="Treść e-maila"
        />
        <div className="w-full max-w-4xl text-sm text-red-500 lg:mx-auto">
          {errors.emailText?.type === 'too_small' &&
            'Wymagane minimum 10 liter'}
          {errors.emailText?.type === 'too_big' &&
            'Wiadomość moze mieć maksymalnie 300 znaków'}
        </div>

        <button type="submit" className="btn-outline btn mx-auto mt-5 w-1/2">
          Wyślij
        </button>
      </form>
    </div>
  )
}

export default Form
